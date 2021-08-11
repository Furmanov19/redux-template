import React from 'react';
import PropTypes from 'prop-types';

const Authorizor = ({
  isSalesOp,
  role,
  forSalesOps,
  permissions,
  component: Component,
  ...props
}) => {
  if (isSalesOp) return <Component {...props} />;
  if (forSalesOps && !isSalesOp) return null;
  if (permissions !== [] && role && !permissions.includes(role)) return null;
  return <Component {...props} />;
};

Authorizor.propTypes = {
  isSalesOp: PropTypes.bool.isRequired,
  forSalesOps: PropTypes.bool,
  role: PropTypes.string,
  permissions: PropTypes.array,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.node])
    .isRequired,
};

Authorizor.defaultProps = {
  forSalesOps: false,
  role: null,
  permissions: [],
};

export default Authorizor;
