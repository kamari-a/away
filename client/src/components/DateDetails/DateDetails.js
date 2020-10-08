import React from 'react';
import './DateDetails.scss';

const DateDetails = (props) => {
    return (
        <section className='date-details__container'>
            <div className='date-details__nights-container'>
                <p className='date-details__nights'>{props.vacationLength} nights</p>

                <p className='date-details__night-price'>from ${props.listings.price} per night</p>
            </div>

            <div className='date-details__total-container'>
                <p className='date-details__total'>Total</p>
                <p className='date-details__total-price'>${props.vacationLength * props.listings.price}</p>
            </div>

            <p className='date-details__description'>Please submit your booking request and one of our advisors will get back to you.</p>

            <button className='date-details__btn' onClick={props.toggleSection}>Submit Request</button>

            {props.open ? (<p className='date-details__confirmation'>Thank you for submitting your booking request! An advisor will be in touch shortly.</p>) : null}
        </section>
    )
}

export default DateDetails;