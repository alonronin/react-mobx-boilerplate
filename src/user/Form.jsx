import React from 'react';
import { observer } from 'mobx-react';

const Form = ({ store: { first, last, fullName, setState } = {} } = {}) => <form
	noValidate onSubmit={e => e.preventDefault()}
>
	<label>First Name <input
		type="text" value={first} onChange={e => setState({ first: e.target.value })}
	/></label>
	<label>Last Name <input
		type="text" value={last} onChange={e => setState({ last: e.target.value })}
	/></label>

	<p>{fullName}</p>
</form>;

export default observer(Form);
