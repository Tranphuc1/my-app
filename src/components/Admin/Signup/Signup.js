import React, { Component } from 'react';
import {
	Link,
	withRouter,
} from 'react-router-dom';
import EnhancedSignUpForm from './SignupForm';
import * as routes from '../../Products/constants/Login';
import {auth} from '../../../FirebaseConnect';


const SignUpPage = ({ history }) =>
	<SignUpForm history={history} />

const updateByPropertyName = (propertyName, value) => () => ({
	[propertyName]: value,
});
const INITIAL_STATE = {
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}
	onSubmit = (event) => {
		const {
			email,
			passwordOne,
		} = this.state;

		const {
			history,
        } = this.props;
       
        auth.createUserWithEmailAndPassword(email, passwordOne)
        .then((u)=>{
            history.push(routes.HOME);
        })
			.catch(error => {
				this.setState(updateByPropertyName('error', error));
			});

		event.preventDefault();
	}

	render() {
		const {
			history,
		} = this.props;
		return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{marginLeft:'390px'}}>
                <div className="login-box">
                    <EnhancedSignUpForm history={history} />
                </div>
            </div>
		);
	}
}

const SignUpLink = () =>
	<p className="text-center message">
		<Link to={routes.SIGN_UP}>Đăng ký</Link>
	</p>
export default withRouter(SignUpPage);
export {
	SignUpForm,
	SignUpLink,
};