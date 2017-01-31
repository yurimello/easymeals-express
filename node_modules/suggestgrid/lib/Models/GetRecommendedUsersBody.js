
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetRecommendedUsersBody
 *
 * @constructor
 */
GetRecommendedUsersBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.types = null;     
        this.itemId = null;     
        this.itemIds = null;     
        this.from = null;     
        this.size = null;     
        this.similarUserId = null;     
        this.similarUserIds = null;     
        this.fields = null;     
        this.filter = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
        this._variableDict['itemIds'] = 'item_ids';
        this._variableDict['similarUserId'] = 'similar_user_id';
        this._variableDict['similarUserIds'] = 'similar_user_ids';
    } else {
        this.type = obj.type;
        this.types = obj.types;
        this.itemId = obj.item_id;
        this.itemIds = obj.item_ids;
        this.from = obj.from;
        this.size = obj.size;
        this.similarUserId = obj.similar_user_id;
        this.similarUserIds = obj.similar_user_ids;
        this.fields = obj.fields;
        this.filter = obj.filter;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
        this._variableDict['itemIds'] = 'item_ids';
        this._variableDict['similarUserId'] = 'similar_user_id';
        this._variableDict['similarUserIds'] = 'similar_user_ids';
    }
};

GetRecommendedUsersBody.prototype = new BaseModel();
GetRecommendedUsersBody.prototype.constructor = GetRecommendedUsersBody;

/**
 * The type of the query.
 *
 * @return {string|null}
 */
GetRecommendedUsersBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string|null} value 
 */
GetRecommendedUsersBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * The types of the query. Exactly one of type or types parameters must be provided.
 *
 * @return {string|null}
 */
GetRecommendedUsersBody.prototype.getTypes = function() {
    return this.types;
};

/**
 * Setter for Types
 * 
 * @param {string|null} value 
 */
GetRecommendedUsersBody.prototype.setTypes = function(value) {
    this.types = value;
};

/**
 * The item id of the query.
 *
 * @return {string|null}
 */
GetRecommendedUsersBody.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string|null} value 
 */
GetRecommendedUsersBody.prototype.setItemId = function(value) {
    this.itemId = value;
};

/**
 * The item ids of the query. Exactly one of item id or item ids parameters must be provided.
 *
 * @return {array|null}
 */
GetRecommendedUsersBody.prototype.getItemIds = function() {
    return this.itemIds;
};

/**
 * Setter for ItemIds
 * 
 * @param {array|null} value 
 */
GetRecommendedUsersBody.prototype.setItemIds = function(value) {
    this.itemIds = value;
};

/**
 * The number of most recommended items to be skipped.
 *
 * @return {int|null}
 */
GetRecommendedUsersBody.prototype.getFrom = function() {
    return this.from;
};

/**
 * Setter for From
 * 
 * @param {int|null} value 
 */
GetRecommendedUsersBody.prototype.setFrom = function(value) {
    this.from = value;
};

/**
 * The number of users asked to return in the response.
 *
 * @return {int|null}
 */
GetRecommendedUsersBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
GetRecommendedUsersBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * Similar user that the response should be similar to.
 *
 * @return {string|null}
 */
GetRecommendedUsersBody.prototype.getSimilarUserId = function() {
    return this.similarUserId;
};

/**
 * Setter for SimilarUserId
 * 
 * @param {string|null} value 
 */
GetRecommendedUsersBody.prototype.setSimilarUserId = function(value) {
    this.similarUserId = value;
};

/**
 * Similar users that the response should be similar to.
 * At most one of similar user and similar users parameters can be provided.
 *
 * @return {string|null}
 */
GetRecommendedUsersBody.prototype.getSimilarUserIds = function() {
    return this.similarUserIds;
};

/**
 * Setter for SimilarUserIds
 * 
 * @param {string|null} value 
 */
GetRecommendedUsersBody.prototype.setSimilarUserIds = function(value) {
    this.similarUserIds = value;
};

/**
 * The metadata fields that are to be included in returned users.
 *
 * @return {array|null}
 */
GetRecommendedUsersBody.prototype.getFields = function() {
    return this.fields;
};

/**
 * Setter for Fields
 * 
 * @param {array|null} value 
 */
GetRecommendedUsersBody.prototype.setFields = function(value) {
    this.fields = value;
};

/**
 * Contraints on the returned users or items.
 * Filter structure is defined in [the filter parameter documentation](http://www.suggestgrid.com/docs/advanced-features#filters-parameter).
 *
 * @return {object|null}
 */
GetRecommendedUsersBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {object|null} value 
 */
GetRecommendedUsersBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * These user ids that will not be included in the response.
 *
 * @return {array|null}
 */
GetRecommendedUsersBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
GetRecommendedUsersBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = GetRecommendedUsersBody;