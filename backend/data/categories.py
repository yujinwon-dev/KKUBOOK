import csv
import datetime
from crawling import category_crawling

input_path = r'./data/book_table.csv'
output_path = r'./data/category_table.csv'


with open(output_path,'a', newline="") as write_f:
    headers = ['isbn', 'main', 'sub', 'third']
    
    writer = csv.DictWriter(write_f, fieldnames=headers)
    # writer.writeheader()

    with open(input_path, encoding='utf-8') as csv_file:
        file = csv.reader(csv_file)
        for i, f in enumerate(file):
            if not i:
                start_time = datetime.datetime.now()
            else:
                category = {
                    'isbn': f[0]
                }
                try:
                    print(f'{i}번째 크롤링 시작!')
                    category_tmp = category_crawling(category['isbn'])
                    category_list = []
                    for j, c in enumerate(category_tmp):
                        if j > 2:
                            break
                        category[headers[j+1]] = c.get_text().strip().strip('>').strip()
                    # print(f'{i}번째 크롤링 성공!')
                    writer.writerow(category)
                    # print(f'{i}번째 쓰기 성공~~')
                except AttributeError:
                    print(f'{i}번째 크롤링 실패')
        print(f'시작: {start_time} 끝: {datetime.datetime.now()}')
