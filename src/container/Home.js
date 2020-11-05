import React, { useState } from 'react';
import { Col, Layout, Row } from 'antd';
import HeaderComponent from '../layout/Header';
import FooterComponent from '../layout/Footer';
import AppRouter from './HomeRoutes';
import MenuBar from './MenuBar';
import { LogoutOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { options } from './Options';
import AdminSidebar from './AdminSidebar';

const { Content } = Layout;
const styles = {
	layout: { flexDirection: 'row', overflowX: 'hidden' },
	content: {
		padding: '80px 0px 0',
		flexShrink: '0',
		position: 'relative',
		background: '#fff',
	},
};

export default function Home() {
	let { pathname } = useLocation();
	console.log(pathname);

	return (
		<>
			{pathname === '/sidebar' ? (
				<AdminSidebar />
			) : (
				<Layout style={{ height: '100vh' }}>
					<HeaderComponent />
					<Layout style={styles.layout}>
						<Layout
							className='isoContentMainLayout'
							style={{
								height: '100vh',
							}}
						>
							<Content className='isomorphicContent' style={styles.content}>
								<MenuBar>
									<ul>
										{options.map((singleOption) => (
											<li key={singleOption.key}>
												<Link
													className={
														pathname === '/' + singleOption.key ? 'active' : ''
													}
													to={singleOption.key}
												>
													<singleOption.LeftIcon />
													{singleOption.label}
												</Link>
											</li>
										))}
										<li>
											<Link to='/logout'>
												<LogoutOutlined />
												Logout
											</Link>
										</li>
									</ul>
								</MenuBar>
								<Row>
									<Col span={2} />
									<Col span={20} style={{ paddingTop: 20 }}>
										<AppRouter />
									</Col>
									<Col span={2} />
								</Row>
							</Content>
							<FooterComponent />
						</Layout>
					</Layout>
				</Layout>
			)}
		</>
	);
}
