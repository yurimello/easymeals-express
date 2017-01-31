/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 12/16/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var TypeController = {

    /**
     * Get All Types
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetTypesResponse}
     */
    getAllTypes: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types";
        
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
                parsed = new GetTypesResponse(parsed);
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
     * Delete All Types
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllTypes: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types";
        
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
     * Get Properties of a Type
     * @param {string} type    Required parameter: The name of the type to get properties.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetTypeResponse}
     */
    getType: function (type, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types/{type}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "type": type
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
                parsed = new GetTypeResponse(parsed);
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
     * Create a New Type
     * @param {string} type    Required parameter: The name of the type to be created.
     * @param {TypeRequestBody|null} settings    Optional parameter: Optional settings for the rating parameter.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    createType: function (type, settings, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types/{type}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "type": type
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(settings);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(settings),
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
            } else if (_response.statusCode == 402) {
                callback({errorMessage: "Type limit reached.", errorCode: 402, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 409) {
                callback({errorMessage: "Type already exists.", errorCode: 409, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 422) {
                callback({errorMessage: "Rating type is not `implicit` or `explicit`.", errorCode: 422, errorResponse:_response.body}, null, _context);
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
     * Delete a Type
     * @param {string} type    Required parameter: The name of the type to be deleted.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteType: function (type, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types/{type}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "type": type
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
    }

};

module.exports = TypeController;