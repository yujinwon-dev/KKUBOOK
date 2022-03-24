import pandas as pd
import glob
import os

input_path = r'./202112.csv' #합칠 파일들이 들어있는 디렉토리 경로
output_path = r'./dec_book.csv' #최종 파일명
 
file_list=glob.glob(input_path)

with open(output_path,'w') as f:
  for i, file in enumerate (file_list): #첫 번째 파일은 그대로 불러오기
    if i==0: #첫 번째 파일은 그대로 불러오기
      with open(file,'r', -1, 'utf-8-sig') as f2:
        while True:
          line=f2.readline()
          # print(line)
          if not line:
            break
          try:
            f.write(line)
          except UnicodeEncodeError:
            pass
          # print(line)
      print('OK_1')
      print(file.split('\\')[-1])
 
    else:
      with open(file,'r', -1, 'utf-8-sig') as f2:
        n=0
        while True:
          line=f2.readline()
          if n!=0: #2번째 파일부터는 첫번째 줄(헤더)제외
            check = f.split(',')
            f.write(line)
            # print(line)
          if not line:
            break
          n+=1
      print('OK_2')
      print(file.split('\\')[-1])
 
file_num=len(next(os.walk('./'))[2]) #합친 파일의 총 개수 
print(file_num,' file merge complete...')