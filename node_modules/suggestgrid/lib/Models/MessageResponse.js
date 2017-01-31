
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of MessageResponse
 *
 * @constructor
 */
MessageResponse = function (obj) {
    if(!obj) {
        this.message = null;     
    } else {
        this.message = obj.message;
    }
};

MessageResponse.prototype = new BaseModel();
MessageResponse.prototype.constructor = MessageResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
MessageResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
MessageResponse.prototype.setMessage = function(value) {
    this.message = value;
};


module.exports = MessageResponse;