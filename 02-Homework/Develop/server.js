const express = require('express');
const PORT = process.env.port || 3001;
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
//Initialize the app and setups a port for the same 
const app = express();

//JSON parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 

//Setting up routes 
app.use("/", htmlRoutes); 
app.use("/api", apiRoutes); 

//LISTEN to Server 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);