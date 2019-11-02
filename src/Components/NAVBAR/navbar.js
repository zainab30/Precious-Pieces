import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
// import { removeItem, addItem, subItem } from '../../Redux/ACTION/cartAction'
import './navbar.css'

class Navbar extends React.Component {
    handleLogOut = () => {
        this.props.logout();
    }
    render() {
        return (
            <div style={{ 'margin': '20px', 'padding': '20px', 'font-size': '20px', 'font-weight': 'bold' }}>
                < nav className="navbar navbar-expand-md fixed-top navbar navbar-light" style={{
                    'background-color': '#ff9999',
                    '-webkit-box-shadow': '13px 17px 19px -4px rgba(0, 0, 0, 0.43)',
                    '-moz-box-shadow': ' 13px 17px 19px -4px rgba(0, 0, 0, 0.43)',
                    'box-shadow': '13px 17px 19px -4px rgba(0, 0, 0, 0.43)',
                    'background': 'rgba(109, 0, 25, 1)',
                    'background': '-moz-linear-gradient(left, rgba(109, 0, 25, 1) 0%, rgba(109, 0, 25, 1) 0%, rgba(169, 3, 41, 1) 14%)',
                    'background': '-webkit-gradient(left top, right top, color-stop(0%, rgba(109, 0, 25, 1)), color-stop(0%, rgba(109, 0, 25, 1)), color-stop(14%, rgba(169, 3, 41, 1)))',
                    'background': '-webkit-linear-gradient(left, rgba(109, 0, 25, 1) 0%, rgba(109, 0, 25, 1) 0%, rgba(169, 3, 41, 1) 14%)',
                    'background': '-o-linear-gradient(left, rgba(109, 0, 25, 1) 0%, rgba(109, 0, 25, 1) 0%, rgba(169, 3, 41, 1) 14%)',
                    'background': '-ms-linear-gradient(left, rgba(109, 0, 25, 1) 0%, rgba(109, 0, 25, 1) 0%, rgba(169, 3, 41, 1) 14%)',
                    'background': 'linear-gradient(to right, rgba(109, 0, 25, 1) 0%, rgba(109, 0, 25, 1) 0%, rgba(169, 3, 41, 1) 14%)',
                    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#6d0019", endColorstr="#a90329", GradientType=1)',
                }}>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to='/' exact className="nav-item nav-link active">Home</Link>
                            <Link to='/cart/' className="nav-item nav-link ">Cart {this.props.totalItems}</Link>
                            <Link to='/about/' className="nav-item nav-link">About</Link>
                        </div>
                        <div className="navbar-nav ml-auto">
                            {this.props.login ? <p onClick={(e) => { this.handleLogOut(); }} class='nav-link nav-item' id="logout">Log Out</p> : <span style={{ 'display': 'inline' }}><Link to='/login/' className="nav-link nav-item">Login</Link> <Link to='/signup/' className="nav-link nav-item">Sign Up</Link></span>}
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total,
        totalItems: state.totalItems,
        login: state.login,
    }
}

export default connect(mapStateToProps )(Navbar)
