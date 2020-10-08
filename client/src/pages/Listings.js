import React from 'react';
import './Listings.scss';
import axios from 'axios';
import Header from '../components/Header/Header';
import SearchListing from '../components/SearchListing/SearchListing';
import AllListings from '../components/AllListings/AllListings';

class Listings extends React.Component {
    state = {
        listings: [],
        open: false
    }

    componentDidMount() {
        axios
        .get('/listings')
        .then(response => {
            this.setState({
                listings: response.data,
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    handleInput = (event) => {
        this.setState({
            location: event.target.value.toLowerCase(),
        })
    }

    handleGuests = (event) => {
        this.setState({
            guests: event.target.value,
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

    toggleSection = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <>
            <Header />
            <main >
                <SearchListing 
                open={this.state.open}
                toggleSection={this.toggleSection}
                location={this.state.location}
                handleInput={this.handleInput}
                handleGuests={this.handleGuests}
                guests={this.state.guests}
                handleBeds={this.handleBeds}
                beds={this.state.beds}
                handleBaths={this.handleBaths}
                baths={this.state.baths}
                />
               
                <section className='listings'>
                    {this.state.listings
                    /* search by location */
                    .filter(listings => {
                        if (!this.state.location) {
                            return true;
                        } if (listings.location.includes(this.state.location)) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    /* search by # of guests */
                    .filter(listings => {
                        if (!this.state.guests) {
                            return true;
                        } if (listings.guests.includes(this.state.guests)) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    /* search by # of bedrooms */
                    .filter(listings => {
                        if (!this.state.beds) {
                            return true;
                        } if (listings.beds.includes(this.state.beds)) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    /* search by # of baths */
                    .filter(listings => {
                        if (!this.state.baths) {
                            return true;
                        } if (listings.baths.includes(this.state.baths)) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    .map(listings => (
                        <AllListings listings={listings} key={listings.id}/>
                    ))}
                </section>
            </main>
            </>
        )
    }
}

export default Listings;