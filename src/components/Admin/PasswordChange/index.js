import React, { Component } from 'react';
import EnhancedPasswordChangeForm from './PasswordChangeForm';
import { auth1 } from '../../../FirebaseConnect2';

const updateByPropertyName = (propertyName, value) => () => ({
	[propertyName]: value,
});
const INITIAL_STATE = {
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class PasswordChangeForm extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { passwordOne } = this.state;

		auth1.doPasswordUpdate(passwordOne)
			.then(() => {
				this.setState(() => ({ ...INITIAL_STATE }));
			})
			.catch(error => {
				this.setState(updateByPropertyName('error', error));
			});
		event.preventDefault();
	}
	render() {
		return (
			<div className="login-box">
				<EnhancedPasswordChangeForm history={this.props.history} />
			</div>
		);
	}
}

export default PasswordChangeForm;