import React from 'react';
import { auth } from '../../FIREBASE/firebase'
import { connect } from 'react-redux'
import { login, thunk_action_creator } from '../../Redux/ACTION/cartAction'
import './login.css'

class Login extends React.Component {
    login = (e) => {
        e.preventDefault();
        const login = document.querySelector('#login');
        const email = login['email'].value;
        const pin = login['password'].value;
        auth.signInWithEmailAndPassword(email, pin).then(cred => {
            this.props.login();
            this.props.thunk_action_creator();
            this.props.history.push('/');
        }).catch(err => {
            alert(err.message)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div id="first">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className=" text-center">
                                        <h1 className='heading'>Login</h1>
                                    </div>
                                </div>
                                <form name="login" id='login' onSubmit={(e) => this.login(e)}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                    </div>
                                    <div className=" text-center ">
                                        <button type="submit" className="waves-effect waves-light btn subbtn">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (id) => { dispatch(login(id)) },
        thunk_action_creator: () => dispatch(thunk_action_creator())
    }
}


export default connect(null, mapDispatchToProps)(Login)