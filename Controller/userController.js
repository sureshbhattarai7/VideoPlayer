const User = require('./../Model/userModel');

exports.getUsers = async (req, res, next) => {
    const users = await User.findAll();
    try {
        res.status(200).json({
            status: 'success',
            totalUsers: users.length(),
            data: {
                users
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    };
};