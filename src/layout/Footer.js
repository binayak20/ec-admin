import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';

const { Footer } = Layout;
const FooterComponent = () => {
	return (
		<Footer style={{ background: '#2E2D2E' }}>
			<Row justify='space-around'>
				<Col span={8}>
					<div>
						<img src='/img/logo.png' alt='tyest' />
					</div>
				</Col>
				<Col span={8}>
					<div style={{ textAlign: 'center' }}>
						<h2 className='footer-h2'>DOWNLOAD THE APP</h2>
						<img
							className='footer-image'
							src='/img/playStore.jpg'
							alt='tyest'
						/>
						<img className='footer-image' src='/img/appStore.jpg' alt='tyest' />
					</div>
				</Col>
				<Col span={8}>
					<div style={{ textAlign: 'center', float: 'right' }}>
						<h2 className='footer-h2'>CONTACT WITH</h2>
						<img
							className='footer-social'
							alt='tyest'
							src='/img/facebook.png'
						/>
						<img
							className='footer-social'
							src='/img/instagram.png'
							alt='tyest'
						/>
						<img
							className='footer-social'
							src='/img/whatsapp.png'
							alt='tyest'
						/>
					</div>
				</Col>
			</Row>
			<Divider style={{ background: '#BCBCBC' }} />
			<div style={{ textAlign: 'center' }}>
				<h2 className='footer-h2'>Copyright reserved.</h2>
			</div>
		</Footer>
	);
};

export default FooterComponent;
