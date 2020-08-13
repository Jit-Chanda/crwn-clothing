import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>Already have an account !</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google SignIn</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;