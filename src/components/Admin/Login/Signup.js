
import React, { Component } from 'react';
import { firebaseConnect } from '../../../FirebaseConnect';



class Signup extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebaseConnect.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{this.props.history.push("/App1");})
    .catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    firebaseConnect.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then(()=>alert('đăng ký thành công'))
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
       <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
              <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
          </form>
      </div>
      <div className="container">
  <div className="row">
    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div className="card card-signin my-5">
        <div className="card-body">
          <h5 className="card-title text-center">Sign In</h5>
          <form className="form-signin">
            <div className="form-label-group">
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label htmlFor="inputEmail">Email address</label>
            </div>
            <div className="form-label-group">
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
            </div>
            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
            <hr className="my-4" />
            <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign in with Google</button>
            <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    );
  }
}
export default Signup;