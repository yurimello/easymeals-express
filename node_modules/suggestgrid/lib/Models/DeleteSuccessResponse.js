
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of DeleteSuccessResponse
 *
 * @constructor
 */
DeleteSuccessResponse = function (obj) {
    if(!obj) {
        this.message = null;     
        this.found = null;     
        this.deleted = null;     
        this.failed = null;     
    } else {
        this.message = obj.message;
        this.found = obj.found;
        this.deleted = obj.deleted;
        this.failed = obj.failed;
    }
};

DeleteSuccessResponse.prototype = new BaseModel();
DeleteSuccessResponse.prototype.constructor = DeleteSuccessResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
DeleteSuccessResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
DeleteSuccessResponse.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * The number of records found for the delete query.
 *
 * @return {int|null}
 */
DeleteSuccessResponse.prototype.getFound = function() {
    return this.found;
};

/**
 * Setter for Found
 * 
 * @param {int|null} value 
 */
DeleteSuccessResponse.prototype.setFound = function(value) {
    this.found = value;
};

/**
 * The number of records deleted for the delete query.
 *
 * @return {int|null}
 */
DeleteSuccessResponse.prototype.getDeleted = function() {
    return this.deleted;
};

/**
 * Setter for Deleted
 * 
 * @param {int|null} value 
 */
DeleteSuccessResponse.prototype.setDeleted = function(value) {
    this.deleted = value;
};

/**
 * The number of records found but not deleted for the delete query.
 *
 * @return {int|null}
 */
DeleteSuccessResponse.prototype.getFailed = function() {
    return this.failed;
};

/**
 * Setter for Failed
 * 
 * @param {int|null} value 
 */
DeleteSuccessResponse.prototype.setFailed = function(value) {
    this.failed = value;
};


module.exports = DeleteSuccessResponse;