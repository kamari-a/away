import React from 'react';
import './Reviews.scss';

const Reviews = (props) => {
    return (
        <section className='reviews__review' key={props.reviews.id} >
            <div className='reviews__review-header'>
                <p className='reviews__name'>{props.reviews.name}</p>
                <p className='reviews__timestamp'>{new Date(props.reviews.timestamp).toLocaleDateString()}</p>
            </div>

            <p className='reviews__comment'>{props.reviews.comment}</p>
        </section>
    )
}

export default Reviews;