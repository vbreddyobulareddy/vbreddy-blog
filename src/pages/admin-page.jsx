import PropTypes from "prop-types";
import ProtectedRoute from "../routes/protected-route";

const AdminPage = (props) => {
  return (
    <>
      <ProtectedRoute isAuthorized={false}>{props.children}</ProtectedRoute>
    </>
  );
};

AdminPage.propTypes = {
  children: PropTypes.node,
};

export default AdminPage;
