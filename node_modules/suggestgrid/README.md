# [ SuggestGrid Node.js Client ]( http://www.github.com/suggestgrid/suggestgrid-node )

We will walk through how to get started with SuggestGrid Node.js Client in three steps:
    
1. [Configuration](#1-configuration)
    
2. [Post actions](#2-post-actions)
    
3. [Get recommendations](#3-get-recommendations)

If you did not [sign up for SuggestGrid](https://dashboard.suggestgrid.com/users/sign_up), this is the right time.

## Getting Started

In this guide we will demonstrate how to display personalized recommendations on an existing Node.js project.

We have a movie catalog Node.js application, SuggestGridMovies, similar to IMDb.
For logged in users we want to display movies that *similar people viewed* on movie pages.
Let's implement this feature in five minutes with SuggestGrid!

### 1. Configuration

We are beginning the development by adding the client as a dependency.

```
"suggestgrid" : "https://github.com/suggestgrid/suggestgrid-node.git"
```



Applications make their API requests to their dedicated sub-domain of `suggestgrid.space`.

Most endpoints require a username and password for authentication.

An initial user name and password is given on sign up.

It is very convenient to configure SuggestGrid by setting an authenticated `SUGGESTGRID_URL` environment variable in the format below:

`http://{user}:{pass}@{region}.suggestgrid.space/{app-uuid}`

You can authenticate your application using `SUGGESTGRID_URL` environment variable like the example below:

```js
var suggestgrid = require('suggestgrid')
var url = require('url')

var sgUrlString = process.env.SUGGESTGRID_URL
var sgUrl = url.parse(sgUrlString)

var auth = sgUrl.auth.split(':')
var user = auth[0]
var pass = auth[1]

// Configure the SuggestGrid client.
var config = suggestgrid.configuration
config.basicAuthUserName = user
config.basicAuthPassword = pass
config.BASEURI = sgUrlString
```


Every recommendation logic needs to belong to a *type*.
For this demonstration we can create an implicit type named as `views`.
This could be done either from the dashboard or with a snippet like this:

```js
var suggestgrid = require('suggestgrid')

 var typeController = suggestgrid.TypeController;
 typeController.getType('views', function (error, response) {
    if (error) {
        typeController.createType('views', {}, function (error, response) {
            console.info("Views type is created")
        })
    }
})
```



### 2. Post actions

Once the type exists, let's start posting actions.
We should invoke SuggestGrid client's ActionController.postAction when an user views an item in our application.

We can do this by putting the snippet below on the relevant point:

```js
var suggestgrid = require('suggestgrid');

app.get('/movie/:id', function (req, res) {

    // create an action when user views a
    var action = new suggestgrid.Action({type: "views", user_id: user.id, item_id:req.params.id});
    suggestgrid.ActionController.postAction(action, function (error, response) {
      if (error) {
        console.error(error);
      }
    });
});
```


The more actions SuggestGrid gets, more relevant and diverse its responses are.


### 3. Get recommendations

Finally, let's show "movies similar users viewed" on movie pages.

SuggestGrid needs *recommendation models* for returning recommendations.
Model generation is scheduled in every 24 hours.
In addition, instant model generations can be triggered on the dashboard.

Once the first model generated for 'views' type, recommendations could be get using a snippet like the following:

```js
var suggestgrid = require('suggestgrid')

function recommendItems(userId, callback) {
  var recommendationController = suggestgrid.RecommendationController;
  recommendationController.recommendItems({type: 'views', user_id: userId, size: 10}, callback);
}
```
