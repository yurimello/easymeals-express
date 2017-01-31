
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Metadata
 *
 * @constructor
 */
Metadata = function (obj) {
    if(!obj) {
        this.id = null;
    } else {
        for(var key in obj){
            this[key] = obj[key];
        }
    }
};

Metadata.prototype = new BaseModel();
Metadata.prototype.constructor = Metadata;

/**
 * The id of the user or the item that the metadata is associated with.
 * Id parameter is necessary for all metadata.
 *
 * @return {string}
 */
Metadata.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 *
 * @param {string} value
 */
Metadata.prototype.setId = function(value) {
    this.id = value;
};


module.exports = Metadata;
