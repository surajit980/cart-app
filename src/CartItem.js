import React from "react";

const CartItem = (props) => {
  // increaseQuantity = () => {
  // this.state.qty += 1;
  // console.log('this', this.state);
  // setState form 1
  // this.setState({
  //   qty: this.state.qty + 1
  // });

  // setState form 2 - if prevState required use this
  // this.setState((prevState) => {
  //   return {
  //     qty: prevState.qty + 1
  //   }
  // });
  // }
  // decreaseQuantity=()=>{
  //   if (this.state.qty === 0) {
  //     return;
  //   }
  //   this.setState((prevState)=>{
  //     return{
  //       qty:prevState.qty-1
  //     }
  //   })
  // }
  const product = props.product;
  return (
    <div className="cart-item">
      {/* div for left side cart image */}
      <div >
        <img className="cart-image mr" src={product.img} alt=""/>
      </div>
      {/* div for right side car details */}
      <div className="cart-details">
        <h3>{product.name}</h3>
        <p>Rs: {product.price}</p>
        <p>Qty: {product.qty}</p>
        <div className="mt">
          <img
            className="icon mr"
            alt="increase"
            onClick={() => {
              props.onIncreaseQuantity(product);
            }}
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          />
          <img
            className="icon mr"
            alt="decrease"
            onClick={() => {
              props.onDecreaseQuantity(product);
            }}
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          />
          <img
            className="icon mr"
            alt="delete"
            onClick={() => props.onDeleteProduct(product.id)}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
