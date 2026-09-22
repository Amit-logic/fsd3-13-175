import http from "http";
 import { getAllProducts } from "./products.js";
const server = http.createServer((req,res)=>{
    if(req.url === "/api/v1/products" && req.method === "GET"){
        res.statusCode = 200;
        const data =getAllProducts();
        res.setHeader('content-type','application/json')

        res.end(JSON.stringify({
        count:data.length,
        data,
        })
    );

    }
    else if(req.url === '/' && req.method === "POST"){
        //console.log("Request:",req);

    }

    else if(req.url.startsWith("/product/") && req.method === "PUT"){
       const productID= req.url.split('/').pop();
       console.log('update product id:',productID);
       let body =''
         req.on("data",(chunk) => {
            body += chunk;
         });
         req.on("end", () => {
            const product = JSON.parse(body);
            product.id = productID
            res.statusCode = 200;
            res.end(JSON.stringify({msg:'product added',product}));
         });


    }


    else if(req.url === '/' && req.method === "DELETE"){
        res.statusCode = 200;
        res.end( "DELETE Request");
    }
    else if(req.url === '/' && req.method === "DELETE"){
        res.statusCode = 200;
        res.end("DELETE Request");
    }
    else{
        res.statusCode = 404;
        res.end("request Not Found");
    }

});
server.listen(5000,() => console.log("prg6 is running"));