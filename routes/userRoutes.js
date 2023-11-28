// userRoutes.js
import usersController from "../controllers/usersController.js";

function UserRoutes(app) {
    // app.post('/register', usersController.registerUser);
    // app.post('/login', usersController.loginUser);
    app.get('/users', usersController.getAllUsers);
}

export default UserRoutes;
