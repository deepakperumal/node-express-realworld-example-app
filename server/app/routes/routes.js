module.exports = (app) => {
    const registration =  require('../controllers/registration.controller.js')
    const login =  require('../controllers/login.controller.js')
    const project = require('../controllers/project.controller.js')

    // Create a new Note

    app.post('/registration', registration.create)
    app.post('/login', login.find)
    app.post('/project', project.createProject)
    app.get('/project/:id', project.listProject)/* Test url http://localhost:8000/project/5ce192b2e713910f50264736 */

}