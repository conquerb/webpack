#!/usr/bin/env bash ## 
filename="wx-`date +%Y%m%d%H%M`"
scp -r /Users/zzdl/Documents/source/wanxiang/wx/dist/*  root@47.93.36.95:/home/web/wx/
scp -r /Users/zzdl/Documents/source/wanxiang/wx/dist root@47.93.36.95:/home/web/wx/$filename
