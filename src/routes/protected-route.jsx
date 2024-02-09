import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = (props) => {
  const { isAuthorized } = props;
  return <>{isAuthorized ? props.children : <Navigate to="/admin/auth" />}</>;
};

ProtectedRoute.propTypes = {
  isAuthorized: PropTypes.boolean,
  children: PropTypes.node,
};

export default ProtectedRoute;
