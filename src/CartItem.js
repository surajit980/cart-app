import React from "react";

class CartItem extends React.Component {
    render() {
      return (
        <div className="cart-item">
           {/* div for left side cart image */}
           <div className="cart-image mr">
           </div>
           {/* div for right side car details */}
           <div className="cart-details">
            <h3>Mobile phone</h3>
            <p>Rs: 9999</p>
            <p>Qty: 1</p>
            <div className="mt">
                <img className="icon mr" alt="increase" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                <img className="icon mr" alt="decrease" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                <img className="icon mr" alt="delete" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
            </div>
           </div>
        </div>
      );
    }
  }

  export default CartItem;