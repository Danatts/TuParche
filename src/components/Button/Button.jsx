import PropTypes from 'prop-types';
import './Button.styles.scss';

function Button({
  text, type, icon, design, handleEffect,
}) {
  return (
    <button className={design} type={type} onClick={handleEffect}>
      { icon ? (<img className="buttonbrand__icon" src={icon} alt="google" />) : null}
      { text }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  design: PropTypes.string,
  handleEffect: PropTypes.func,
};

Button.defaultProps = {
  text: 'Click',
  type: 'button',
  icon: null,
  design: 'button',
  handleEffect: null,
};

export default Button;
