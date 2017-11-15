# Private-Investigator-Chatbot
Step into the shoes of a Private Investigator called to the scene of a murder. A fun whodunit using IBM's Conversion and Tone Analyzing APIs.

Went into this with absolutely no experience with AI and very limited experience in Javascript, so it was a huge challenge for me. Developed for the chatbot MindSumo competition, https://www.mindsumo.com/contests/chatbot. 

Important note: A lot of this code is forked from IBM sources, I do not claim ownership over anything but the Conversation JSON material.

### How to use ###
* Download the JSON file at \conversations\Private-Investigator-Chatbot.json to your computer.
* Nagivate to https://watson-conversation.ng.bluemix.net/instances.
* At the top it will say {Workspaces} {Create} {^}.
* Click the upload icon (or {^})
* When it says "Import a workspace", navigate to your downloaded JSON file.

### You now have two options: ###


1. First Option
	1. At the top right corner you can click the icon that looks like a speech bubble with a (...) inside.
	2. This will allow you to immediately use the Conversation without downloading.
	3. If you would like to deploy it to Slack or a similar service, on the far left corner click the circular pointer (its the third icon down), and it will walk you through deploying the app.

2. Second Option
	1. If you would like to run the app locally, download this repository at https://github.com/joshuajolly/Private-Investigator-Chatbot/archive/master.zip.
	2. Install node.js
	3. Get workspace id and conversation username/password using the following:
		1. Workspace ID: find at https://watson-conversation.ng.bluemix.net/, workspaces >Private-Investigator-Chatbot > ... (on top left corner) > "view details" > WORKSPACE ID
		2. Conversation Username/Password - Navigate to https://console.bluemix.net/catalog/services/conversation, click create, Navigate to https://console.bluemix.net/dashboard/apps, click on "Conversation" > Service Credentials, and then paste your Conversation Username and Password into the slot in credentials.txt.
		3. Same process for "Tone" apis, provided you have already deployed the app to https://console.bluemix.net/catalog/services/.
	4. Navigate to directory in CMD, and type "npm install". When that finishes type "npm start".
	5. Enjoy!


