import React from 'react';
import { Card, Input, Form, Row, Col, Divider, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const Item = () => {
	return (
		<Card>
			<Row>
				<Col span={2} />
				<Col span={20}>
					<h2>ADD ITEM INFORMATION</h2>
					<Form
						//	name='customized_form_controls'
						layout='vertical'
						// onFinish={onFinish}
					>
						<Row gutter={12}>
							<Col span={12}>
								<Form.Item name='name' label='Item Name'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='Item Name'
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name='type' label='Store Type'>
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
								<Form.Item name='description' label='Item Description'>
									<TextArea
										placeholder='Write Description'
										showCount
										maxLength={100}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name='stock' label='Stock'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='Stock'
									/>
								</Form.Item>
							</Col>
						</Row>
						<Divider />
						<h2>ITEM PRICE</h2>
						<Row gutter={12}>
							<Col span={12}>
								<Form.Item name='price' label='Price'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='Price'
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name='discountPrice' label='Discount Price'>
									<Input
										style={{ width: '100%' }}
										size='large'
										placeholder='Discount Price'
									/>
								</Form.Item>
							</Col>
						</Row>
						<Divider />
						<h2>ITEM IMAGES</h2>
						<Form.Item
							name='upload'
							label='Upload'
							valuePropName='fileList'
							// getValueFromEvent={normFile}
							//  extra="longgggggggggggggggggggggggggggggggggg"
						>
							<Upload name='logo' action='/upload.do' listType='picture'>
								<Button icon={<UploadOutlined />}>Browse</Button>
							</Upload>
						</Form.Item>
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
								Upload
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

export default Item;
