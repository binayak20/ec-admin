import React, { useState } from 'react';
import { Button, Card, Col, Descriptions, Divider, List, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
//import { category } from '../../const';
const data = [
	{
		id: 1,
		order_no: '1345',
		number: 13,
		price: 1300,
	},
	{
		id: 2,
		order_no: '2345',
		number: 14,
		price: 1400,
	},
	{
		id: 3,
		order_no: '3345',
		number: 15,
		price: 1500,
	},
	{
		id: 4,
		order_no: '4345',
		number: 16,
		price: 1600,
	},
];
const Order = () => {
	const [order, setOrder] = useState(data[0]);
	const [markId, setMarkId] = useState(1);
	const clickCategory = (item) => {
		console.log(item);
		let selectedOrder = data.find((element) => element.id === item);
		console.log(selectedOrder);
		setOrder(selectedOrder);
		setMarkId(selectedOrder.id);
	};
	console.log(markId);
	return (
		<>
			<h2>Order's</h2>
			<div>
				<Row gutter={16}>
					<Col span={8}>
						<Card style={{ marginBottom: 20 }}>
							<List
								itemLayout='horizontal'
								dataSource={data}
								renderItem={(item) => (
									<List.Item
										actions={[
											<a>{item.id === markId && <ArrowRightOutlined />}</a>,
										]}
									>
										<List.Item.Meta
											//avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
											title={
												// eslint-disable-next-line jsx-a11y/anchor-is-valid
												<a
													onClick={() => clickCategory(item.id)}
													style={{ fontSize: 16 }}
												>
													{'Order no. ' + item.order_no}
												</a>
											}
											description={
												<>
													{item.number + ' items'}
													<p
														style={{
															fontWeight: 'bold',
															fontSize: 20,
															color: '#000',
														}}
													>
														Rs. {item.price}/-
													</p>
												</>
											}
										/>
										{/* <p>he</p> */}
									</List.Item>
								)}
							/>
						</Card>
					</Col>
					<Col span={16}>
						<Row>
							<Col span={10}>
								<Card style={{ height: '100%' }}>
									<p style={{ fontSize: 16, color: '#000' }}>
										Order no. {order.order_no}
									</p>
									<p>{order.number} items</p>
									<p
										style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}
									>
										Rs. {order.price}/-
									</p>
									<Divider />
									<Descriptions
										title={
											<div style={{ fontSize: 20, color: '#25AAE1' }}>
												User Information
											</div>
										}
										layout='vertical'
									>
										<Descriptions.Item
											label={
												<span style={{ fontSize: 12, color: '#707070' }}>
													Username
												</span>
											}
											span={3}
										>
											Zhou Maomao
										</Descriptions.Item>
										<Descriptions.Item
											label={
												<span style={{ fontSize: 12, color: '#707070' }}>
													Number
												</span>
											}
											span={3}
										>
											1810000000
										</Descriptions.Item>

										<Descriptions.Item
											label={
												<span style={{ fontSize: 12, color: '#707070' }}>
													Address
												</span>
											}
											span={3}
										>
											Plot No.B-5, Off University RdKDA Scheme No.33, Karachi.
										</Descriptions.Item>
									</Descriptions>
								</Card>
							</Col>

							<Col span={14}>
								<Card style={{ height: '100%' }}>
									<Card style={{ fontSize: 16, marginBottom: 10 }}>
										<Row>
											<Col span={8}>
												<img src='/img/tiger.png' alt='test' />
											</Col>
											<Col span={16}>
												<p>LU Tiger Ticky Pack Box – 24 Pcs</p>
												<p>
													<span>
														<span style={{ color: '#707070' }}>Quantity</span> :
														2
													</span>
													<span style={{ marginLeft: 15 }}>
														<span style={{ color: '#707070' }}>Rs.</span> 120/
													</span>
												</p>
											</Col>
										</Row>
										<Divider style={{ margin: 0 }} />
										<div style={{ marginTop: 10, float: 'right' }}>
											<Button type='default' size='large'>
												Not Available
											</Button>
											<Button
												style={{
													marginLeft: 5,
													backgroundColor: '#25aae1',
													color: '#fff',
												}}
												size='large'
											>
												Done
											</Button>
										</div>
									</Card>
									<Card style={{ fontSize: 16, marginBottom: 10 }}>
										<Row>
											<Col span={8}>
												<img src='/img/tiger.png' alt='test' />
											</Col>
											<Col span={16}>
												<p>LU Tiger Ticky Pack Box – 24 Pcs</p>
												<p>
													<span>
														<span style={{ color: '#707070' }}>Quantity</span> :
														2
													</span>
													<span style={{ marginLeft: 15 }}>
														<span style={{ color: '#707070' }}>Rs.</span> 120/
													</span>
												</p>
											</Col>
										</Row>
										<Divider style={{ margin: 0 }} />
										<div style={{ marginTop: 10, float: 'right' }}>
											<Button type='default' size='large'>
												Not Available
											</Button>
											<Button
												style={{
													marginLeft: 5,
													backgroundColor: '#25aae1',
													color: '#fff',
												}}
												size='large'
											>
												Done
											</Button>
										</div>
									</Card>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Order;
