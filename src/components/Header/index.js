import './index.css'

const Header = () => (
  <>
    <div className="smContainer">
      <nav className="navBarContainerSm">
        <div className="NavBarLogo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="icons"
        />
      </nav>
      <div className="iconsContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav home"
          className="icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav home"
          className="icons"
        />
      </div>
    </div>

    <nav className="navBarContainer">
      <div className="navItemsContainer">
        <div className="NavBarLogo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <ul className="navBarItems">
          <li className="navbarItemsList">Home</li>
          <li className="navbarItemsList">Products</li>
          <li className="navbarItemsList">Cart</li>
          <li className="navbarItemsListButton">
            <button className="logoutButton" type="button">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </>
)
export default Header
