import glob
import pandas as pd

input_path = r'./data/book_*.csv'
file_list=glob.glob(input_path)

for file in file_list:
    rowsize = sum(1 for row in (open(file, encoding='UTF-8')))
    newsize = 10000   # 쪼개고 싶은 행수 입력
    times = 0
    for i in range(1, rowsize, newsize):
        times += 1
        df = pd.read_csv(file, header=None, nrows = newsize, skiprows=i)
        csv_output = 'book' + '__' + str(times) + '.csv'   # 쪼갠 수만큼 _1, _2... _n으로 꼬리를 달아서 파일명이 저장됨
        df.to_csv(csv_output, index=False, header=False, mode='a', chunksize=rowsize)