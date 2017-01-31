/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var SimilarityController = {

    /**
     * Get Similar Users
     * @param {GetSimilarUsersBody} query    Required parameter: The query for similar users.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UsersResponse}
     */
    getSimilarUsers: function (query, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/similar/users";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(query);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(query),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new UsersResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Request body is invalid.", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 422) {
                callback({errorMessage: "Required parameters are missing.", errorCode: 422, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get Similar Items
     * @param {GetSimilarItemsBody} query    Required parameter: The query for similar items.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ItemsResponse}
     */
    getSimilarItems: function (query, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/similar/items";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(query);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(query),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new ItemsResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Request body is invalid.", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 422) {
                callback({errorMessage: "Required parameters are missing.", errorCode: 422, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = SimilarityController;