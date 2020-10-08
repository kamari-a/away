import React from 'react';
import './ListingAmenities.scss';

const ListingAmenities = (props) => {
    return (   
        <>
        <h3 className='single-listing__amenities-title'>Amenities</h3>
        <h4 className='single-listing__amenities-type'>Outdoor</h4>
        <p className='single-listing__amenities'>{props.listings.outdoor}</p>

        <h4 className='single-listing__amenities-type'>Indoor</h4>
        <p className='single-listing__amenities'>{props.listings.indoor}</p>

        <h4 className='single-listing__amenities-type'>Essentials</h4>
        <p className='single-listing__amenities'>{props.listings.essentials}</p>
        </>
    )
}

export default ListingAmenities;