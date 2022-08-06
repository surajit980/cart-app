import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    //constructor
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    name: "Watch",
                    qty:1,
                    id:1
                },
                {
                    price: 99999,
                    name: "Laptop",
                    qty:2,
                    id:2
                },
                {
                    price: 9999,
                    name: "Mobile",
                    qty:10,
                    id:3
                }
            ]
        }
      }

      //increase Quantity function
      increaseQuantity=(product)=>{
        const products=this.state.products;
        const index=products.indexOf(product);

        products[index].qty+=1;

        this.setState({
            products:products
        });
      }

      //decrease quantity function
      decreaseQuantity=(product)=>{
        const products=this.state.products;
        const index=products.indexOf(product);

        if (products[index].qty === 0) {
            return;
        }

        products[index].qty-=1;

        this.setState({
            products
        })
      }

      //delete product function
      deleteProduct=(id)=>{
        const products=this.state.products;
        const newProducts=products.filter((item)=>item.id !== id)
        this.setState({
            products:newProducts
        })
      }
    render(){
        return(
            <div className="cart">
                <h1 className="text-center">Your Cart</h1>
                {this.state.products.map((product)=>{
                    return <CartItem 
                                product={product} 
                                key={product.id} 
                                onIncreaseQuantity={this.increaseQuantity}
                                onDecreaseQuantity={this.decreaseQuantity}
                                onDeleteProduct={this.deleteProduct}
                            />
                })}
            </div>
        )
    }
}

export default Cart;