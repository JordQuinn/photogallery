import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App';
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import Album1 from './components/Album1'
import Album2 from './components/Album2'
import Album3 from './components/Album3'
import Album4 from './components/Album4'
import Album5 from './components/Album5'
import Album6 from './components/Album6'

import registerServiceWorker from './registerServiceWorker';

  ReactDOM.render(
  	<Router>
  		<BaseLayout>
  			<Switch>
  				<Route exact path='/' component={App} />
  				<Route path='/Home' component={Home} />
  				<Route path='/Album1' component={Album1} />
  				<Route path='/Album2' component={Album2} />
  				<Route path='/Album3' component={Album3} />
  				<Route path='/Album4' component={Album4} />
  				<Route path='/Album5' component={Album5} />
  				<Route path='/Album6' component={Album6} />
  			</Switch>
  		</BaseLayout>
  	</Router>

  , document.getElementById('root'));
registerServiceWorker();
