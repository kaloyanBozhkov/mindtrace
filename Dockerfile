# MySQL db for local use

FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=mindtrace

VOLUME /var/lib/mysql

EXPOSE 3308

CMD ["mysqld"]

# Steps to run:
# docker build -t mindtrace-db .       
# docker run --name mindtrace-db -d -p 3308:3306 mindtrace-db
# docker exec -it mindtrace-db mysql -u root -p
# CREATE DATABASE mindtrace
# be sure to create database and update the connetion URL in .env
