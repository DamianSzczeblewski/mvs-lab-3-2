function renderPage(response) {
    response.setHeader("Content-Type", "text/html");
    response.write(`<html lang="pl">`);
    response.write(`
    <head>
        <meta charset="UFT-8">
        <meta name="viewport" content="width, initial-scale=1.0">
        <title>home</title>
    </head>
    `);
    response.write(`
    <body>
        <div>home</div>
    </body>
    `);
    response.write("</html>");
    return response.end();
}

module.exports = {
    renderPage,
}
