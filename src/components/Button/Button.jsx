import PropTypes from 'prop-types';
import './Button.styles.scss';

function Button({
  text, type, icon, design, handleEffect,
}) {
  return (
    <button className={`button button--${design}`} type={type} onClick={handleEffect}>
      { icon ? (<img className="button__icon" src={icon} alt="brand" />) : null}
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
  design: 'default',
  handleEffect: null,
};

export default Button;
