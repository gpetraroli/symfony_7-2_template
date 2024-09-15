#!/bin/sh

composer install --prefer-dist --no-progress --no-interaction
php ./bin/console importmap:install

# build assets (webpack encore or asset mapper)
./bin/console sass:build

php ./bin/console d:m:m --no-interaction
php ./bin/console cache:clear

chown -R www-data:www-data ./var

php-fpm
