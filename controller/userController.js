var models =require("../models");
var bcrypt = require('bcryptjs');
var store = async function (req, res, next) {
    var result = {
        success: true,
        messages: [],
        data: {}
    }
    function cryptPassword(plainTextPassword) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(plainTextPassword, salt);
        return hash
    }
    var name = req.body.name.trim()
    var email = req.body.email.trim()
    var password = cryptPassword(req.body.password.trim())
    if (name.length < 3) {
        result.success = false
        result.messages.push('Please check your name')
    }
    if (email.length < 3) {
        result.success = false,
            result.messages.push('Please check your email')
    }
    if (password.length < 3) {
        result.success = false,
            result.messages.push('Please check your password')
    }
    if (!result.success) {
        res.send(result)
        return
    }
  
    var newLogin = await models.User.create({
        name: name,
        email: email,
        password: password,
    })
    result.data = newLogin
    result.messages.push("user has been created")
    res.send(result)
  }
  var show = async function (req, res, next) {
    var result = {
        success: true,
        data: {},
        messages: []
    }
    var id = req.params.id
    var user = await models.User.findByPk(id)
    if (user) {
        result.data = user
    } else {
        res.status(404)
        result.success = false
        result.messages.push("Please provide a valid ID")
    }
    res.send(result)
}
var destroy = async function (req, res, next) {
    var result = {
        success: true,
        data: {},
        messages: []
    }
    var id = req.params.id
    var deleted = await models.User.destroy({
        where: {
            id: id
        }
    });
    if (deleted) {

    } else {
        res.status(404)
        result.success = false
        result.messages.push("Please provid a valid ID")
    }
    res.send(result)
}
var index = async function (req, res, next) {
    var result = {
        success: true,
        data: {},
        messages: []
    }
    var User = await models.User.findAll()
    if (Array.isArray(User)) {
        result.data = User
    } else {
        res.status(404)
        res.success = false
        res.messages.push("Plase try again")
    }
    res.send(result)
}
var update = async function (req, res, next) {
    var result = {
        success: true,
        messages: [],
        data: {}
    }
    function cryptPassword(plainTextPassword) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(plainTextPassword, salt);
        return hash
    }
    var name = req.body.name.trim()
    var email = req.body.email.trim()
    var password = cryptPassword(req.body.password.trim())
    if (name.length < 3) {
        result.success = false
        result.messages.push('Please check your name')
    }
    if (email.length < 3) {
        result.success = false,
            result.messages.push('Please check your email')
    }
    if (password.length < 3) {
        result.success = false,
            result.messages.push('Please check your password')
    }
    if (!result.success) {
        res.send(result)
        return
    }
    var id = req.params.id
    var updatedMember = await models.User.update({
        name: name,
        email: email,
        password: password
    }, {
        where: {
            id
        }
    })
    result.data = updatedMember
    result.messages.push("user has been created")
    res.send(result)
}
  module.exports = {
    store,
    show,
    destroy,
    index,
    update
}