import React from 'react';
import './AllListings.scss';
import Favourite from '../../assets/icons/favourite.svg';
import {Link} from 'react-router-dom';

const AllListings = (props) => {
    return (
        <>
        <Link to={`/listings/${props.listings.id}`}className='listings__link'>
            <section className='listings__container'>     
                <h2 className='listings__title'>{props.listings.title}  <img src={Favourite} alt='Heart icon to add listing to favourites' className='listings__favourite'/></h2> 

                <h3 className='listings__location'>{props.listings.location}</h3>  
                <img src={props.listings.image1} alt='Photograph of property listing' className='listings__img'></img>

                <div className='listings__capacity-container'>
                    <p className='listings__capacity'>{props.listings.guests} guests</p>
                    <p className='listings__capacity'>{props.listings.bedrooms} bedrooms</p>
                    <p className='listings__capacity'>{props.listings.beds} beds</p>
                    <p className='listings__capacity'>{props.listings.baths} baths</p>
                </div>
            </section>
        </Link>
        </>
    )
}

export default AllListings;