const http = require("http");
const fs = require("fs");

const routes = require("./routes/index");

let data = {
  code: "",
  name: "",
  lastname: "",
  gender: "",
  age: "",
  studyField: "",
};

const PORT = 3000;

const server = http.createServer(requestListener);

function requestListener(request, response) {
    const { url } = request;

    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write(routes.handleHome());
        response.end();
        return;
    }

    if (url === "/student" && method === "POST") {
        const body = [];
        
        request.on("data", (chunk) => {
            body.push(chunk);
        });
        return request.on("end", () => {
            const parsedBody = Buffer.concat(body).toString().replaceAll("=", ":");
            parsedBody.split("&").forEach((element) => {
                const splittedElement = element.split(":");
                const key = splittedElement[0];
                const value = splittedElement[1];
                data[key] = value;
            });
            fs.writeFileSync(`${data.code}.txt`, parsedBody.replaceAll("&", "\n"));
            response.statusCode = 302;
            response.setHeader("Location", "/student");
            response.end();
        });
    }

    if (url === "/student") {
        response.setHeader("Content-Type", "text/html");
        response.write(routes.handleStudent(data));
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
