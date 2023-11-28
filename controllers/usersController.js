// controllers/usersController.js
import User from '../models/User.js';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

class UserController {
    async getAllUsers(req, res) {
        try {

            const users = await User.find({}, '-password');
            console.log(users);
            res.status(200).json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async registerUser(req, res) {
        // ... (rest of your code for registerUser)
    }

    async loginUser(req, res) {
        // ... (rest of your code for loginUser)
    }
}

export default new UserController();
