import React, { Component } from 'react';

import Form from './user/Form';
import store from './user/resource';

export default class App extends Component {
	render() {
		return <div>
			<h1>Hello App!</h1>

			<Form store={store}/>
		</div>;
	}
}
