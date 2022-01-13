---
title:  "PostgreSQL"
search: false
categories: 
  - memo
tags:
  - [DB, PostgreSQL]
toc: true
toc_sticky: true

date: 2022-01-13
last_modified_at: 2022-01-13
---


# PostgreSQL
---
## PostgreSQL

설치 -> DBeaber연결 -> R 연결
한글 인코딩
사용방법(명령어)

PostgreSQL Download <https://www.postgresql.org/download/>


postgreSQL 서버 접속
<https://postgresql.kr/blog/postgresql_for_windows.html>


postgreSQL 관련
<https://sujinisacat.tistory.com/9?category=401454>


postgreSQL 서버 실행
<http://daplus.net/postgresql-windows%EC%97%90%EC%84%9C-postgresql%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EB%A0%A4%EB%A9%B4-%EC%96%B4%EB%96%BB%EA%B2%8C%ED%95%B4%EC%95%BC%ED%95%A9%EB%8B%88%EA%B9%8C/>



postgreSQL CSV 파일 인코딩 
<https://sidorl.tistory.com/27>





postgreSQL R 연동

```R
install.packages("RPostgres")
install.packages("DBI")

con <- dbConnect(RPostgres::Postgres(),dbname = 'db', 
                 host = '000.000.000.000', # i.e. 'ec2-54-83-201-96.compute-1.amazonaws.com'
                 port = 5432, # or any other port specified by your DBA
                 user = 'postgres',
                 password = 'xxxx')
```

참고 <https://github.com/r-dbi/RPostgres>

