
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetTypesResponse
 *
 * @constructor
 */
GetTypesResponse = function (obj) {
    if(!obj) {
        this.types = null;     
    } else {
        this.types = obj.types;
    }
};

GetTypesResponse.prototype = new BaseModel();
GetTypesResponse.prototype.constructor = GetTypesResponse;

/**
 * The list of type names
 *
 * @return {array|null}
 */
GetTypesResponse.prototype.getTypes = function() {
    return this.types;
};

/**
 * Setter for Types
 * 
 * @param {array|null} value 
 */
GetTypesResponse.prototype.setTypes = function(value) {
    this.types = value;
};


module.exports = GetTypesResponse;