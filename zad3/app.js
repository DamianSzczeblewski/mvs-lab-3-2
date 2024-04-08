const http = require("http");

const home = require("./views/home");
const student = require("./views/student");

const PORT = 3000;

const server = http.createServer(requestListener);

function requestListener(request, response) {
    const { url, method } = request;

    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write(routes.handleHome());
        response.end();
        return;
    }

    if (url === "/student" && method === "POST") {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();
        return;
    }

    if (url === "/student") {
        response.setHeader("Content-Type", "text/html");
        response.write(routes.handleStudent());
        response.end();
        return;
    }

    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write("404 Not Found");
    response.end();
}

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
