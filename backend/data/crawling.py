import requests
from bs4 import BeautifulSoup
import pandas as pd

res = requests.get('https://www.kyobobook.co.kr/product/detailViewKor.laf?barcode=9791188331796')
# AttributeError => 존재 X
# print(res.content)
soup = BeautifulSoup(res.content, 'html.parser')

# 저자 가져오기
author = soup.select_one('span.name > a.detail_author').get_text()
print('#지은이')
print('---------------------------------------------------------------------------------------------')
print(author)
print('---------------------------------------------------------------------------------------------')
print()

# 장르 가져오기
category_tmp = soup.select_one('ul.list_detail_category > li')
category = category_tmp.find_all('a')
category_list = []
for i in category:
  category_list.append(i.get_text().strip().strip('>').strip())
print('#장르')
print('---------------------------------------------------------------------------------------------')
print(category_list)
print('---------------------------------------------------------------------------------------------')
print()

# 페이지수 가져오기
page_tmp = soup.find('table', 'margin_top10')
page = page_tmp.select_one('tr:nth-of-type(2) > td').get_text()
print('#페이지')
print('---------------------------------------------------------------------------------------------')
print(page)
print('---------------------------------------------------------------------------------------------')
print()

# 키워드 가져오기
keyword_tmp = soup.select_one('div.tag_list')
keyword = keyword_tmp.find_all('a')
keyword_list = []
for i in keyword:
  keyword_list.append(i.get_text().strip('#'))
print('#키워드')
print('---------------------------------------------------------------------------------------------')
print(keyword_list)
print('---------------------------------------------------------------------------------------------')

keyword_pick_tmp = soup.select_one('div.box_detail_keywordpick > div.book_keyword')
# keyword_pick = keyword_pick_tmp.find_all('a')
print('#키워드 pick')
print('---------------------------------------------------------------------------------------------')
print(keyword_pick_tmp)
# print(keyword_pick)
print('---------------------------------------------------------------------------------------------')