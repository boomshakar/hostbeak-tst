import { routes } from "./routes";
import { Redirect, Switch, Route, useLocation } from "react-router-dom";

import SignUp from "../../pages/SignUp";
import AddBill from "../../pages/AddBill";
import ViewReport from "../../pages/ViewReport";
import Layout from "../Layout";

const Navigation = () => {
	const { pathname } = useLocation();
	const HOME = pathname === "/";
	if (HOME) {
		return (
			<Switch>
				<Route exact path={routes.home} component={SignUp} />
				<Route exact path={routes.signUp} component={SignUp} />
				<Redirect to={routes.signUp} />
			</Switch>
		);
	}
	return (
		<Layout>
			<Switch>
				<Route path={routes.addBill} component={AddBill} />
				<Route path={routes.viewReport} component={ViewReport} />
				<Redirect from={routes.home} to={routes.signUp} />
				<Redirect to={routes.signUp} />
			</Switch>
		</Layout>
	);
};

export default Navigation;
