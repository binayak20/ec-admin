/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Col, Layout, Row } from 'antd';
import {
	ApartmentOutlined,
	AppstoreOutlined,
	SettingOutlined,
	UnorderedListOutlined,
	LogoutOutlined,
} from '@ant-design/icons';
const { Header } = Layout;

const AdminSidebar = () => {
	return (
		<div>
			<div className='sidenav'>
				<div style={{ textAlign: 'center' }}>
					<img
						src='/img/storeImage.png'
						style={{ width: '130px', paddingTop: 20 }}
					/>
				</div>
				<div style={{ marginLeft: 10, marginTop: 35 }}>
					<a href='#dashboard'>
						<ApartmentOutlined style={{ marginRight: 5 }} />
						Dashboard
					</a>
					<a href='#store'>
						<AppstoreOutlined style={{ marginRight: 5 }} />
						Store
					</a>
					<a href='#order'>
						<UnorderedListOutlined style={{ marginRight: 5 }} />
						Order
					</a>
					<a href='#setting'>
						<SettingOutlined style={{ marginRight: 5 }} />
						Setting
					</a>
					<a href='#logout'>
						<LogoutOutlined style={{ marginRight: 5 }} />
						Logout
					</a>
					<div
						style={{
							textAlign: 'center',
							position: 'fixed',
							left: '8%',
							bottom: 0,
							marginBottom: 40,
						}}
					>
						<img src='/img/logo.png' style={{ width: '110px' }} />
					</div>
				</div>
			</div>
			<div className='main'>
				<div>
					<Header
						style={{
							boxShadow: '0 8px 6px -8px #d2d2ca',
							backgroundColor: '#ffffff',
						}}
						className='header shadow-long'
					>
						<Row type='flex' align='middle' gutter={[15, 0]}>
							<Col span={8}></Col>
							<Col span={8}>
								<div style={{ textAlign: 'center' }}></div>
							</Col>
							<Col span={8}>
								<div style={{ float: 'right', fontWeight: 'bold' }}>
									<p style={{ fontSize: 20 }}>Basit</p>
								</div>
							</Col>
						</Row>
					</Header>
				</div>
			</div>
		</div>
	);
};

export default AdminSidebar;
