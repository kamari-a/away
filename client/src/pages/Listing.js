import React from 'react';
import './Listing.scss';
import Header from '../components/Header/Header';
import ListingDetails from '../components/ListingDetails/ListingDetails';
import ListingImages from '../components/ListingImages/ListingImages';
import ListingAmenities from '../components/ListingAmenities/ListingAmenities';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import DatePicker from '../components/DatePicker/DatePicker';
import '../components/DatePicker/DatePicker.scss'
import DateDetails from '../components/DateDetails/DateDetails';
import Reviews from '../components/Reviews/Reviews';
import ReviewInput from '../components/ReviewInput/ReviewInput';
import Favourite from '../components/Favourite/Favourite';
import axios from 'axios';
import moment from 'moment';

class Listing extends React.Component {
    state = {
        listings: [],
        reviews: [],
        startDate: undefined,
		endDate: undefined,
		focusedInput: null,
		minimumNights: 5,
        numberOfMonths: 1,
        name: '',
        comment: '',
        favourites: [],
        open: false,
    }

    componentDidMount() {
        axios
        .get(`/listings/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                listings: response.data,
                reviews: response.data.reviews,
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    //calculates number of nights selected in calendar to determine booking price
    calculateLength = (startDate, endDate) => {
		startDate = moment(this.state.startDate);
		endDate = moment(this.state.endDate);

        if (Number.isNaN(endDate.diff(startDate, 'days'))) {
            return '0';
        } else return endDate.diff(startDate, 'days');
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleReviewChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `/listings/${this.props.match.params.id}/reviews`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                name: this.state.name,
                comment: this.state.comment,
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })  

        this.setState({
            name: '',
            comment: '',
        })
    }

    //adds current listing to favourites
    //Note: this will be implemented in Phase 2
    addFavourite = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `/login`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                favourites: this.state.favourites
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })  
    }

    //hides content
    toggleSection = () => {
        this.setState({
            open: !this.state.open
        })
    }

    componentDidUpdate() {
        axios
        .get(`/listings/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                reviews: response.data.reviews,
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    render() {
        const vacationLength = this.calculateLength(this.state.startDate, this.state.endDate);

        return (
            <>
            <Header />
            <main className='single-listing'>
                <ListingDetails listings={this.state.listings} addFavourite={this.addFavourite}/>
            
                <section className='single-listing__wrapper'>
                    <section className='single-listing__wrapper-left'>
                        <ListingImages listings={this.state.listings}/>
                    </section>
                    
                    <section className='single-listing__wrapper-right'>
                        <ListingAmenities listings={this.state.listings}/> 

                        <DatePicker/>

                        <DateRangePicker
                        startDateId='startDate'
                        endDateId='endDate'
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={({startDate, endDate}) => {this.setState({startDate, endDate})}}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={(focusedInput) => {this.setState({focusedInput})}}	
                        startDatePlaceholderText='Arrival'
                        endDatePlaceholderText='Departure'
                        minimumNights={this.state.minimumNights}
                        numberOfMonths={this.state.numberOfMonths}
                        />  

                        <DateDetails 
                        listings={this.state.listings}
                        vacationLength={vacationLength}
                        toggleSection={this.toggleSection}
                        open={this.state.open}
                        />

                        <section className='reviews'>
                            <h3 className='reviews__title'>Reviews</h3>
                            {this.state.reviews.map(reviews => 
                                <Reviews 
                                reviews={reviews}
                                key={reviews.id}
                                name={reviews.name}
                                comment={reviews.comment}
                                timestamp={reviews.timestamp}
                                />
                            )}

                            <ReviewInput 
                            key={this.state.reviews.id}
                            name={this.state.reviews.name}
                            comment={this.state.reviews.comment}
                            handleSubmit={this.handleSubmit}
                            handleNameChange={this.handleNameChange}
                            handleReviewChange={this.handleReviewChange}
                            />
                        </section>

                        {this.state.favourites.map(favourites => 
                            <Favourite favourites={favourites.listings} 
                            title={favourites.listings.title}
                            location={favourites.listings.location}
                            image1={favourites.listings.image1}
                            guests={favourites.listings.guests}
                            bedrooms={favourites.listings.bedrooms}
                            beds={favourites.listings.beds}
                            baths={favourites.listings.baths}
                            addFavourite={this.addFavourite}
                            toggleSection={this.toggleSection}
                            open={this.state.open}/>
                        )}
                    </section>
                </section>
            </main>
            </>
        )
    }
}

export default Listing;