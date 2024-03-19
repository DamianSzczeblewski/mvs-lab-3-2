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

    else if (url === "/student" && method === "POST") {
        student.renderPage(response);
    }

    else {
        response.statuscode = 404;
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>404</title></head>");
        response.write("<body>404 Not Found</body>");
        response.write("</html>");
    }

    console.log(`Server is running on ${PORT}`);
}

server.listen(PORT);
