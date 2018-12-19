import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import * as routes from '../../Products/constants/Login';
import { firebase } from '../../../FirebaseConnect2';

const withAuthorization = (condition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if (!condition(authUser)) { //User chưa đăng nhập
                    this.props.history.push(routes.SIGN_IN);
                }
            });
        }

        render() {
            return (this.props.authUser) ? <Component /> : null;
        }
    }

    const mapStateToProps = (state) => ({
        authUser: state.sessionState.authUser,
    });

    return compose(withRouter, connect(mapStateToProps) )(WithAuthorization);
}

export default withAuthorization;