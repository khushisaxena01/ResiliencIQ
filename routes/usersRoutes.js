const express = require('express');
const { body, validationResult } = require('express-validator');
const { authenticateToken } = require('../middlewares/auth');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// Get all users (protected)
router.get('/', authenticateToken, getAllUsers);

// Get user by ID (protected)
router.get('/:id', authenticateToken, getUserById);

// Update user (protected, user can update own profile)
router.put(
  '/:id',
  authenticateToken,
  [
    body('username').optional().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    body('email').optional().isEmail().withMessage('Please provide a valid email'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  updateUser
);

// Delete user (protected, user can delete own account)
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;
