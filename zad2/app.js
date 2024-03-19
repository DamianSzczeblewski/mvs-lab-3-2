const http = require("http");

const home = require("./views/home");
const student = require("./views/student");

const PORT = 3000;

const server = http.createServer(requestListener);

function requestListener(request, response) {
    const { url, method } = request;

    if (url === "/") {
        home.renderPage(response);
    }

    if (url === "/student") {
        student.renderPage(response);
    }

    console.log(`Server is running on ${PORT}`);
}

server.listen(PORT);
