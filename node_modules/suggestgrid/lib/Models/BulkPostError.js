
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of BulkPostError
 *
 * @constructor
 */
BulkPostError = function (obj) {
    if(!obj) {
        this.message = null;     
        this.value = null;     
        this.error = null;     
    } else {
        this.message = obj.message;
        this.value = obj.value;
        this.error = obj.error;
    }
};

BulkPostError.prototype = new BaseModel();
BulkPostError.prototype.constructor = BulkPostError;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
BulkPostError.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
BulkPostError.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * The cause of the error.
 *
 * @return {object|null}
 */
BulkPostError.prototype.getValue = function() {
    return this.value;
};

/**
 * Setter for Value
 * 
 * @param {object|null} value 
 */
BulkPostError.prototype.setValue = function(value) {
    this.value = value;
};

/**
 * Programatic description of the error.
 *
 * @return {object|null}
 */
BulkPostError.prototype.getError = function() {
    return this.error;
};

/**
 * Setter for Error
 * 
 * @param {object|null} value 
 */
BulkPostError.prototype.setError = function(value) {
    this.error = value;
};


module.exports = BulkPostError;