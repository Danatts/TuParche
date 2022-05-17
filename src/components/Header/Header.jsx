import { useState } from 'react';
import Sidebar from '../Sidebar/Siderbar';
import toggleicon from '../../assets/icons/tooglemenu.png';
import './Header.styles.scss';

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      { toggle ? <Sidebar toggle={handleToggle} /> : null }
      <div className="header">
        <span
          tabIndex={0}
          role="button"
          onKeyDown={handleToggle}
          onClick={handleToggle}
          className="header__figure"
        >
          <img className="header__icon" src={toggleicon} alt="menu" />
        </span>
        <h1>Tu Parche</h1>
      </div>
    </>
  );
}

export default Header;
