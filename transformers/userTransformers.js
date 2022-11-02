var userTransformer = function(user) {
    if (user?.dataValues?.password) {
        delete user?.dataValues?.password
    }
    if (user?.Photos) {
        user.Photos = photosTransformer(user.Photos)
    }
    return user
}
var usersTransformer = function(members) {
    return members.map(user => userTransformer(user))
}

module.exports = {
    usersTransformer,
    userTransformer
}