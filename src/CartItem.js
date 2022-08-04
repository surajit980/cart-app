import React from "react";

class CartItem extends React.Component {
  constructor(){
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
  }
  increaseQuantity = () => {
    // this.state.qty += 1;
    // console.log('this', this.state);
    // setState form 1
    this.setState({
      qty: this.state.qty + 1
    });

    // setState form 2 - if prevState required use this
    // this.setState((prevState) => {
    //   return {
    //     qty: prevState.qty + 1
    //   }
    // });
  }
  decreaseQuantity=()=>{
    this.setState((prevState)=>{
      return{
        qty:prevState.qty-1
      }
    })
  }
    render() {
      return (
        <div className="cart-item">
           {/* div for left side cart image */}
           <div className="cart-image mr">
           </div>
           {/* div for right side car details */}
           <div className="cart-details">
            <h3>{this.state.title}</h3>
            <p>Rs: {this.state.price}</p>
            <p>Qty: {this.state.qty}</p>
            <div className="mt">
                <img className="icon mr" alt="increase" onClick={this.increaseQuantity} src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                <img className="icon mr" alt="decrease" onClick={this.decreaseQuantity} src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                <img className="icon mr" alt="delete" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
            </div>
           </div>
        </div>
      );
    }
  }

  export default CartItem;