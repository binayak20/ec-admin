import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Select, Button, Dropdown } from 'antd';
import TopbarWrapper from './HeaderStyle';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
//import LandingPage from '../pages/Landing';

const { Option } = Select;

const { Header } = Layout;

const HeaderComponent = () => {
	// const [isLogin, setLogin] = useState(false);
	// const login = () => {
	// 	localStorage.setItem('isLogin', true);
	// 	window.location.reload();
	// };
	// useEffect(() => {
	// 	setLogin(localStorage.getItem('isLogin') || false);
	// }, []);
	// console.log(isLogin);
	return (
		<TopbarWrapper>
			<Header className='header shadow-long'>
				<Row type='flex' align='middle' gutter={[15, 0]}>
					<Col span={8}>
						{/* <Select defaultValue='Karachi' style={{ width: 120 }}>
							<Option value='Karachi'>Karachi</Option>
						</Select> */}
						<img style={{ width: 120 }} src='/img/shop.png' alt='test' />
					</Col>
					<Col span={8}>
						<div style={{ textAlign: 'center' }}>
							{/* <img
								style={{ width: 150 }}
								src='/img/logo-green.png'
								alt='test'
							/> */}
						</div>
					</Col>
					<Col span={8}>
						<div style={{ float: 'right', fontWeight: 'bold' }}>
							<BellOutlined style={{ fontSize: 20 }} />
							<span style={{ marginLeft: 10 }}>Basit</span>
						</div>
					</Col>
				</Row>
			</Header>
		</TopbarWrapper>
	);
};

export default HeaderComponent;
