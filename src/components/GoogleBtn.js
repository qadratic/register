/* eslint-disable */

// doesn't work yet, renders static button

import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Button } from '@material-ui/core';
import googleLogo from '../google.png'


const CLIENT_ID = '817773089698-oue1q8vnssn819u0lp48m19qmr5ftbom.apps.googleusercontent.com';


class GoogleBtn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogined: false,
			accessToken: ''
		};

		this.login = this.login.bind(this);
		this.handleLoginFailure = this.handleLoginFailure.bind(this);
		this.logout = this.logout.bind(this);
		this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
	}

	login(response) {
		if (response.accessToken) {
			this.props.setLogin({ loggedIn: true, method: 'google' });
			// this.setState(state => ({
			// 	isLogined: true,
			// 	accessToken: response.accessToken
			// }));
		}
	}

	logout(response) {
		this.setState(state => ({
			isLogined: false,
			accessToken: ''
		}));
	}

	handleLoginFailure(response) {
		alert('Failed to log in')
	}

	handleLogoutFailure(response) {
		alert('Failed to log out')
	}

	render() {
		return (
			// <div>
			// 	{this.state.isLogined ?
			// 		<GoogleLogout
			// 			clientId={CLIENT_ID}
			// 			buttonText='Logout'
			// 			onLogoutSuccess={this.logout}
			// 			onFailure={this.handleLogoutFailure}
			// 		>
			// 		</GoogleLogout> : <GoogleLogin
			// 			clientId={CLIENT_ID}
			// 			buttonText='Login'
			// 			onSuccess={this.login}
			// 			onFailure={this.handleLoginFailure}
			// 			cookiePolicy={'single_host_origin'}
			// 			responseType='code,token'
			// 		/>
			// 	}
			// 	{/* {this.state.accessToken ? <h5>Your Access Token: <br /><br /> {this.state.accessToken}</h5> : null} */}

			// </div>
			<Button variant='outlined' style={{ ...customStyles.button }}  >
				<img src={googleLogo} width='29' />	Sign Up with Google
			</Button>
		)
	}
}


const customStyles = {
	button: { width: '49%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-around' }
};

export default GoogleBtn;