import React from 'react';
import Firebase from '../../config/Firebase';
import LogIn from '../LogIn/LogIn';
import Profile from '../../pages/Profile';
import Logo from '../../assets/icons/logo.svg';
import {Link} from 'react-router-dom'

class Auth extends React.Component {
    state = {
        user: {},
        email: '',
        password: '',
        openFavourite: false,
        openContact: false
    }

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        Firebase
        .auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user 
                });
            } else {
                this.setState({
                    user: null
                })
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = (event) => {
        event.preventDefault();
        Firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    logout = () => {
        Firebase
        .auth()
        .signOut();
    }

    signUp = (event) => {
        event.preventDefault();
        Firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    toggleFavourite = () => {
        this.setState({
            openFavourite: !this.state.openFavourite,
        })
    }

    toggleContact = () => {
        this.setState({
            openContact: !this.state.openContact,
        })
    }

    render() {
        return (
            <>
            <header className='header'>
            <img src={Logo} alt='Logo for away. Icon depicts a blue house with a smile' className='header__logo--login'/>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <Link to='/listings' style={{textDecoration: 'none'}}>
                        <li className='header__nav-item'>Properties</li>
                    </Link>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li className='header__nav-item'>Home</li>
                    </Link>
                </ul>
            </nav>
            </header>
            
            {this.state.user ? (<Profile logout={this.logout} user={this.state.user} openFavourite={this.state.openFavourite} openContact={this.state.openContact} toggleFavourite={this.toggleFavourite} toggleContact={this.toggleContact}/>) : (<LogIn email={this.state.email} password={this.state.password} handleChange={this.handleChange} login={this.login} signUp={this.signUp}/>)}
            </>
        )
    }
}

export default Auth;