const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left"></div>
      <div className="nav-right">
        <img
          className="cart-logo"
          src="https://as1.ftcdn.net/v2/jpg/00/73/10/64/1000_F_73106428_Q91LNUigg4ZRIi1ItxIcgEzyW8C9yluE.jpg"
          alt=""
        />
        <span className="cart-count">3</span>
      </div>
    </div>
  );
};
export default Navbar;
