import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CallForParticipation from './Pages/CallForParticipation/CallForParticipation';
import Conference from './Pages/Conference/Conference';

export const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/callforparticipation' component={CallForParticipation} />
			<Route exact path='/conference' component={Conference} />
		</Switch>
	</main>
)