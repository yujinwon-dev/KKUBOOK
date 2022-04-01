# import mariadb
# import sys

# import pandas as pd

# # Connect to MariaDB Platform
# try:
#     conn = mariadb.connect(
#         user="root",
#         password="kkubook204",
#         host="localhost",
#         port=3307,
#         database="kkubook"
#     )
# except mariadb.Error as e:
#     print(f"Error connecting to MariaDB Platform: {e}")
#     sys.exit(1)

# # Get Cursor
# cur = conn.cursor()


# # selectall = "SELECT * from employee" 
# select_all_bookshelf = "SELECT id, book_status, rating from kkubooks_bookshelf" 
# cur.execute( select_all_bookshelf )

# # bookshelf query 결과를 list 형으로 가져옴.
# bookshelf_resultset = cur.fetchall()

# for bookshelf in bookshelf_resultset: 
#     print(f'bookshelf_pk: {bookshelf[0]} | book_status: {bookshelf[1]} | rating:{bookshelf[2]}')


# print('--------------------------------------------')
# select_all_user = "SELECT id, username from accounts_user" 
# cur.execute( select_all_user )

# # user query 결과를 list 형으로 가져옴.
# user_resultset = cur.fetchall()

# for user in user_resultset: 
#     print(f'user_pk: {user[0]} | username: {user[1]}')


import pandas as pd
import mariadb
from datetime import datetime


def query_MariaDB(query):

     # DB Connection
     conn = mariadb.connect(
        user="root",
        password="kkubook204",
        host="localhost",
        port=3307,
        database="kkubook"
    )

     # start time
     start_tm = datetime.now()

     # Get a DataFrame
     global query_result

     query_result = pd.read_sql(query, conn)

     # Close connection
     end_tm = datetime.now()

     print('START TIME : ', str(start_tm))
     print('END TIME : ', str(end_tm))
     print('ELAP time :', str(end_tm - start_tm))
     conn.close()

     return query_result


df = query_MariaDB("SELECT book_id, rating, user_id from kkubooks_bookshelf where book_status=0")

df_user_book_pivot = df.pivot(index='user_id', columns='book_id', values='rating').fillna(0)

print(df_user_book_pivot)
