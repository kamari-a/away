import React from 'react';
import './Favourite.scss';
import Down from '../../assets/icons/drop-down.svg';

const Favourite = (props) => {
    return (
        <>
        <h2 onClick={props.toggleFavourite} className='profile__favourite-title'>Favourite Listings<img src={Down} className='profile__icon' alt='Blue chevron icon that acts as a clickable drop down arrow'/></h2>

        {props.openFavourite ? 
       
        (<>
        <p className='profile__favourite-content'>No current favourites.</p>

        {/* //This will be implemented in Phase 2 as need to refigure my state for it to be passed from the Listing Component to here */}
        
        {/* <section className='listings__container'>
        <h2 className='listings__title'>{props.title}</h2> 
        <h3 className='listings__location'>{props.location}</h3>  
        <img src={props.image1} alt='Photograph of property listing' className='listings__img'></img>

        <div className='listings__capacity-container'>
            <p className='listings__guests'>{props.guests} guests</p>
            <p className='listings__bedrooms'>{props.bedrooms} bedrooms</p>
            <p className='listings__beds'>{props.beds} beds</p>
            <p className='listings__baths'>{props.baths} baths</p>
        </div>
        </section> */}
        </>
        ) : null}
        </>
    )
}

export default Favourite;