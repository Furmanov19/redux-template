import React from 'react';
import { connect } from 'react-redux';
import Actions from 'src/store/accountPlans/actions';

/* eslint react/prop-types: 0 */
export default WrappedComponent => {
  class withCurrentAccountPlan extends React.Component {
    componentDidMount() {
      const {
        match: {
          params: { accountPlanId },
        },
        checkCurrentAccountPlan,
      } = this.props;
      checkCurrentAccountPlan(accountPlanId);
    }

    componentDidUpdate(prevProps) {
      const {
        match: {
          params: { accountPlanId },
        },
        location,
        checkCurrentAccountPlan,
      } = this.props;
      if (prevProps.location.pathname !== location.pathname) {
        checkCurrentAccountPlan(accountPlanId);
      }
    }

    render() {
      const { currentAccountPlan } = this.props;
      return currentAccountPlan && <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      currentAccountPlan: state.accountPlans.currentAccountPlan,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      checkCurrentAccountPlan: accountPlanId =>
        dispatch(Actions.Creators.checkCurrentAccountPlan(accountPlanId)),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(withCurrentAccountPlan);
};
