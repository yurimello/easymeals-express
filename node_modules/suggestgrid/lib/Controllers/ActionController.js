/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var ActionController = {

    /**
     * Get Actions
     * @param {string|null} type    Optional parameter: The type of the actions.
     * @param {string|null} userId    Optional parameter: The user id of the actions.
     * @param {string|null} itemId    Optional parameter: The item id of the actions.
     * @param {string|null} olderThan    Optional parameter: Maxium timestamp of the actions. Valid times are 1s, 1m, 1h, 1d, 1M, 1y, or unix timestamp (like 1443798195).
     * @param {int|null} size    Optional parameter: The number of the users response. Defaults to 10. Must be between 1 and 10.000 inclusive. This parameter must be string represetation of an integer like "1".
     * @param {int|null} from    Optional parameter: The number of users to be skipped for response. Defaults to 0. Must be bigger than or equal to 0. This parameter must be string represetation of an integer like "1".
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ActionsResponse}
     */
    getActions: function (type, userId, itemId, olderThan, size, from, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/actions";

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "type": type,
            "user_id": userId,
            "item_id": itemId,
            "older_than": olderThan,
            "size": size,
            "from": from
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new ActionsResponse(parsed);
                callback(null,parsed,_context);
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
     * Post an Action
     * @param {Action} action    Required parameter: The action to be posted.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postAction: function (action, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/actions";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(action);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(action),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Required `user_id` or `item_id` parameters are missing from the request body.", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 402) {
                callback({errorMessage: "Action limit exceeded.", errorCode: 402, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Type does not exists.", errorCode: 404, errorResponse:_response.body}, null, _context);
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
     * Delete Actions
     * @param {string|null} type    Optional parameter: The type of the actions.
     * @param {string|null} userId    Optional parameter: The user id of the actions.
     * @param {string|null} itemId    Optional parameter: The item id of the actions.
     * @param {string|null} olderThan    Optional parameter: Delete all actions of a type older than the given timestamp or time. Valid times are 1s, 1m, 1h, 1d, 1M, 1y, or unix timestamp (like 1443798195).
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {DeleteSuccessResponse}
     */
    deleteActions: function (type, userId, itemId, olderThan, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/actions";

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "type": type,
            "user_id": userId,
            "item_id": itemId,
            "older_than": olderThan
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "DELETE",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new DeleteSuccessResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Required `user_id` or `item_id` parameters are missing from the request body.", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Delete actions not found.", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 422) {
                callback({errorMessage: "No query parameter (`user_id`, `item_id`, or `older_than`) is given.  In order to delete all actionsdelete the type.", errorCode: 422, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 505) {
                callback({errorMessage: "Request timed out.", errorCode: 505, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Post Bulk Actions
    * @param {Array} actions    Required parameter: Example: [Action, Action, ...]
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {BulkPostResponse}
     */
    postBulkActions: function (actions, callback) {

        var body = "";

        actions.forEach(function(action){
           body += JSON.stringify(action) + "\n";
        });

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/actions/_bulk";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "text/plain; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body: body,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new BulkPostResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Body is missing.", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 402) {
                callback({errorMessage: "Action limit exceeded.", errorCode: 402, errorResponse:_response.body}, null, _context);
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

module.exports = ActionController;
