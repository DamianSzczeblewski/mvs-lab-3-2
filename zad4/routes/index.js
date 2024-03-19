function handleHome() {
    return views/home.renderPage();
}

function handleStudent() {
    return views/student.renderPage();
}

module.exports = {
    handleHome,
    handleStudent,
}