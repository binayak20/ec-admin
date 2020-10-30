/* eslint-disable react/forbid-prop-types */
import React, { lazy, Suspense } from 'react';
import {
	Route,
	Redirect,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
//import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//import Loader from 'components/utility/loader';
//import { ErrorBoundary } from 'components/utility';
import { ErrorBoundary } from './../utility';
//import { PUBLIC_ROUTE } from './routePaths';
import { Spin } from 'antd';

const Home = lazy(() => import('../container/Home'));
//const NotFound = lazy(() => import('pages/NotFoundPage'));

//const publicRoutes = [
// {
// 	path: PUBLIC_ROUTE.LANDING,
// 	exact: true,
// 	component: lazy(() => import('../pages/Landing')),
// },
// {
// 	path: PUBLIC_ROUTE.SIGN_IN,
// 	component: lazy(() => import('pages/SignInPage')),
// },
// {
// 	path: PUBLIC_ROUTE.USER_ACTIVATE,
// 	component: lazy(() => import('pages/UserActivationPage')),
// },
// {
// 	path: PUBLIC_ROUTE.RESET_PASSWORD,
// 	component: lazy(() => import('pages/PasswordResetPage')),
// },
// {
// 	path: PUBLIC_ROUTE.FORGET_PASSWORD,
// 	exact: true,
// 	component: lazy(() => import('pages/ForgotPasswordPage')),
// },
// {
// 	path: PUBLIC_ROUTE.E_SIGN,
// 	exact: true,
// 	component: lazy(() => import('pages/ESignFormPage')),
// },
// {
// 	path: PUBLIC_ROUTE.E_SIGN_VIEW,
// 	exact: true,
// 	component: lazy(() => import('pages/ESignFormViewPage')),
// },
//];

function PrivateRoute({ children, ...rest }) {
	const isLoggedIn = true;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLoggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

PrivateRoute.propTypes = {
	children: PropTypes.node,
	rest: PropTypes.any,
};

function Routes() {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Spin />}>
				<Router>
					<Switch>
						{/* {publicRoutes.map((route) => (
							<Route key={route.path} path={route.path} exact={route.exact}>
								<route.component />
							</Route>
						))} */}
						<PrivateRoute path='/'>
							<Home />
						</PrivateRoute>
						{/* <Route component={NotFound} /> */}
					</Switch>
				</Router>
			</Suspense>
		</ErrorBoundary>
	);
}

export default Routes;
