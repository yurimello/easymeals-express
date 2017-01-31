
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of TypeRequestBody
 *
 * @constructor
 */
TypeRequestBody = function (obj) {
    if(!obj) {
        this.rating = null;     
    } else {
        this.rating = obj.rating;
    }
};

TypeRequestBody.prototype = new BaseModel();
TypeRequestBody.prototype.constructor = TypeRequestBody;

/**
 * The rating type of the type to be created.
 * Could be "explicit" or "implicit"
 * The default is "implicit".
 *
 * @return {string|null}
 */
TypeRequestBody.prototype.getRating = function() {
    return this.rating;
};

/**
 * Setter for Rating
 * 
 * @param {string|null} value 
 */
TypeRequestBody.prototype.setRating = function(value) {
    this.rating = value;
};


module.exports = TypeRequestBody;