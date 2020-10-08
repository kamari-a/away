import React from 'react';
import './ReviewInput.scss';

const ReviewInput = (props) => {
    return (
        <>
        <h3 className='reviews__form-title'>Leave a Review</h3>

        <form onSubmit={props.handleSubmit}
        id='reviewForm' className='reviews__form' validate='true'>

            <label htmlFor='nameLabel' className='reviews__name-heading'>Name</label>
            <input
            onChange={props.handleNameChange}
            value={props.name}
            type='text' id='nameInput' className='reviews__name-input' 
            required
            />

            <label htmlFor='reviewLabel' className='reviews__review-heading'>Review</label>
            <textarea
            rows="5" cols="5"
            onChange={props.handleReviewChange}
            value={props.comment} id='reviewInput'
            className='reviews__review-input'
            required />

            <button type='submit' id='submitBtn' className='reviews__btn'>Submit Review</button>
        </form>
        </>
    )
}

export default ReviewInput;