/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var MetadataController = {

    /**
     * Get A User
     * @param {string} userId    Required parameter: The user id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {Metadata}
     */
    getUser: function (userId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users/{user_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "user_id": userId
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
                parsed = new Metadata(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "User not found.", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Delete a User
     * @param {string} userId    Required parameter: The user id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteUser: function (userId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users/{user_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "user_id": userId
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
                parsed = new MessageResponse(parsed);
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
     * Get Users
     * @param {int|null} size    Optional parameter: The number of the users response. Defaults to 10. Must be between 1 and 10.000 inclusive. This parameter must be string represetation of an integer like "1".
     * @param {int|null} from    Optional parameter: The number of users to be skipped for response. Defaults to 0. Must be bigger than or equal to 0. This parameter must be string represetation of an integer like "1".
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UsersResponse}
     */
    getUsers: function (size, from, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users";

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
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
                parsed = new UsersResponse(parsed);
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
     * Post a User
     * @param {Metadata} user    Required parameter: The metadata to be saved. Metadata format has its restrictions.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postUser: function (user, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(user);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(user),
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
                callback({errorMessage: "Metadata is invalid.", errorCode: 400, errorResponse:_response.body}, null, _context);
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
     * Delete All Users
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllUsers: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users";

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
                parsed = new MessageResponse(parsed);
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
     * Get An Item
     * @param {string} itemId    Required parameter: The item id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {Metadata}
     */
    getItem: function (itemId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items/{item_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "item_id": itemId
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
                parsed = new Metadata(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Item not found.", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Delete An Item
     * @param {string} itemId    Required parameter: The item id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteItem: function (itemId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items/{item_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "item_id": itemId
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
                parsed = new MessageResponse(parsed);
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
     * Get Items
     * @param {int|null} size    Optional parameter: The number of the users response. Defaults to 10. Must be between 1 and 10.000 inclusive. This parameter must be string represetation of an integer like "1".
     * @param {int|null} from    Optional parameter: The number of users to be skipped for response. Defaults to 0. Must be bigger than or equal to 0. This parameter must be string represetation of an integer like "1".
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ItemsResponse}
     */
    getItems: function (size, from, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items";

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
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
                parsed = new ItemsResponse(parsed);
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
     * Post an Item
     * @param {Metadata} item    Required parameter: The metadata to be saved. Metadata format has its restrictions.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postItem: function (item, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(item);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(item),
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
                callback({errorMessage: "Metadata is invalid.", errorCode: 400, errorResponse:_response.body}, null, _context);
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
     * Delete All Items
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllItems: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items";

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
                parsed = new MessageResponse(parsed);
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
     * Post Bulk Users
     * @param {Array} users Required parameter. Limited to 10 thousand users. Example: [Metadata, Metadata, ...]
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {BulkPostResponse}
     */
    postBulkUsers: function (users, callback) {

        var body = "";

        users.forEach(function(meta){
           body += JSON.stringify(meta) + "\n";
        });

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users/_bulk";

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
     * Post Bulk Items
     * @param {Array} items Required parameter. Limited to 10 thousand items. Example: [Metadata, Metadata, ...]
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {BulkPostResponse}
     */
    postBulkItems: function (items, callback) {

        var body = "";

        items.forEach(function(meta){
           body += JSON.stringify(meta) + "\n";
        });

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items/_bulk";

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

module.exports = MetadataController;
