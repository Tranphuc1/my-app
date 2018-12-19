import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../../FirebaseConnect2';
import * as Types from '../../Products/constants/ActionType';
const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        componentDidMount() {
            const { onSetAuthUser } = this.props;
            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                ? onSetAuthUser(authUser)
                : onSetAuthUser(null);
            });
        }
        render() {
            return (
                <Component />
                );
        }
    }
    const mapDispatchToProps = (dispatch) => ({
        onSetAuthUser: (authUser) => dispatch({ type:Types.AUTH_USER_SET, authUser }),
    });

    return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;