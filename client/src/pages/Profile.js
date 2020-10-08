import React from 'react';
import './Profile.scss';
import Greeting from '../components/Greeting/Greeting';
import Favourite from '../components/Favourite/Favourite';
import AddListing from '../components/AddListing/AddListing';
import Contact from '../components/Contact/Contact';

const Profile = (props) => {
    return (
        <>
        <main className='profile'>
            <section className='profile__wrapper'>
                <Greeting/>
                <h2 className='profile__user'>{props.user.email}</h2>
                <p className='profile__description'>What would you like to do today?</p>

                <section className='profile__container'>
                    <Favourite openFavourite={props.openFavourite} 
                    toggleFavourite={props.toggleFavourite}/>
                    
                    <AddListing/>
                    
                    <Contact 
                    openContact={props.openContact} 
                    toggleContact={props.toggleContact}/>
                </section>

                <button type='submit' onClick={props.logout} className='profile__btn'>Log Out</button>
            </section>
        </main>
        </>
    )
}

export default Profile;