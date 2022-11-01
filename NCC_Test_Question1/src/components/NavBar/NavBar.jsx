import './NavBar.css';
import menuIcon from '../../assets/menu-icon.svg';

function NavBar() {
  return (
    <div>
      <div className='navbar-mobile'>
        <div className='navbar-mobile__container'>
          <input
            type='checkbox'
            name='menuIconCheckbox'
            id='menuIconCheckbox'
          />
          <label htmlFor='menuIconCheckbox'>
            <img
              className='navbar-mobile__icon'
              src={menuIcon}
              alt='menu icon'
            />
          </label>
          <ul className='navbar-mobile__list'>
            <li className='navbar__item navbar__item--mobile navbar__item--active'>
              Home
            </li>
            <li className='navbar__item navbar__item--mobile'>Services</li>
            <li className='navbar__item navbar__item--mobile'>News</li>
            <li className='navbar__item navbar__item--mobile'>Blog</li>
            <li className='navbar__item navbar__item--mobile'>Contact</li>
          </ul>
        </div>
      </div>
      <ul className='navbar__list'>
        <li className='navbar__item navbar__item--active'>Home</li>
        <li className='navbar__item'>Services</li>
        <li className='navbar__item'>News</li>
        <li className='navbar__item'>Blog</li>
        <li className='navbar__item'>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
