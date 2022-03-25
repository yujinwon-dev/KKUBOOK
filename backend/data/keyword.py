import csv
import datetime
from crawling import keyword_crawling


with open('keyword_table.csv','a', newline="") as write_f:
    # headers = ['pk', 'isbn', 'title', 'description', 'author', 'publisher', 'img_url', 'page']
    headers = ['isbn', 'word']
    
    writer = csv.DictWriter(write_f, fieldnames=headers)
    writer.writeheader()

    with open('book_table.csv', encoding='utf-8') as csv_file:
        file = csv.reader(csv_file)
        for i, f in enumerate(file):
            if i > 5:
                break
            if not i:
                print('시작:', datetime.datetime.now())
            else:
                keyword = {}
                try:
                    print(f'{i}번째 크롤링 시작!')
                    keyword_tmp = keyword_crawling(f[0])
                    print(f'{i}번째 크롤링 성공!')
                    for i in keyword_tmp:
                        keyword['word'] = i.get_text().strip('#')
                        keyword['keyword'] = f[0]
                        writer.writerow(keyword)
                        print(f'{i}번째 쓰기 성공~~')
                except AttributeError:
                    print(f'{i}번째 크롤링 실패')
        print('끝:', datetime.datetime.now())