/*global FB*/

import React from 'react'
import { Button } from '@material-ui/core';
import fbLogo from '../facebook.png'

export default function FacebookButton({ setLogin }) {
	return (
		<Button variant='outlined' style={{ ...customStyles.button }}
			onClick={() => {
				FB.login(res => {
					console.log(res)
					if (res.status === 'connected') {
						setLogin({ loggedIn: true, method: 'facebook' });
					}
				});
			}}
		> <img src={fbLogo} alt='' width='30' /> {' '} Sign Up with Facebook</Button>
	)
}

const customStyles = {
	button: { width: '49%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-around' }
};