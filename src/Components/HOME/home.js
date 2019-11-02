import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/ACTION/cartAction';
import './home.css';



class Home extends React.Component {


  handleClick = (id) => {
    if (this.props.login) {
      this.props.addToCart(id);
    }
    else {
      alert(`It is not Possible to put your Items in cart \n\
      Please Login or Create an Account`);
    }
  }

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card main" key={item.id} >
          <div className="card-image card-content title" style={{ 'text-align': 'center' }}>
            <center><img src={item.img} alt='Products' className='img' style={{
              'width': '450px',
              'height': '350px',
              'margin': '30px 60px 10px 60px',
              'border': '2px solid black',
            }} /></center>
            <button to="/" className='button' onClick={() => { this.handleClick(item._id) }}> + </button>
            <h5>{item.title}</h5>
            <h6>{item.desc}</h6>
            <p><b>Price: {item.price}$</b></p>
          </div>
        </div>
      )
    })

    return (
      <div className="container" style={{ 'text-align': 'center', }}>
        <h1 className="center heading">Products</h1>
        <div className="box">
          {itemList}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    login: state.login
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

