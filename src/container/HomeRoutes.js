import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { PRIVATE_ROUTE } from '../router/routePaths';

const routes = [
	{
		path: PRIVATE_ROUTE.DASHBOARD,
		component: lazy(() => import('../pages/Dashboard')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.CATEGORY,
		component: lazy(() => import('../pages/Category')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.ITEM,
		component: lazy(() => import('../pages/Item')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.STORE,
		component: lazy(() => import('../pages/Store')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.ORDER,
		component: lazy(() => import('../pages/Order')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.SETTINGS,
		component: lazy(() => import('../pages/Settings')),
		exact: true,
	},
];

export default function AppRouter() {
	return (
		<Suspense fallback={<Spin />}>
			<Switch>
				{routes.map((route, idx) => (
					<Route exact={route.exact} key={idx} path={`/${route.path}`}>
						<route.component />
					</Route>
				))}
				{/* <Route component={NotFound} /> */}
			</Switch>
		</Suspense>
	);
}
