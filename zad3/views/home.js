const renderPage = () => {
  return `
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>HOME</title>
          </head>
          <body>
              <form action="/student" method="POST">
                  <div>
                      <label for="name">Name</label>
                      <input type="text" name="name" />
                  </div>
                  <div>
                      <label for="lastname">Lastname</label>
                      <input type="text" name="lastname" />
                  </div>
                  <div>
                      <label for="name">Age</label>
                      <input type="number" name="age" />
                  </div>
                  <div>
                      <label for="gender">Gender</label>
                      <select name="gender">
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="other">other</option>
                      </select>
                  </div>
                  <div>
                      <label for="name">Student code</label>
                      <input type="number" name="code" />
                  </div>
                  <div>
                      <label for="name">Study field</label>
                      <input type="text" name="studyField" />
                  </div>
                  <button>Send</button>
              </form>
          </body>
      </html>
      `;
};

module.exports = {
    renderPage,
}
