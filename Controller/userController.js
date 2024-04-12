const User = require('./../Model/userModel');

exports.getUsers = async (req, res, next) => {
    const users = await User.findAll();
    try {
        res.status(200).json({
            status: 'success',
            totalUsers: users.length,
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

exports.getUser = async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    try {
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.signup = async (req, res, next) => {
    const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });

    try {
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    };
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    //Check if email and password exists
    if (!email || !password) {
        res.status(400).json({
            status: 'fail',
            message: `Wrong Credentials! Please enter valid email and password!`
        })
    }

    //Check if email exists and password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        res.status(400).json({
            status: 'fail',
            message: 'Incorrect email or password!'
        })
    };
};

