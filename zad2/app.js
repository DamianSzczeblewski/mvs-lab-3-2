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

    console.log(`Server is running on ${PORT}`);
}

server.listen(PORT);