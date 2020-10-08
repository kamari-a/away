import React from 'react';
import './Main.scss';
import Header from '../components/Header/Header';

class Main extends React.Component {
    state = {
        query: '',
        listings: [],
    }

    handleInput = (event) => {
        this.setState({
            query: event.target.value.toLowerCase(),
        })
    }

    handleClick = () => {
        (this.props.history.push(`/listings/${this.state.query}`))
    }
    
    render() {
        return (
            <>
            <Header />
            <main className='home__main'>
                <section className='home__hero'>
                    <h1 className='home__title'>away</h1>
                    <p className='home__subheading'>Luxury homes in some of the world's top destinations</p>
                </section>
    
                <section className='home__form'>
                    <div className='home__search-container'>  
                        <label htmlFor='destination' className='home__destination'>Destination</label>
                        <input onChange={this.handleInput}
                        type='search' name='search' id='search' className='home__search' placeholder='Search e.g. "Italy"' ></input>
                    </div>
                    <button onClick={this.handleClick}type='submit' name='search' id='search' className='home__btn'
                    >Search</button>
                </section>
            </main>
            </>
        )
    }
}

export default Main;