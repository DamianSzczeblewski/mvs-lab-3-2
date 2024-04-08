const http = require("http");

const home = require("./views/home");
const student = require("./views/student");

const PORT = 3000;

const server = http.createServer(requestListener);

function requestListener(request, response) {
    const { url } = request;

    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write(home.renderPage());
        response.end();
        return;
    }

    if (url === "/student") {
        response.setHeader("Content-Type", "text/html");
        response.write(student.renderPage());
        response.end();
        return;
    }
}

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
