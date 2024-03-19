function renderPage(response) {
    response.setHeader("Content-Type", "text/html");
    response.write(`<html lang="pl">`);
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
        <p>Code: </p>
        <p>Name: </p>
        <p>Last name: </p>
        <p>Gender: </p>
        <p>Age: </p>
        <p>Study field: </p>
    </body>
    `);
    response.write("</html>");
    return response.end();
}

module.exports = {
    renderPage,
}
