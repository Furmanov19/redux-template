import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'src/store/errors/actions';
import Message from 'components/atoms/Message';

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => {
  return {
    clearError: page => {
      dispatch(Actions.Creators.clearErrorMessage(page));
    },
  };
};

export default (page, left = false) => {
  return WrappedComponent => {
    const componentsErrorHOC = ({ errors, clearError, ...props }) => {
      const error = errors[page] || '';
      return (
        <>
          {error ? (
            <Message
              text={error}
              timeout={5000}
              type="error"
              left={left}
              onClose={() => clearError(page)}
            />
          ) : null}
          <WrappedComponent {...props} />
        </>
      );
    };

    componentsErrorHOC.propTypes = {
      errors: PropTypes.object,
      clearError: PropTypes.func.isRequired,
    };

    componentsErrorHOC.defaultProps = {
      errors: {},
    };

    return connect(mapStateToProps, mapDispatchToProps)(componentsErrorHOC);
  };
};
