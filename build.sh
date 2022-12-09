npm install;
npm run generate;
cp ./deploy/.htaccess dist/.htaccess
cp ./deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
cp -a dist/* /usr/share/nginx/html;
nginx -g 'daemon off;'