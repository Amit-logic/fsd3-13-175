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