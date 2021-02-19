var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  RawData = require('./api/models/testModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// if remote setup with env vars setup (e.g. in heroku)
if (process.env.MONGO_CONN_STRING) {
  mongoose.connect(process.env.MONGO_CONN_STRING);
} else {
  // local installation
  const PropertiesReader = require('properties-reader'),
    prop = PropertiesReader('./project.properties');
  mongoose.connect(prop.get("main.MONGO_CONN_STRING"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: '*/*' }));

var routes = require('./api/routes/testRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log(`Raw Data Ingestor RESTful API server started on: ${port}`);