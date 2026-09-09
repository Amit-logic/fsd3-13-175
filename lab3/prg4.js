import http from "http";
import { reviews ,items} from "./data.js";

const  server = http.createServer((req,res) =>{
    const product={
        id:1,
        name:'Mobile',
        price:25000,
        rating:4.5,
        review:200
    };
   
   
    if(req.url === '/api/products'){
        res.end(JSON.stringify(items));
    }else if(req.url === '/api/reviews'){
        res.end(JSON.stringify(reviews));
    }else{
        res.statusCode= 404;
        res.end();
    }

})

server.listen(3000,()=> console.log('prg4 is running...')
)
