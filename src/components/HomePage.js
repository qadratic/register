/*global FB*/

import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@material-ui/core';
import { HomePageContainer } from '../styles';

export default function HomePage({ login, setLogin }) {

	// state for name of user
	const [info, setInfo] = useState({ name: '' });

	// get name from facebook account
	const getFBInfo = () => {
		FB.api('/me', function (response) {
			console.log('Successful login for: ' + response.name);
			setInfo({ name: response.name })
		});
	}

	// logs out of this app, not from facebook
	const logoutFB = () => {
		FB.logout(() => {
			setLogin({ loggedIn: false });
		});
	}

	// get name from google account, doesn't work
	const getGoogleInfo = () => { }

	useEffect(() => {
		switch (login.method) {
			case 'facebook':
				getFBInfo();
				break;

			case 'google':
				getGoogleInfo();
				break;

			default:
				setInfo({ name: login.name });
				break;
		}
	}, [login]);

	return (
		< HomePageContainer >
			<Typography variant='h2'>Hello! {info.name}, welcome to your account!</Typography>
			<Button variant='outlined' onClick={() => {
				switch (login.method) {
					case 'facebook':
						logoutFB();
						break;
		
					case 'google':
						// getGoogleInfo();
						break;
		
					default:
						setLogin({ loggedIn: false });
						break;
				}
			}} >click here to logout</Button>
		</HomePageContainer>
	)
}
