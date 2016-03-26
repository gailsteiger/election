/**
 * User.js
 *
 * @description :: TODO:
 * @docs        :: http://sailsjs.org?#!documentation/models
 */

module.exports = {
    attributes: {
        email: {
            type: 'string',
            unique: true,
            lowercase: true
        },
        displayName: 'string',
        twitch: 'string'
    }
};