const http = require("http");

const PORT = 3000;

const server = http.createServer(requestListener);

function requestListener(request, response) {
    const { url, method } = request;

    if (url === "/") {
        views/home.renderPage();
    }

    else if (url === "/student") {
        views/student.renderPage();
    }

    else {
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>404</title></head>");
        response.write(`<body>"404 Not Found"</body>`);
        response.write("</html>");
        response.end();
    }

    console.log(`Server is running on ${PORT}`);
}

server.listen(PORT);