const { DataTypes } = require('./../Database/dbConnection');
const sequelize = require('sequelize');
const validator = require('validator');

const User = sequelize.define("User", {
    Id: {
        type: new DataTypes.INTEGER,
        allowNulls: [false, 'ID is required!'],
        autoIncrement: true,
        notEmpty: [true, 'Please provide a ID!'],
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING(30),
        allowNulls: [false, 'Firstname is required!'],
        notEmpty: [true, 'Please provide a first Name!'],
    },
    lastName: {
        type: DataTypes.STRING(30),
        allowNulls: [false, 'Lastname is required!'],
        notEmpty: [true, 'Please provide a lastname!'],
    },
    username: {
        type: DataTypes.STRING(30),
        allowNulls: [false, 'Username is required!'],
        notEmpty: [true, 'Please provide a username!'],
        unique: true
    },
    role: {
        type: DataTypes.STRING(10),
        allowNulls: [false, 'User role is required!'],
        notEmpty: [true, 'Please provide a role of a user!'],
        enum: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
    },
    email: {
        type: DataTypes.STRING(30),
        allowNulls: [false, 'An email is required!'],
        notEmpty: [true, 'Please provide an email address!'],
        unique: true,
        lower: true,
        validate: [validator.isEmail, 'Please use valid email address!']
    },
    password: {
        type: DataTypes.STRING(30),
        allowNulls: [false, 'A password is required!'],
        notEmpty: [true, 'Please provide a password!'],
        min: {
            args: [8],
            msg: 'Minimum 8 characters required in password!'
        }
    },
    passwordConfirm: {
        type: DataTypes.STRING(30),
        allowNulls: [false, 'Password Confirm is required!'],
        notEmpty: [true, 'Please provide a Confirm Password!'],
        validate: {
            validator: function (el) {
                return el = this.password;
            },
            message: 'Password and Confirm Password must be same!'
        }
    }
});

module.exports = User;