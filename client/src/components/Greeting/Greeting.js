import React from 'react';

class Greeting extends React.Component {
    state = {
        hour: null
    }
    
    getHour = () => {
        const date = new Date();
        const hour = date.getHours();
        this.setState({
            hour
        })
    }

    componentDidMount() {
        this.getHour()
    }

    setGreeting = () => {
        if(this.state.hour < 12) {
            return 'Good Morning,'
        } else if (this.state.hour >= 12 && this.state.hour < 18) {
            return 'Good Afternoon,'
        } else if (this.state.hour >= 18) {
            return 'Good Evening,'
        } 
    }

    render() { 
        return (
            <h1 className='profile__title'>{this.setGreeting()}</h1>
        )
    }
}

export default Greeting;