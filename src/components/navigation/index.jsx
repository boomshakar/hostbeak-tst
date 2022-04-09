import { routes } from "./routes";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { SignUp } from "../../pages/SignUp";
import { AddBill } from "../../pages/AddBill";
import { ViewReport } from "../../pages/ViewReport";

const Navigation = () => {
	return (
		<Router>
			<Routes>
				<Route exact path={routes.home} element={<SignUp />} />
				<Route exact path={routes.signUp} element={<SignUp />} />
				<Route exact path={routes.addBill} element={<AddBill />} />
				<Route exact path={routes.viewReport} element={<ViewReport />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Router>
	);
};

export default Navigation;
