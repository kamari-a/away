const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const listingRoutes = require('./routes/listingRoutes');

require('dotenv').config();

app.use(cors());

app.use(express.json());

//allows the use of static files inside the server's 'public' directory
app.use(express.static('public'));

//mounts the router requests on to the path /listings
app.use('/listings', listingRoutes);

//allows us to access the build in the client directory
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
});


