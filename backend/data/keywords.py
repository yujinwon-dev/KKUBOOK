import csv
import datetime
import requests
from crawling import keyword_crawling


input_path = r'./data/book_table.csv'
output_path = r'./data/keyword_table.csv'
e_output_path = r'./data/err_keyword.csv'

with open(output_path,'a', newline="") as write_f:
    headers = ['isbn', 'word']
    
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

                    keyword = {}
                    try:
                        # print(f'{i}번째 크롤링 시작!')
                        keyword_tmp = keyword_crawling(f[0])
                        print(f[0])
                        print(keyword_tmp)
                        print(f'{i}번째 크롤링 성공!')
                        for k in keyword_tmp:
                            keyword['word'] = k.get_text().strip('#')
                            keyword['isbn'] = f[0]
                            writer.writerow(keyword)
                        # print(f'{i}번째 쓰기 성공~~')
                    except AttributeError:
                        print(f'{i}번째 크롤링 실패')
                    except UnicodeEncodeError:
                        print(f'{i}번째 크롤링 실패')
                    except requests.exceptions.Timeout:
                        writer_e.writerow(f[0])
                    except requests.exceptions.ConnectionError:
                        writer_e.writerow(f[0])
                    # except:
                    #     writer_e.writerow(f[0])
            print(f'시작: {start_time} 끝: {datetime.datetime.now()}')