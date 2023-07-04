#!/usr/bin/env node
//Node.js脚本


var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

process.chdir('/Users/hly/Desktop') // cd ~/Desktop
fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync("./index.html", "")
fs.writeFileSync("css/style.css", "")
fs.writeFileSync("./js/main.js", "")

process.exit(0)