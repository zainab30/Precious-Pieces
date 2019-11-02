import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addItem, subItem } from '../../Redux/ACTION/cartAction'
import './cart.css'

class Cart extends React.Component {
  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  handleAddQuantity = (id) => {
    this.props.addItem(id);
  }

  handleSubtractQuantity = (id) => {
    this.props.subItem(id);
  }

  render() {

    let addedItems = this.props.items.length ?
      (
        this.props.items.map(item => {
          return (
            <div className="main card" key={item.id}>
              <li className="card-image card-content" key={item.id}>
                <div className="center">
                  <center><img src={item.img} alt={item.img} style={{
                    'width': '450px',
                    'height': '350px',
                    'margin': '30px 60px 10px 60px',
                    'border': '2px solid black',
                  }} /></center>
                </div>

                <div className="item-desc">
                  <h5 className="title">{item.title}</h5>

                  <p>{item.desc}</p>
                  <p><b>Price: {item.price}$</b></p>
                  <p>
                    <b>Quantity: {item.quantity}</b>
                  </p>
                  <div className="add-remove">
                    <Link to="/cart" className='color' onClick={() => { this.handleAddQuantity(item._id) }}>&#9650;</Link>{' '} {' '}
                    <Link to="/cart" className='color' onClick={() => { this.handleSubtractQuantity(item._id) }}>&#9660;</Link>
                  </div>
                  <button className="waves-effect waves-light btn pink remove rembtn" onClick={() => { this.handleRemove(item._id) }}>Remove</button>
                </div>

              </li>


            </div>
          )
        })
      ) :

      (
        <div className=''><h5><b>Empty :(</b></h5>

        </div>
      )
    return (
      <div className="container" style={{ 'text-align': 'center', }}>
        <h1 className='heading center'>You have ordered:</h1>
        <ul className="collection" style={{ 'border': '0' }}>
          {addedItems}
        </ul>
        <div className="collection card chkout">
          <li className="collection-item"><b>Total: {this.props.total} $</b></li>
          <li className="collection-item"><b>Total Items: {this.props.totalItems} </b></li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn chkoutbtn">Checkout</button>
      </div>
      </div >
    )
  }
}



const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
    totalItems: state.totalItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => { dispatch(removeItem(id)) },
    addItem: (id) => { dispatch(addItem(id)) },
    subItem: (id) => { dispatch(subItem(id)) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

