FROM mysql:5.7.24

ENV MYSQL_ROOT_PASSWORD="password"
ENV MYSQL_DATABASE="allrecipes"

COPY ./schema.sql /docker-entrypoint-initidb.d/
