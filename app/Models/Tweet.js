'use strict'

const Model = use('Model')

class Tweet extends Model {

    user () {
        return this.belongsTo('App/Models/User')
    }

    // A tweet can have multiple replies
    replies () {
        return this.hasMany('App/Models/Reply')
    }

    // A tweet can have multiple favorites
    favorites () {
        return this.hasMany('App/Models/Favorite')
    }

}

module.exports = Tweet
