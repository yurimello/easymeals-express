
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetRecommendedItemsBody
 *
 * @constructor
 */
GetRecommendedItemsBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.types = null;     
        this.userId = null;     
        this.userIds = null;     
        this.from = null;     
        this.size = null;     
        this.similarItemId = null;     
        this.similarItemIds = null;     
        this.fields = null;     
        this.filter = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
        this._variableDict['similarItemId'] = 'similar_item_id';
        this._variableDict['similarItemIds'] = 'similar_item_ids';
    } else {
        this.type = obj.type;
        this.types = obj.types;
        this.userId = obj.user_id;
        this.userIds = obj.user_ids;
        this.from = obj.from;
        this.size = obj.size;
        this.similarItemId = obj.similar_item_id;
        this.similarItemIds = obj.similar_item_ids;
        this.fields = obj.fields;
        this.filter = obj.filter;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
        this._variableDict['similarItemId'] = 'similar_item_id';
        this._variableDict['similarItemIds'] = 'similar_item_ids';
    }
};

GetRecommendedItemsBody.prototype = new BaseModel();
GetRecommendedItemsBody.prototype.constructor = GetRecommendedItemsBody;

/**
 * The type of the query.
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * The types of the query. Exactly one of type or types parameters must be provided.
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getTypes = function() {
    return this.types;
};

/**
 * Setter for Types
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setTypes = function(value) {
    this.types = value;
};

/**
 * The user id of the query.
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * The user ids of the query. Exactly one of user id or user ids parameters must be provided.
 *
 * @return {array|null}
 */
GetRecommendedItemsBody.prototype.getUserIds = function() {
    return this.userIds;
};

/**
 * Setter for UserIds
 * 
 * @param {array|null} value 
 */
GetRecommendedItemsBody.prototype.setUserIds = function(value) {
    this.userIds = value;
};

/**
 * The number of most recommended items to be skipped.
 *
 * @return {int|null}
 */
GetRecommendedItemsBody.prototype.getFrom = function() {
    return this.from;
};

/**
 * Setter for From
 * 
 * @param {int|null} value 
 */
GetRecommendedItemsBody.prototype.setFrom = function(value) {
    this.from = value;
};

/**
 * The number of items asked to return in the response.
 *
 * @return {int|null}
 */
GetRecommendedItemsBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
GetRecommendedItemsBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * Similar item that the response should be similar to.
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getSimilarItemId = function() {
    return this.similarItemId;
};

/**
 * Setter for SimilarItemId
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setSimilarItemId = function(value) {
    this.similarItemId = value;
};

/**
 * Similar items that the response should be similar to.
 * At most one of similar item and similar items parameters can be provided.
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getSimilarItemIds = function() {
    return this.similarItemIds;
};

/**
 * Setter for SimilarItemIds
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setSimilarItemIds = function(value) {
    this.similarItemIds = value;
};

/**
 * The metadata fields that are to be included in returned items.
 *
 * @return {array|null}
 */
GetRecommendedItemsBody.prototype.getFields = function() {
    return this.fields;
};

/**
 * Setter for Fields
 * 
 * @param {array|null} value 
 */
GetRecommendedItemsBody.prototype.setFields = function(value) {
    this.fields = value;
};

/**
 * Contraints on the returned users or items.
 * Filter structure is defined in [the filter parameter documentation](http://www.suggestgrid.com/docs/advanced-features#filters-parameter).
 *
 * @return {object|null}
 */
GetRecommendedItemsBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {object|null} value 
 */
GetRecommendedItemsBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * These item ids that will not be included in the response.
 *
 * @return {array|null}
 */
GetRecommendedItemsBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
GetRecommendedItemsBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = GetRecommendedItemsBody;