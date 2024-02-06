import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = (props) => {
  const { isPublic, isAuthorized } = props;
  return (
    <>{isPublic || isAuthorized ? <Outlet /> : <Navigate to="/login" />}</>
  );
};

ProtectedRoute.propTypes = {
  isPublic: PropTypes.boolean,
  isAuthorized: PropTypes.boolean,
};

export default ProtectedRoute;
