import './style/css/index.css'
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { useSelector } from 'react-redux';

import Landing from "./pages/Landing";
import Activate from './pages/Activate';
import Authenticate from './pages/Authenticate';
import Room from './pages/Room';
import Home from './pages/Home';
import { RootState } from './store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          } />
          <Route path="/authenticate" element= {
            <PublicRoute>
              <Authenticate />
            </PublicRoute>
          } />
          <Route path="/activate" element = {
            <ActivationRoute>
              <Activate />
            </ActivationRoute>
          } />
          <Route path="/home" element = {
            <UserRoute>
              <Home/>
            </UserRoute>
          }/>
          <Route path="/room/:id" element = {
            <UserRoute>
              <Room/>
            </UserRoute>
          }/>
          <Route path="/*" element={
            <Navigate to="/" replace />
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  return isAuth ? <Navigate to="/home" replace /> : children;
};

const ActivationRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isAuth } = useSelector((state: RootState) => state.auth);
  if(user?.activated){
    return <Navigate to="/home" replace />;
  } else if (isAuth) {
    return children;
  } else {
    return <Navigate to="/" replace />
  }
};

const UserRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isAuth } = useSelector((state: RootState) => state.auth);
  if(user?.activated){
    return children;
  } else if (isAuth) {
    return <Navigate to="/activate" replace />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default App;
