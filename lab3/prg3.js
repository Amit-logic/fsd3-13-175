import { createReadStream } from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.setHeader("Content-Type", "text/html");

        res.end(`
            <h1>Choose Product</h1>

            <a href="/bottle">
                <button>Bottle</button>
            </a>

            <a href="/pot">
                <button>Water Pot</button>
            </a>
        `);

    } else if (req.url === "/bottle") {

        res.setHeader("Content-Type", "text/html");

        const stream = createReadStream("bottle.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);

    } else if (req.url === "/pot") {

        res.setHeader("Content-Type", "text/html");

        const stream = createReadStream("pot.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);

    } else {

        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000...");
});