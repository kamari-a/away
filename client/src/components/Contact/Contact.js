import React from 'react';
import './Contact.scss';
import Down from '../../assets/icons/drop-down.svg';

const Contact = (props) => {
    return (
        <>
        <h2 onClick={props.toggleContact} className='profile__contact-title'>Contact an Advisor<img src={Down} className='profile__icon' alt='Blue chevron icon that acts as a clickable drop down arrow'/></h2>

        {props.openContact ? 
        (<section className='profile__contact-container'>
            <p className='profile__contact-content'>Our advisors are here to help.</p>
            <p className='profile__contact-content'>Please reach out with any questions you may have, and one of our team will be in touch within the next 24 hours.</p>

            <p className='profile__contact-details profile__contact-details--email'>hello@away.com</p>
            <p className='profile__contact-details'>+1 123-456-7890</p>
        </section>) : null}
        </>
    )
}

export default Contact;