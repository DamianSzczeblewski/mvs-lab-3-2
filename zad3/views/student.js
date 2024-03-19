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
        <div>student</div>
    </body>
    `);
    response.write("</html>");
    return response.end();
}

module.exports = {
    renderPage,
}