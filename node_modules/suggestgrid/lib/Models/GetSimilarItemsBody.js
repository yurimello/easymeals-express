
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetSimilarItemsBody
 *
 * @constructor
 */
GetSimilarItemsBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.types = null;     
        this.itemId = null;     
        this.itemIds = null;     
        this.from = null;     
        this.size = null;     
        this.fields = null;     
        this.filter = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
        this._variableDict['itemIds'] = 'item_ids';
    } else {
        this.type = obj.type;
        this.types = obj.types;
        this.itemId = obj.item_id;
        this.itemIds = obj.item_ids;
        this.from = obj.from;
        this.size = obj.size;
        this.fields = obj.fields;
        this.filter = obj.filter;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
        this._variableDict['itemIds'] = 'item_ids';
    }
};

GetSimilarItemsBody.prototype = new BaseModel();
GetSimilarItemsBody.prototype.constructor = GetSimilarItemsBody;

/**
 * The type of the query.
 *
 * @return {string|null}
 */
GetSimilarItemsBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string|null} value 
 */
GetSimilarItemsBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * The types of the query. Exactly one of type or types parameters must be provided.
 *
 * @return {string|null}
 */
GetSimilarItemsBody.prototype.getTypes = function() {
    return this.types;
};

/**
 * Setter for Types
 * 
 * @param {string|null} value 
 */
GetSimilarItemsBody.prototype.setTypes = function(value) {
    this.types = value;
};

/**
 * The item id of the query. Get similar items to given item id. Either item id or item ids must be provided.
 *
 * @return {string|null}
 */
GetSimilarItemsBody.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string|null} value 
 */
GetSimilarItemsBody.prototype.setItemId = function(value) {
    this.itemId = value;
};

/**
 * The item ids of the query. Exactly one of item id or item ids parameters must be provided. Get similar items to given item ids. Either item id or item ids must be provided.
 *
 * @return {array|null}
 */
GetSimilarItemsBody.prototype.getItemIds = function() {
    return this.itemIds;
};

/**
 * Setter for ItemIds
 * 
 * @param {array|null} value 
 */
GetSimilarItemsBody.prototype.setItemIds = function(value) {
    this.itemIds = value;
};

/**
 * The number of most similar items to be skipped.
 *
 * @return {int|null}
 */
GetSimilarItemsBody.prototype.getFrom = function() {
    return this.from;
};

/**
 * Setter for From
 * 
 * @param {int|null} value 
 */
GetSimilarItemsBody.prototype.setFrom = function(value) {
    this.from = value;
};

/**
 * The number of items asked to return in the response.
 *
 * @return {int|null}
 */
GetSimilarItemsBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
GetSimilarItemsBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * The metadata fields that are to be included in returned items.
 *
 * @return {array|null}
 */
GetSimilarItemsBody.prototype.getFields = function() {
    return this.fields;
};

/**
 * Setter for Fields
 * 
 * @param {array|null} value 
 */
GetSimilarItemsBody.prototype.setFields = function(value) {
    this.fields = value;
};

/**
 * Contraints on the returned users or items.
 * Filter structure is defined in [the filter parameter documentation](http://www.suggestgrid.com/docs/advanced-features#filters-parameter).
 *
 * @return {object|null}
 */
GetSimilarItemsBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {object|null} value 
 */
GetSimilarItemsBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * These item ids that will not be included in the response.
 *
 * @return {array|null}
 */
GetSimilarItemsBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
GetSimilarItemsBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = GetSimilarItemsBody;