#!/bin/sh

composer dump-env prod

php ./bin/console d:m:m --no-interaction

php-fpm
