import React from 'react';
import './ListingImages.scss';

const ListingImages = (props) => {
    return (
        <div className='single-listing__img-container'>
            <img className='single-listing__img' src={props.listings.image2} alt=''/>
            <img className='single-listing__img' src={props.listings.image3} alt=''/>
            <img className='single-listing__img' src={props.listings.image4} alt=''/>
            <img className='single-listing__img' src={props.listings.image5} alt=''/>
            <img className='single-listing__img' src={props.listings.image6} alt=''/>
            <img className='single-listing__img' src={props.listings.image7} alt=''/>
            <img className='single-listing__img' src={props.listings.image8} alt=''/>
        </div>
    )
}

export default ListingImages;