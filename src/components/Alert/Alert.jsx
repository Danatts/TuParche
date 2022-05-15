import PropTypes from 'prop-types';

function Alert({ message }) {
  return (
    <p>{message}</p>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
};

Alert.defaultProps = {
  message: '',
};

export default Alert;
