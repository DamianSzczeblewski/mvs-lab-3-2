const fs = require("fs");

function renderPage() {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write(`
    <head>
        <meta charset="UFT-8">
        <meta name="viewport" content="width, initial-scale=1.0">
        <title>student</title>
    </head>
    `);
    response.write(`
    <body>
        <h1>Student profile</h1>
        <p>Numer: ${code}</p>
        <p>Name: ${name}</p>
        <p>Last Name: ${lastname}</p>
        <p>Gender: ${gender}</p>
        <p>Age: ${age}</p>
        <p>Study Field: ${studyfiled}</p>
    </body>
    `);
    response.write("</html>");
    return response.end();
}

module.exports = {
    renderPage,
}