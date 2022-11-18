# k8s_study
This is my own project to study how to deploy app by k8s


I have 3 servers which is on cloud, 2 workers and 1 master

  --environment :centos7.6.0_x64

  --Kubernetes version: 
  
  
  Master 1.22.5-tke.6
  
  
  Node 1.22.5-tke.6

This test app(Serverless app) has been created an image using docker(Using Node.js to develop):
https://hub.docker.com/repository/docker/yuhanpony/web


This easy app is based on Nodejs, which also needs dependency koa, log4j,koa-router

pull the image:docker pull yuhanpony/web:v1
