import Sidebar from '../Sidebar/Siderbar';
import useModal from '../../hooks/useModal';
import toggleicon from '../../assets/icons/tooglemenu.png';
import './Header.styles.scss';

function Header() {
  const { show, toggle } = useModal();

  return (
    <>
      { show ? <Sidebar toggle={toggle} /> : null }
      <div className="header">
        <span
          tabIndex={0}
          role="button"
          onKeyDown={toggle}
          onClick={toggle}
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
