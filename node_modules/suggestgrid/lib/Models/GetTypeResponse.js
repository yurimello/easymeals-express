
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetTypeResponse
 *
 * @constructor
 */
GetTypeResponse = function (obj) {
    if(!obj) {
        this.rating = null;     
    } else {
        this.rating = obj.rating;
    }
};

GetTypeResponse.prototype = new BaseModel();
GetTypeResponse.prototype.constructor = GetTypeResponse;

/**
 * Rating type of the type that is either implicit or explicit.
 *
 * @return {string|null}
 */
GetTypeResponse.prototype.getRating = function() {
    return this.rating;
};

/**
 * Setter for Rating
 * 
 * @param {string|null} value 
 */
GetTypeResponse.prototype.setRating = function(value) {
    this.rating = value;
};


module.exports = GetTypeResponse;