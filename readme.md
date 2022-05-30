<!-- ### note 

npm init -y
tsc -init
npm i express typescript nodemon
npm i @types/express --save-dev

@types/+package


## ref

typescirpt-node

https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/

https://www.centrilliontech.co.th/blog/3573/typescript-nodejs-express/

https://blog.logrocket.com/how-to-set-up-node-typescript-express/

https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/


deploy
https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896

https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b
 -->
# Testing Deploy Nodejs 
Testing deploy typescript-nodejs with docker via nginx

## Installation
### Set up vm
This using ubuntu server that create from Google Cloud Platform (vm instance)
```
$ sudo apt-get update

Install git
$ sudo apt-get install git


Install docker
$ sudo apt install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
$ apt-cache policy docker-ce
$ sudo apt update
$ sudo apt install docker-ce
$ sudo systemctl status docker

Setup ufw firewall
$ sudo ufw enable
$ sudo ufw status
$ sudo ufw allow ssh
$ sudo ufw allow http
$ sudo ufw allow https
```
 
### get project && deploy
```
$ git clone https://github.com/tenshiro007/typescript-nodejs-deploy-on-production

cd to root directory

$ docker-compose up -d --build
$ docker ps

nginx server run at port 8080
[your ip of vm]:8080

```
