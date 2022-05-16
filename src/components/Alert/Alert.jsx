import PropTypes from 'prop-types';
import './Alert.styles.scss';

function Alert({ message }) {
  return (
    <p className="alert">{message}</p>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
};

Alert.defaultProps = {
  message: '',
};

export default Alert;
