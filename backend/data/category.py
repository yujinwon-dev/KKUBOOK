import csv
import datetime
from crawling import category_crawling
import pandas as pd


with open('category_table.csv','a', newline="") as write_f:
    # headers = ['pk', 'isbn', 'title', 'description', 'author', 'publisher', 'img_url', 'page']
    headers = ['isbn', 'main', 'sub', 'third']
    
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
                category = {
                    'isbn': f[0]
                }
                try:
                    print(f'{i}번째 크롤링 시작!')
                    category_tmp = category_crawling(category['isbn'])
                    category_list = []
                    for i in category_tmp:
                        category[headers[i+1]] = i.get_text().strip().strip('>').strip()
                    print(f'{i}번째 크롤링 성공!')
                    writer.writerow(category)
                    print(f'{i}번째 쓰기 성공~~')
                except AttributeError:
                    print(f'{i}번째 크롤링 실패')
        print('끝:', datetime.datetime.now())
