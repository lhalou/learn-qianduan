if [ -d $1 ]; then
  echo "$1已经存在了"
  exit 1
esle
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/index.js
  exit 0
f1
