import React from 'react';
import './ListingDetails.scss';
import Favourite from '../../assets/icons/favourite.svg';

const ListingDetails = (props) => {
    return (
        <>     
        <div className='single-listing__title-container'>
            <h2 className='single-listing__title'>{props.listings.title} <img onClick={props.addFavourite} src={Favourite} alt='Heart icon to add listing to favourites' className='single-listing__favourite'/></h2> 
        </div>

        <h3 className='single-listing__location'>{props.listings.location}</h3>  

        <img className='single-listing__img-1' src={props.listings.image1} alt='Photograph of listed property'/>
        
        <div className='single-listing__capacity-container'>
            <p className='single-listing__capacity'>{props.listings.guests} guests</p>
            <p className='single-listing__capacity'>{props.listings.bedrooms} bedrooms</p>
            <p className='single-listing__capacity'>{props.listings.beds} beds</p>
            <p className='single-listing__capacity'>{props.listings.baths} baths</p>
        </div>

        <p className='single-listing__description'>{props.listings.description}</p>
        </>
    )
}

export default ListingDetails;