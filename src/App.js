import React from "react"
import Cart from "./Cart";
import Navbar from "./Navbar";
import { db } from "./firebase-config";
import { collection,onSnapshot,addDoc, doc, updateDoc,deleteDoc } from "firebase/firestore";
// import {getDocs,collection} from "firebase/firestore";
class App extends React.Component {
   //constructor
   constructor(){
    super();
    this.state = {
        products: [
            // {
            //     price: 999,
            //     name: "Watch",
            //     qty:1,
            //     img:"https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126283rbr-0031.png?impolicy=v6-upright&imwidth=270",
            //     id:1
            // },
            // {
            //     price: 99999,
            //     name: "Laptop",
            //     qty:2,
            //     img:"https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg",
            //     id:2
            // },
            // {
            //     price: 9999,
            //     name: "Mobile Phone",
            //     qty:10,
            //     img:"https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg",
            //     id:3
            // }
        ],loading:true
    }
  }


  componentDidMount(){
    const productsRef=collection(db,"products")

    // getDocs(productsRef).then((snapshot)=>{
    //   const products=snapshot.docs.map((doc)=>{
    //     const data=doc.data();
    //     data['id']=doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products,loading:false
    //   })
    // })

    onSnapshot(productsRef,(snapshot)=>{
      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })
      this.setState({
        products,loading:false
      })
    })
  }


  //increase Quantity function
  increaseQuantity=(product)=>{
    const products=this.state.products;
    const index=products.indexOf(product);
    const id=products[index].id;
    // products[index].qty+=1;

    // this.setState({
    //     products:products
    // });

    updateDoc(doc(db,"products",id),{qty:products[index].qty+=1})
    
  }

  //decrease quantity function
  decreaseQuantity=(product)=>{
    const products=this.state.products;
    const index=products.indexOf(product);
    const id=products[index].id;
    if (products[index].qty === 0) {
        return;
    }

    // products[index].qty-=1;

    // this.setState({
    //     products
    // })

    updateDoc(doc(db,"products",id),{qty:products[index].qty-=1})
  }

  //delete product function
  deleteProduct=(id)=>{
    // const products=this.state.products;
    // const newProducts=products.filter((item)=>item.id !== id)
    // this.setState({
    //     products:newProducts
    // })
    deleteDoc(doc(db,"products",id));
  }

  //get products number function
  getProductsCount=()=>{
    const products=this.state.products;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  

  //get total price function
  totalPriceCount=()=>{
    const products=this.state.products;
    let total=0;
    products.map((product)=>{
      total = total + product.price*product.qty;
      return total;
    })
    return total;
  }

  //add product function
  addProduct=()=>{
    addDoc(collection(db,"products"),{
      img:"https://www.lg.com/in/images/washing-machines/md07540744/gallery/FHM1207BDL-Washing-Machines-Front-View-D-01.jpg",
      name:"Washer Machine",
      price:50000,
      qty:1
    })
  }

  render(){
    return (
      <div>
        <Navbar
        count={this.getProductsCount()}
        addProduct={this.addProduct}
        />
        <Cart
        products ={this.state.products}
        onIncreaseQuantity={this.increaseQuantity}
        onDecreaseQuantity={this.decreaseQuantity}
        onDeleteProduct={this.deleteProduct}
        />
        {this.state.loading && <h4 style={{"color":"red","textAlign":"center"}}>Loading.......</h4>}
        <div><h3 style={{margin:"20px"}}>TOTAL : {this.totalPriceCount()}</h3></div>
      </div>
    );
  }
}

export default App;
