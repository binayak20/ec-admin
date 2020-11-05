/* eslint-disable react/forbid-prop-types */
import React, { lazy, Suspense } from 'react';
import {
	Route,
	Redirect,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ErrorBoundary } from './../utility';
import { Spin } from 'antd';

const Home = lazy(() => import('../container/Home'));

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
						<PrivateRoute path='/'>
							<Home />
						</PrivateRoute>
					</Switch>
				</Router>
			</Suspense>
		</ErrorBoundary>
	);
}

export default Routes;
