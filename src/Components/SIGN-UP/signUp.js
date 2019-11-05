import React from 'react';
import { connect } from 'react-redux'
import { auth } from '../../FIREBASE/firebase'
import { login,thunk_action_creator } from "../../Redux/ACTION/cartAction"
import './signUp.css'

class SignUp extends React.Component {
    reg = (e) => {
        e.preventDefault();
        const signUp = document.querySelector('#signup');
        const email = signUp['login_id'].value;
        const pin = signUp['pin_id'].value;
        const repin = signUp['verify_pin_id'].value;
        if (repin === pin) {
            auth.createUserWithEmailAndPassword(email, pin).then(cred => {
                this.props.login();
                this.props.thunk_action_creator();
                this.props.history.push('/');
            }).catch(err => {
                alert(err.message)
            })
        }
        else {
            alert(`Retype Password! \n\
Your Password Is Incorrect :(`);
        }
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
                                        <h1 className='headings' style={{ 'margin-top': '0', 'display': 'inline' }}>Sign Up</h1>
                                        <form className="omb_loginForm forms" id='signup' onSubmit={(e) => this.reg(e)}>
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                                <input type="email" className="form-control" name="newid" id="login_id" placeholder="Write Email ID" />
                                            </div>
                                            <span className="help-block"></span>

                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                                <input type="password" className="form-control" name="newpin" maxlength="15" id="pin_id" placeholder="Create a Password" />
                                            </div>
                                            <span className="help-block"></span>

                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                                <input type="password" className="form-control" name="verifypin" maxlength='15' id="verify_pin_id" placeholder="Retype Password" />
                                            </div>
                                            <span className="help-block"></span>

                                            <p><button className="waves-effect waves-light btn subbtn" type="submit">Register</button></p>
                                        </form>
                                    </div>
                                </div>
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


export default connect(null, mapDispatchToProps)(SignUp)