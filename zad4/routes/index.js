const home = require("./views/home");
const student = require("./views/student");

function handleHome() {
    return home.renderPage();
}

function handleStudent() {
    return student.renderPage();
}

module.exports = {
    handleHome,
    handleStudent,
}
