import json
import csv
import requests
from bs4 import BeautifulSoup
import pandas as pd

'''
master_seq,
1 isbn13,
vol,
3 title,
author,
5 publisher
pub_date,
add_code,
price,
9 img_url,
10 description,
kdc_class_no,
title_replace,author_replace,pub_date_2,
is_coll_aladin,is_coll_naver,isbn_origin
'''

'''
- pk (auto increment) integer
- isbn varchar(30)
- title varchar(100)
- description text
- author varchar(30)
- publisher varchar(30)
- img_url varchar(255)
- page integer
'''

with open('book_table.csv','w', newline="") as write_f:
    # headers = ['pk', 'isbn', 'title', 'description', 'author', 'publisher', 'img_url', 'page']
    headers = ['pk', 'isbn', 'title', 'description', 'publisher', 'img_url']
    writer = csv.DictWriter(write_f, fieldnames=headers)
    writer.writeheader()

    with open('dec_book.csv', encoding='utf-8') as csv_file:
        file = csv.reader(csv_file)
        for i, f in enumerate(file):
            if i > 5:
                break
            if not i:
                # print(len(f))
                pass
            else:
                # tmp = f.split(',')
                # book 크롤링 => author, page
                book = {
                    'pk': i,
                    'isbn': f[1],
                    'title': f[3],
                    'description': f[10],
                    'img_url': f[9],
                    'publisher': f[5]
                }
                writer.writerow(book)
