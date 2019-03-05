git reset --hard
git pull
rm -Rf .next
yarn build
pm2 restart server.js