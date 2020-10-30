import React from 'react';
import {
	Card,
	Col,
	Input,
	Row,
	Form,
	Divider,
	Button,
	Upload,
	TimePicker,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
const { TextArea } = Input;

const Store = () => {
	return (
		<Card>
			<Row>
				<Col span={2} />
				<Col span={20}>
					<h2>STORE INFORMATION</h2>
					<Form
						//	name='customized_form_controls'
						layout='vertical'
						// onFinish={onFinish}
					>
						<Row gutter={12}>
							<Col span={12}>
								<Row>
									<Col span={10}>
										<img
											style={{ width: 150, border: '1px solid #ddd' }}
											src='/img/shop.png'
											alt='test'
										/>
									</Col>
									<Col span={6}>
										<div
											style={{
												textAlign: 'center',
												width: '50%',
												margin: 0,
											}}
										>
											<Button
												size='large'
												style={{
													marginLeft: 5,
													backgroundColor: '#25AAE1',
													color: '#fff',
												}}
											>
												Change
											</Button>
											<br />
											<Button size='large' type='link'>
												Reset
											</Button>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row gutter={12} style={{ marginTop: 20 }}>
							<Col span={12}>
								<Form.Item name='storeName' label='Store Name'>
									{/* <TextArea
										placeholder='Write Description'
										showCount
										maxLength={100}
									/> */}
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='Store Name'
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name='StoreType' label='Store Type'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='Store Type'
									/>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={12}>
							<Col span={12}>
								<Form.Item name='phone' label='Phone Number'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='0900-78601'
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name='timing' label='Timing'>
									<span>
										<Row gutter={16}>
											<Col span={12}>
												<TimePicker
													defaultValue={moment('12:08:23', 'HH:mm:ss')}
													size='large'
													style={{ width: '100%' }}
												/>
											</Col>
											<Col span={12}>
												<TimePicker
													defaultValue={moment('12:08:23', 'HH:mm:ss')}
													size='large'
													style={{ width: '100%' }}
												/>
											</Col>
										</Row>
									</span>
								</Form.Item>
							</Col>
						</Row>
						<Divider />
						<h2>STORE LOCATION</h2>
						<Row gutter={12}>
							<Col span={12}>
								<Form.Item name='country' label='Country'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='Country'
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name='city' label='City'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='City'
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name='address' label='Address'>
									<TextArea
										placeholder='Write Address'
										// showCount
										// maxLength={100}
									/>
								</Form.Item>
							</Col>
						</Row>
						<Divider />
						<div style={{ float: 'right' }}>
							<Button size='large' type='link'>
								Reset
							</Button>
							<Button
								size='large'
								style={{
									marginLeft: 5,
									backgroundColor: '#25AAE1',
									color: '#fff',
								}}
							>
								Update
							</Button>
						</div>
						{/* <Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						size='large'
						style={{ backgroundColor: '#25AAE1' }}
					>
						Submit
					</Button>
				</Form.Item> */}
					</Form>
				</Col>
				<Col span={2} />
			</Row>
		</Card>
	);
};

export default Store;
