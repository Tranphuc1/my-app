import React, { Component } from 'react';
import { auth1 } from '../../../FirebaseConnect2';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          users: [],
        };
      }
      componentDidMount() {
        this.setState({ loading: true });
        auth1.users().on('value', snapshot => {
          const usersObject = snapshot.val();
          const usersList = Object.keys(usersObject).map(key => ({
            ...usersObject[key],
            uid: key,
          }));
          this.setState({
            users: usersList,
            loading: false,
          });
        });
      }    
      render() {
        const { users, loading } = this.state;
    
        return (
          <div>
            <h1>Admin</h1>
    
            {loading && <div>Loading ...</div>}
    
            <UserList users={users} />
          </div>
        );
      }
    }

    const UserList = ({ users }) => (
        <ul>
          {users.map(user => (
            <li key={user.uid}>
              <span>
                <strong>ID:</strong> {user.uid}
              </span>
              <span>
                <strong>E-Mail:</strong> {user.email}
              </span>
              <span>
                <strong>Username:</strong> {user.username}
              </span>
            </li>
          ))}
        </ul>
      );
      
      export default Admin;
      