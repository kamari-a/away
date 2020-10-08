import React from 'react';
import './AddListing.scss';
import Down from '../../assets/icons/drop-down.svg';
import axios from 'axios';

class AddListing extends React.Component {
    state = {
        listings: [],
        title: '',
        location: '',
        //will be converting this to accept a user uploaded file in Phase 2
        image1: '/images/placeholder.jpg',
        description: '',
        guests: '',
        bedrooms: '',
        beds: '',
        baths: '',
        price: '',
        outdoor: '',
        indoor: '',
        essentials: '',
        open: false,
    }

    toggleSection = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleLocation = (event) => {
        this.setState({
            location: event.target.value,
        })
    }

    handleDescription = (event) => {
        this.setState({
            description: event.target.value,
        })
    }
        
    handleGuests = (event) => {
        this.setState({
            guests: event.target.value,
        })
    }
    
    handleBedrooms = (event) => {
        this.setState({
            bedrooms: event.target.value,
        })
    }
    
    handleBeds = (event) => {
        this.setState({
            beds: event.target.value,
        })
    }
    
    handleBaths = (event) => {
        this.setState({
            baths: event.target.value,
        })
    }

    handlePrice = (event) => {
        this.setState({
            price: event.target.value,
        })
    }

    handleOutdoor = (event) => {
        this.setState({
            outdoor: event.target.value,
        })
    }

    handleIndoor = (event) => {
        this.setState({
            indoor: event.target.value,
        })
    }

    handleEssentials = (event) => {
        this.setState({
            essentials: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        axios({
            method: 'POST',
            url: `/listings/`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                title: this.state.title,
                location: this.state.location,
                image1: this.state.image1,
                description: this.state.description,
                guests: this.state.guests,
                bedrooms: this.state.bedrooms,
                beds: this.state.beds,
                baths: this.state.baths,
                price: this.state.price,
                outdoor: this.state.outdoor,
                indoor: this.state.indoor,
                essentials: this.state.essentials,
                form: this.form
            },
        })
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error)
        })  

        this.setState({
            title: '',
            location: '',
            description: '',
            image1: '',
            guests: '',
            bedrooms: '',
            beds: '',
            baths: '',
            price: '',
            outdoor: '',
            indoor: '',
            essentials: ''
        })
    }

    render() {
        return (
            <>
            <h2 onClick={this.toggleSection} className='profile__form-title'>Add a Listing <img src={Down} className='profile__icon' alt='Blue chevron icon that acts as a clickable drop down arrow'/></h2>

            {this.state.open ? 
            (<form onSubmit={this.handleSubmit}
            id='listingForm' className='profile__form' validate='true'>
    
                <label htmlFor='titleLabel' className='profile__label'>Property Name</label>
                <input
                onChange={this.handleTitle}
                value={this.state.title}
                type='text' id='titleInput' className='profile__input'
                required
                />

                <label htmlFor='locationLabel' className='profile__label'>Location</label>
                <input
                onChange={this.handleLocation}
                value={this.state.location}
                type='text' id='locationInput' className='profile__input'
                required
                />

                <label htmlFor='priceLabel' className='profile__label'>Price per night</label>
                <input
                onChange={this.handlePrice}
                value={this.state.price}
                type='number' id='locationInput' className='profile__input'
                required
                />

                <label htmlFor='descriptionLabel' className='profile__label'>Description</label>
                <input
                onChange={this.handleDescription}
                value={this.state.description}
                type='text' id='descriptionInput' className='profile__input'
                required
                />

                <label htmlFor='imageLabel' className='profile__label' >Image</label>
                <input
                type='file' id='imageInput' className='profile__image-input' 
                required
                /> 

                <label htmlFor='guestsLabel' className='profile__label'>Guests</label>
                <input
                onChange={this.handleGuests}
                value={this.state.guests}
                type='number' id='guestsInput' className='profile__input' 
                required
                />

                <label htmlFor='bedroomsLabel' className='profile__label'>Bedrooms</label>
                <input
                onChange={this.handleBedrooms}
                value={this.state.bedrooms}
                type='number' id='bedroomsInput' className='profile__input'
                required
                />

                <label htmlFor='bedsLabel' className='profile__label'>Beds</label>
                <input
                onChange={this.handleBeds}
                value={this.state.beds}
                type='number' id='bedsInput' className='profile__input' required
                />

                <label htmlFor='bathsLabel' className='profile__label'>Baths</label>
                <input
                onChange={this.handleBaths}
                value={this.state.baths}
                type='number' id='bathsInput' className='profile__input'
                required 
                />

                <label htmlFor='outdoorLabel' className='profile__label'>Outdoor Amenities</label>
                <input
                onChange={this.handleOutdoor}
                value={this.state.outdoor}
                type='text' id='outdoorInput' className='profile__input'
                required 
                />

                <label htmlFor='indoorLabel' className='profile__label'>Indoor Amenities</label>
                <input
                onChange={this.handleIndoor}
                value={this.state.indoor}
                type='text' id='indoorInput' className='profile__input'
                required 
                />

                <label htmlFor='essentialsLabel' className='profile__label'>Essential Amenities</label>
                <input
                onChange={this.handleEssentials}
                value={this.state.essentials}
                type='text' id='essentialsInput' className='profile__input'
                required 
                />
    
                <button type='submit' id='submitBtn' className='profile__submit-btn'>Add Listing</button>
            </form>) : null}
            </>
        )
    }
}

export default AddListing;