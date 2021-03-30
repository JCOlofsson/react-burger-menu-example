import { slide as Menu } from 'react-burger-menu'
import { ReactComponent as IconBtnHamburger } from './img/btn-hamburger.svg'
import './Header.sass'

const Header = (props) => {
    const showSettings = (event) => {
        window.alert('Showing setting')
    }
    
    return (
      <header>
        <div className="row">
          <div className="col d-flex justify-content-start">
            <h1>Rubrik</h1>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <Menu right customBurgerIcon={<IconBtnHamburger/>} >
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ ()=>showSettings() } className="menu-item--small" href="/">Settings</a>
            </Menu>
          </div>
        </div>
      </header>
      )
}

export default Header