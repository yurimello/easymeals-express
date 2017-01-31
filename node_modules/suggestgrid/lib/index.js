/**
  * @module suggestgrid
  *  
  * SuggestGrid is a recommendation and personalization service.
  */

var configuration = require('./configuration'),
    TypeController = require('./Controllers/TypeController'),
    ActionController = require('./Controllers/ActionController'),
    MetadataController = require('./Controllers/MetadataController'),
    RecommendationController = require('./Controllers/RecommendationController'),
    SimilarityController = require('./Controllers/SimilarityController'),
    Action = require('./Models/Action'),
    Metadata = require('./Models/Metadata'),
    TypeRequestBody = require('./Models/TypeRequestBody'),
    GetRecommendedUsersBody = require('./Models/GetRecommendedUsersBody'),
    GetRecommendedItemsBody = require('./Models/GetRecommendedItemsBody'),
    GetSimilarUsersBody = require('./Models/GetSimilarUsersBody'),
    GetSimilarItemsBody = require('./Models/GetSimilarItemsBody'),
    MessageResponse = require('./Models/MessageResponse'),
    ActionsResponse = require('./Models/ActionsResponse'),
    ErrorResponse = require('./Models/ErrorResponse'),
    DetailedErrorResponse = require('./Models/DetailedErrorResponse'),
    LimitExceededErrorResponse = require('./Models/LimitExceededErrorResponse'),
    DeleteErrorResponse = require('./Models/DeleteErrorResponse'),
    DeleteSuccessResponse = require('./Models/DeleteSuccessResponse'),
    GetTypesResponse = require('./Models/GetTypesResponse'),
    GetTypeResponse = require('./Models/GetTypeResponse'),
    BulkPostResponse = require('./Models/BulkPostResponse'),
    BulkPostError = require('./Models/BulkPostError'),
    UsersResponse = require('./Models/UsersResponse'),
    ItemsResponse = require('./Models/ItemsResponse');


function initializer () { }

//Main functional components of suggestgrid
initializer.configuration = configuration;
initializer.TypeController = TypeController;
initializer.ActionController = ActionController;
initializer.MetadataController = MetadataController;
initializer.RecommendationController = RecommendationController;
initializer.SimilarityController = SimilarityController;

//Main Models of suggestgrid
initializer.Action = Action;
initializer.Metadata = Metadata;
initializer.TypeRequestBody = TypeRequestBody;
initializer.GetRecommendedUsersBody = GetRecommendedUsersBody;
initializer.GetRecommendedItemsBody = GetRecommendedItemsBody;
initializer.GetSimilarUsersBody = GetSimilarUsersBody;
initializer.GetSimilarItemsBody = GetSimilarItemsBody;
initializer.MessageResponse = MessageResponse;
initializer.ActionsResponse = ActionsResponse;
initializer.ErrorResponse = ErrorResponse;
initializer.DetailedErrorResponse = DetailedErrorResponse;
initializer.LimitExceededErrorResponse = LimitExceededErrorResponse;
initializer.DeleteErrorResponse = DeleteErrorResponse;
initializer.DeleteSuccessResponse = DeleteSuccessResponse;
initializer.GetTypesResponse = GetTypesResponse;
initializer.GetTypeResponse = GetTypeResponse;
initializer.BulkPostResponse = BulkPostResponse;
initializer.BulkPostError = BulkPostError;
initializer.UsersResponse = UsersResponse;
initializer.ItemsResponse = ItemsResponse;

module.exports = initializer;