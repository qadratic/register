import React, { useState } from 'react';
import './App.css';
import { Paper, Typography, Button, TextField, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import HomePage from './components/HomePage';
import GoogleBtn from './components/GoogleBtn';
import logo from './logo.png'

import { useFormik } from 'formik'
import Axios from 'axios';
import FacebookButton from './components/FacebookButton';
import { AppContainer } from './styles';

function App() {

	// state for login info
	const [login, setLogin] = useState({
		loggedIn: false,
		method: '',
		name: '',
	});

	// state for show/hide password
	const [showPassword, setShowPassword] = useState(false);

	// handle form input
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		onSubmit: (values, {resetForm}) => {
			console.log(JSON.stringify(values));
			// make post request to reqres
			Axios.post('https://reqres.in/api/users', values)
				.then(res => {
					console.log(res.data)
					resetForm()
					setLogin({ loggedIn: true, method: 'custom', name: res.data.firstName });
				})
				.catch(err => { console.log(err) })
		},
	});

	// display welcome message after register
	if (login.loggedIn) {
		return <HomePage login={login} setLogin={setLogin} />
	}


	return (
		<AppContainer >
			<img src={logo} alt='logo' style={{ ...customStyles.mainLogo }} />
			<Paper elevation={4} style={{ ...customStyles.paper }} >
				<Typography variant='h6' >SIGN UP</Typography>
				<br />
				<Typography variant='h3' >Create your account</Typography>
				<br />
				<Typography variant='body1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
				<br />
				<div style={{ ...customStyles.input }} >
					{/* doesn't work yet */}
					<GoogleBtn setLogin={setLogin} />{' '}
					<FacebookButton setLogin={setLogin} />
				</div>
				<br />
				<div>or</div>
				<br />
				<form style={{ ...customStyles.input }} onSubmit={formik.handleSubmit} >
					<TextField variant='outlined' label='First Name' style={{ ...customStyles.input }} name='firstName' onChange={formik.handleChange} value={formik.values.firstName} />
					<br /><br />
					<TextField variant='outlined' label='Last Name' style={{ ...customStyles.input }} name='lastName' onChange={formik.handleChange} value={formik.values.lastName} />
					<br /><br />
					<TextField variant='outlined' label='Email' type='email' style={{ ...customStyles.input }} name='email' onChange={formik.handleChange} value={formik.values.email} />
					<br /><br />
					<FormControl variant="outlined" style={{ ...customStyles.input }} >

						<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							label='Password'
							variant='outlined'
							name='password'
							onChange={formik.handleChange}
							value={formik.values.password}
							type={showPassword ? 'text' : 'password'}
							// value={values.password}
							// onChange={}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => { setShowPassword(state => !state) }}
									>
										{!showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>

					<br /><br />
					<Typography variant='body1' >By clicking Sign Up, You agree to our <a href='https://www.lipsum.com/feed/html' >Terms of Use</a> and our <a href='https://www.lipsum.com/feed/html' >Privacy Policy</a></Typography>
					<br />
					<Button variant='contained' type='submit' style={{ ...customStyles.submitButton }} >sign up</Button>
				</form>

				<br />
			</Paper>
		</AppContainer>
	);
}

const customStyles = {
	paper: { minWidth: 300, padding: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' },
	mainLogo: { maxWidth: 270 },
	input: { width: '100%' },
	submitButton: { width: '100%', backgroundColor: 'blue', color: 'white' },
}

export default App;