import { Navigate, Route, Routes } from "react-router-dom";

import { AppPath } from "../constants";
import { withRouter } from "../hoc/withRouter";
import { Landing } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppPath.landing} element={<Landing />} />
      <Route path="*" element={<Navigate to={AppPath.landing} replace />} />
    </Routes>
  );
};

export default withRouter(AppRoutes);
