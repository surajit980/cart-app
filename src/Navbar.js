const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="nav-left"></div>
      <div className="nav-right">
        <img className="cart-logo mr" onClick={props.addProduct} src="https://cdn-icons.flaticon.com/png/512/3032/premium/3032276.png?token=exp=1660221175~hmac=211692a0ed765e364e2af117fe6d3a53" alt=""/>
        <img
          className="cart-logo ml"
          src="https://as1.ftcdn.net/v2/jpg/00/73/10/64/1000_F_73106428_Q91LNUigg4ZRIi1ItxIcgEzyW8C9yluE.jpg"
          alt=""
        />
        <span className="cart-count">{props.count}</span>
      </div>
    </div>
  );
};
export default Navbar;
