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
    if (avatar.length < 3) {
        result.success = false,
            result.messages.push('Please check your avatar')
    }
    if (password.length < 3) {
        result.success = false,
            result.messages.push('Please check your password')
    }
    if (!result.success) {
        res.send(result)
        return
    }
  
    var newMember = await models.Member.create({
        name: name,
        email: email,
        password: password,
    })
    result.data = newMember
    result.messages.push("user has been created")
    res.send(result)
  }
  module.exports = {
    store,
  
}