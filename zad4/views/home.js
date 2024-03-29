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
        <form action="/student" method="POST">
        <input type="text" name="name"/>
        <input type="text" name="lastname"/>
        <input type="number" name="age"/>
        <select name="gender">
            <option>male</option>
            <option>female</option>
            <option>other</option>
        </select>
        <input type="number" name="code"/>
        <input type="text" name="studyField"/>
        <button>Send</button>
        </form>
    </body>
    `);
    response.write("</html>");
    return response.end();
}

module.exports = {
    renderPage,
}
