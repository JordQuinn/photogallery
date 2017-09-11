import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Home from '../components/Home'

class BaseLayout extends Component {
	render () {
		return (

			<div id ="container">
				<div id ="titlediv">
				   <span>  <Link to= '/Home'>My Photo Album</Link> </span>
				</div>
			  <div id = "navdiv">

					<ul class ="mainlinks">
						<li><NavLink exact activeClassName='active' to='/'>Album 1</NavLink></li>
						<li><NavLink activeClassName='active' to='/Album2'>Album 2</NavLink></li>
						<li><NavLink activeClassName='active' to='/Album3'>Album 3</NavLink></li>
						<li><NavLink activeClassName='active' to='/Album4'>Album 4</NavLink></li>
						<li><NavLink activeClassName='active' to='/Album5'>Album 5</NavLink></li>
						<li><NavLink activeClassName='active' to='/Album6'>Album 6</NavLink></li>
			</ul>
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default BaseLayout
