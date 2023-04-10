npm install;
npm run generate;
cp -a dist/* /usr/share/nginx/html;
# cp -a dist/* /var/www/html;
nginx -g 'daemon off;'
