const renderPage = ({ name, lastname, age, gender, code, studyField }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>STUDENT</title>
        </head>
        <body>
            <h1>Student profile</h1>
            <p>Student code: ${code ?? ""}</p>
            <p>Name: ${name ?? ""}</p>
            <p>Lastname: ${lastname ?? ""}</p>
            <p>Gender: ${gender ?? ""}</p>
            <p>Age: ${age ?? ""}</p>
            <p>Study field: ${studyField ?? ""}</p>
        </body>
    </html>
    `;
};

module.exports = {
    renderPage,
}
