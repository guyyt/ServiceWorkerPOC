# ServiceWorkerCompileTIme
POC on stand alone app to use service worker to remove compile time overhead 

In order to make this work you will need to have node installed.

run "npm install"

Then run “node server.js” from the folder and browse into http://localhost:1336/test.html from chrome.

Go to the webpage and click the button while inspecting the network tab in dev tools 

Refresh the page and click on the button again. this time you should see the file EwaDS.js being served from the service worker.