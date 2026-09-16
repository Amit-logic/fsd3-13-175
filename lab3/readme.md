localhost - URL
127.0.0.1 - IP address

ctrl+C - stop the server
Every request from client has a pair of {request,response}
## NPM= Node Package Manager
used to install ,run, uninstall any program/project and package
-npm install <packageName>
-npm uninstall<packageName>

to use npm, the project must be  npm project,
to create npm project we can use 

-npm init -y
-it creates a package.json file automatically
package.json holds all the information related to install 
package from npm
- it also create a folder node_modules automatically
-node_moduiles holds the package/librery files
-generally we ignore the node_modules by .gitignore

Nodemon- it restart the server automatically when file changes,to install
>npm i nodemon -D
Note: -D flag will install this package as developer dependency.
- to  excute any program,update the package.json file the start the server as
<b> npm run dev</b>
-start -> it will excute the app on deployment.
-dev -> it will start server in development phase (only for developer)
-res:it will return contents (json/html/plain) to the user or client.
-req: it will receive the information from client to the server.
-server sends also statusCodes to the client,that indicates the error/sucess message.
## Status codes
-200-> ok
-201-> created
-400->Bad 
-401->unauthorised
-403->forbidden
-404-> not found
-500-> internal server error

## content type
-text/plain
-text/html
-application/json
-text/css
 the content types and status code can be send back to client by the two ways.
 1. res.writeHead
 2.res.setHead
 3.res.statusCode

  
## send html file to vlient
1. html file
-read html file using  createdreadstream
  -pipe it with res object

2. html content
send any html tags/content by using
res.end('any html tag')

## JSON ()
server return data only not html contents because html contain will be written front end developer.
the data is in json format(json always store data in key ,value pair enclosed by {},array can be store by [],one pair of curly bracket will represent one object and its properties will be seperated by comma)
```
{ id:1,
name:'Mobile',
price:25000,
rating:4.5,
review:200
}

##  Headers is used to tell thr client,the type of data send by the server it may be html file,json file or json data claim text file ,css file any tokens (for login)
1. text/plain-> text file
2.text/html-> html contents/file
3.application/json->json content file
4.text/css->stylesheet
5.application/form-data->for uploading file
6.application/auth->for tokens
the headers can be set by res object at server