const express = require('express');
const router = express.Router();
const listingsData = require('../data/listings.json');
const {v4: uuidv4} = require('uuid');

//GET /listings responds with an array of all listings
router.get('/', (req, res) => {
    const allListings = listingsData.map(listing => {
        return {
            id: listing.id,
            title: listing.title,
            location: listing.location,
            image1: listing.image1,
            guests: listing.guests,
            bedrooms: listing.bedrooms,
            beds: listing.beds,
            baths: listing.baths
        }
    })
    res.status(200).json(allListings)
});


//POST /listings posts a new listing to the page
//Note: this will be updated in Phase 2 to actually upload an image rather than the hardcoded one; will use multer as the middleware
router.post('/', (req, res) => {
    if(Object.keys(req.body.title).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add a property name in order to submit'
        })
    } else if (Object.keys(req.body.location).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add a location in order to submit'
        })
    } else if (Object.keys(req.body.description).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add a description in order to submit'
        })
    } else if (Object.keys(req.body.guests).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add the number of guests in order to submit'
        })
    } else if (Object.keys(req.body.bedrooms).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add the number of bedrooms in order to submit'
        })
    } else if (Object.keys(req.body.beds).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add the number of beds in order to submit'
        })
    } else if (Object.keys(req.body.baths).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add the number of baths in order to submit'
        })
    } else if (Object.keys(req.body.price).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add the price in order to submit'
        })
    } else if (Object.keys(req.body.outdoor).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add some outdoor amenities in order to submit'
        })
    } else if (Object.keys(req.body.indoor).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add some indoor amenities in order to submit'
        })
    } else if (Object.keys(req.body.essentials).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add some essentials in order to submit'
        })
    }

    const newListing = {
        ...req.body,
        id: uuidv4(),
        reviews: []
    }

    listingsData.push(newListing);
    res.status(201).json(newListing);
})


//GET /listings/:id responds with an individual listing
router.get('/:id', (req, res) => {
    const singleListingId = req.params.id;
    const singleListing = listingsData.find(listing => 
        listing.id === singleListingId
    )

    if(!singleListing) {
        return res.status(400).json({
            message: 'No listing with this ID found. Please check you have the correct ID and try again'
        });
    }
    res.status(200).json(singleListing)
});


//POST /listings/:id/reviews posts a new review to that specific listing
router.post('/:id/reviews', (req, res) => {
    if(Object.keys(req.body.name).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add a name to your review in order to submit'
        })
    } else if (Object.keys(req.body.comment).length === 0 || null) {
        return res.status(400).json({
            message: 'Please add a comment to your review in order to submit'
        })
    }

    //findIndex returns the index of the first id that matches the current listing's id
    const index = listingsData.findIndex(listing => listing.id === req.params.id);

    const newReview = {
        ...req.body,
        id: uuidv4(),
        timestamp: Date.now(),
    }

    //adds the new review to the listing that has an id that matches the request's id
    listingsData[index].reviews.push(newReview);
    res.status(201).json(newReview);
})


//POST / posts the favourited listing to the profile page
//Note: this will be implemented in Phase 2 as need to rearrange state
router.post('/login', (req, res) => {
    const singleListingId = req.params.id;
    const singleListing = listingsData.find(listing => 
        listing.id === singleListingId
    )
    
    res.status(201).json(singleListing);
}) 


module.exports = router;