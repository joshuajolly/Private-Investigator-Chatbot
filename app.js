/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//NOTE: I do not take responsibility for this code. This is a mixture of conversation-simple-master and IBM's stock code for setting up servers.
//

//INSERT USERNAME AND PASSWORD HERE FOR CONVERSATIONS
username=''
password=''
workspace_id=''

//USERNAME AND PASSWORD FOR TONE ANALYSIS

/*
tone_username='93546c34-2fbe-46fc-b39e-d67f11d530da'
tone_password='8qChFtXcT8Zl'
*/

'use strict';

var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests
var Conversation = require('watson-developer-cloud/conversation/v1'); // watson sdk
var watson = require('watson-developer-cloud/tone-analyzer/v3')

var app = express();

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

// Create the service wrapper
var conversation = new Conversation({
  'username' : username,
  'password' : password,
  'version_date': '2017-05-26',
  path: { workspace_id:workspace_id }
});


//Initialize Tone Analyzer  fkzUY5QjhA_esrC4PsrW
/*var toneAnalyzer = new watson({
  'username' : tone_username,
  'password' : tone_password,
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
  version: 'v3',
  version_date:'2016-05-26'
});*/

app.post('/api/message', function(req, res) {
  var workspace = workspace_id

  var payload = {
    workspace_id: workspace,
    context: req.body.context || {},
    input: req.body.input || {}
  };



  conversation.message(payload, function(err, data) {
    if (err) {
      return res.status(err.code || 500).json(err);
    }
    return res.json(updateMessage(payload, data));
  });

});

function updateMessage(input, response) {
  var responseText = null;
  if (!response.output) {
    response.output = {};
  } else {
  	console.log(response)
    return response;
  }
  return response;
}

module.exports = app;