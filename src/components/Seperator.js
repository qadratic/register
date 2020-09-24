import React from 'react'

export default function Seperator() {
	return (
		<div style={{...customStyle.divider}} >
			<div style={{...customStyle.line}} ></div>
			or
			<div style={{...customStyle.line}} ></div>
		</div>
	)
}

const customStyle={
	divider:{
		width:'100%',
		display: 'flex',
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center'
	},
	line:{
		borderBottom:'solid black 1px',
		width:'40%',
	}
}
