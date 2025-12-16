import shoppingImg from "../../assets/shoppingIcon.jpg";
import "./Header.css";
function Header() {
  return (
    <div className="header_wrapper">
      <h1 className="header-text">Shopping List</h1>
      <div className="header-image-wrapper">
        <img src={shoppingImg} alt="header_logo" className="header-img" />
      </div>
    </div>
  );
}

export default Header;
