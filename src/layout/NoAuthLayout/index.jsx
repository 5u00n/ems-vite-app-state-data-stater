import React from 'react';
import PropTypes from 'prop-types';
import withRouter from "@/routes/withRouter";


const NoAuthLayout = (props) => {
  return (
    <React.Fragment>
        {props.children}
    </React.Fragment>
  )
}

NoAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
};

export default withRouter(NoAuthLayout);