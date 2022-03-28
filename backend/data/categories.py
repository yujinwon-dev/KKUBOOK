import csv
import datetime
import requests
from crawling import category_crawling

input_path = r'./data/book_table.csv'
output_path = r'./data/category_table.csv'
e_output_path = r'./data/err_category.csv'

with open(output_path,'a', newline="") as write_f:
    headers = ['isbn', 'main', 'sub', 'third']
    
    writer = csv.DictWriter(write_f, fieldnames=headers)
    # writer.writeheader()
    with open(e_output_path,'a', newline="") as write_e:
        writer_e = csv.writer(write_e)

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
                        # print(f'{i}번째 크롤링 시작!')
                        category_tmp = category_crawling(category['isbn'])
                        category_list = []
                        for j, c in enumerate(category_tmp):
                            if j > 2:
                                break
                            category[headers[j+1]] = c.get_text().strip().strip('>').strip()
                        print(f'{i}번째 크롤링 성공!')
                        writer.writerow(category)
                        # print(f'{i}번째 쓰기 성공~~')
                    except AttributeError:
                        print(f'{i}번째 크롤링 실패')
                    except UnicodeEncodeError:
                        print(f'{i}번째 크롤링 실패')
                    except requests.exceptions.Timeout:
                        writer_e.writerow(f[0])
                    except requests.exceptions.ConnectionError:
                        writer_e.writerow(f[0])
            print(f'시작: {start_time} 끝: {datetime.datetime.now()}')
