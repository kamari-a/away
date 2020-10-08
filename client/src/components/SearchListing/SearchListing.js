import React from 'react';
import './SearchListing.scss';
import Down from '../../assets/icons/drop-down.svg';

const SearchListing = (props) => {
    return (
        <section className='listings__filters'>
            <h3 onClick={props.toggleSection} className='listings__filters-title'>Filter Search<img src={Down} className='listings__icon' alt='Blue chevron icon that acts as a clickable drop down arrow'/></h3>

            {props.open ? 
            (<>
                <label className='listings__label'>Location</label>
                <input type='search' value={props.location} onChange={props.handleInput} className='listings__input' placeholder="Try 'New York'"></input>

                <label className='listings__label'>Number of Guests</label>
                <select onChange={props.handleGuests} value={props.guests} className='listings__input'>
                    <option value=''>Any</option>
                    <option value='2'>2</option>
                    <option value='4'>4</option>
                    <option value='6'>6</option>
                    <option value='8'>8</option>
                    <option value='10'>10</option>
                    <option value='16'>16</option>
                </select>

                <label className='listings__label'>Number of Beds</label>
                <select onChange={props.handleBeds} value={props.beds} className='listings__input'>
                    <option value=''>Any</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='8'>8</option>
                    <option value='10'>10</option>
                </select>

                <label className='listings__label'>Number of Baths</label>
                <select onChange={props.handleBaths} value={props.baths} className='listings__input'>
                    <option value=''>Any</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
            </>) : null}
        </section>
    )
}

export default SearchListing;