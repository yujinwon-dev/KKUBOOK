import csv
import datetime
from crawling import (auth_crawling, page_crawling)
import pandas as pd


with open('book_table.csv','a', newline="") as write_f:
    # headers = ['pk', 'isbn', 'title', 'description', 'author', 'publisher', 'img_url', 'page']
    headers = ['isbn', 'title', 'description', 'author', 'publisher', 'img_url', 'page']
    
    writer = csv.DictWriter(write_f, fieldnames=headers)
    writer.writeheader()

    with open('dec_book.csv', encoding='utf-8') as csv_file:
        file = csv.reader(csv_file)
        for i, f in enumerate(file):
            if i > 5:
                break
            if not i:
                print('시작:', datetime.datetime.now())
            else:
                # tmp = f.split(',')
                # book 크롤링 => author, page
                book = {
                    # 'pk': i,
                    'isbn': f[1],
                    'title': f[3],
                    'description': f[10],
                    'img_url': f[9],
                    'publisher': f[5]
                }
                try:
                    print(f'{i}번째 크롤링 시작!')
                    book['author'] = auth_crawling(book['isbn'])
                    book['page'] = page_crawling(book['isbn'])
                    print(f'{i}번째 크롤링 성공!')
                    writer.writerow(book)
                    print(f'{i}번째 쓰기 성공~~')
                except AttributeError:
                    print(f'{i}번째 크롤링 실패')
        print('끝:', datetime.datetime.now())
