import { Routes, Route, Navigate } from 'react-router-dom';
import { parentsRoutes, publicRoutes } from './routes';
import NoAuthLayout from '@/layout/NoAuthLayout';
import { AuthProtected } from './AuthProtected';
import ParentsLayout from '@/layout/ParentsLayout';
import useStore from '@/store';
import { useEffect } from 'react';
const index = () => {
  const { auth, profile } = useStore();

  const getDefaultScreen = () => {
    if (profile?.role === 'parents' || profile?.type === 'parents') {
      return '/parents/dashboard';
    }
    else if (profile?.role === 'teacher' || profile?.type === 'teacher') {
      return '/teacher/dashboard';
    }
    //return '/login';
  }


  const getStartScreen = () => {

    console.log('auth', auth);
    if (auth === undefined) {
      return '/loading'; // or some loading route
    }
    if (auth.isLoggedOut) {
      return '/login';
    }
    return getDefaultScreen();
  }


  useEffect(() => {
    // const user = initAuth();
    // if (user) { initProfile(); }
  }, []);

  return (
    <Routes>

      {/* Redirect '/' to user specific dashboard if user is logged in */}
      <Route path="/" element={<Navigate to={getDefaultScreen()} />} />

      <Route path='/dashboard' element={<Navigate to={getDefaultScreen()} />} />

      {publicRoutes.map((route, index) => (
        <Route key={index}
          path={route.path}
          element={
            <NoAuthLayout>
              {route.component}
            </NoAuthLayout>
          } />
      ))}

      {parentsRoutes.map((route, index) => (
        <Route key={index}
          path={route.path}
          element={
            <AuthProtected>
              <ParentsLayout>
                {route.component}
              </ParentsLayout>
            </AuthProtected>
          } />
      ))}
    </Routes>
  )
}

export default index;
