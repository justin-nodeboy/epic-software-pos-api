/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
//Requires
require('dotenv').config();
const express = require("express");
const fs = require("fs");
const app = module.exports = express();
const https = require('https');
const http = require('http');
const httpPort = 5000;
const httpsPort = 3443;

//Redirect to HTTPS if on Heroku
const forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

//Check which environment you are working on, and redirect traffic accordingly
if (process.env.NODE_ENV === "development"){
    app.all('*', function(req, res, next) {
        if (req.secure) {
            return next();
        } else {
            res.redirect('https://'+req.hostname+":"+app.get('port_https')+req.url);
        }
    });
} else {
    app.use(forceSsl);
}

const PrimaryRouter = require("./routes/PrimaryRouter");
//Server Middleware
app.use(PrimaryRouter);

//Start Server
if (process.env.NODE_ENV === "development"){
    const options = {
        key: fs.readFileSync('./certs/85046192-localhost_3443.key'),
        cert: fs.readFileSync('./certs/85046192-localhost_3443.cert')
    };

    app.set('port_https', process.env.PORT);

    const secureServer = https.createServer(options, app);
    secureServer.listen(httpsPort,function (){
        console.log('HTTPS Server on');
    });

    let standardServer = http.createServer(app);
    standardServer.listen(httpPort,function (){
        console.log('HTTP Server on');
    });
} else {
    //Heroku
    app.listen(process.env.PORT, function () {
        console.log('Server Listen');
    });
}

module.exports = app;



