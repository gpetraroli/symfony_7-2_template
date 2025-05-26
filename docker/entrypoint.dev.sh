#!/bin/sh

php ./bin/console d:m:m --no-interaction

chown -R www-data:www-data ./var

php-fpm
