Project setup
/app
npm install

/app/backend
npm install

---FIRST STEP---
You should to launch and connect to Date Base.

After all move to app/backend/env & env.example and
change the connection to a necessary date base.

In a file /backend/controllers you can see controllers for different tables.

---SECOND STEP---
You should to launch the server.
Move to: 
/backend/package.json
And input in console:
npm run dev

OR

just launch "dev": "nodemon app.js" in the package.json.

And, you launch the server on port 3000
---THIRD STEP---
Launch the client server:

in /app

npm run serve

or in /app/package.json launch "serve": "vue-cli-service serve"

And, you launch the client server on port 8000 or whichever else