import React, { useEffect } from 'react';
import useStore from '@/store';
import withRouter from '@/routes/withRouter';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logout = () => {
  const { isUserLogout, logout, loginLoading } = useStore();

  useEffect(() => {
    if (!isUserLogout) {
      logout();
    }
  }
    , []);

  if (isUserLogout) {
    return <Navigate to='/login' />
  }

  if (loginLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin w-6 h-6 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Logging out</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Please wait while we securely log you out...</p>
      </div>
    )
  }

  return (
    <></>
  )
}

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);