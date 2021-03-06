var signinHandler = require('./post/signin-handler');
var signupHandler = require('./post/signup-handler');
var saveHandler = require('./post/save-handler');

var signinProvider = require('./get/signin-provider');
var signupProvider = require('./get/signup-provider');
var downloadProvider = require('./get/download-provider');
var rootProvider = require('./get/root-provider');
var userProvider = require('./get/user-provider');
var fileProvider = require('./get/file-provider');

module.exports = {
    signinHandler,
    signupHandler,
    saveHandler,
    signinProvider, 
    signupProvider,
    downloadProvider,
    rootProvider,
    userProvider,
    fileProvider
};