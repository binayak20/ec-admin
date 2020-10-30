import { Button, Card, Input, Form } from 'antd';

import React from 'react';
import CategoryList from './CategoryList';

const Category = () => {
	return (
		<Card hoverable>
			<h2>ADD CATEGORY</h2>
			<Form
				name='customized_form_controls'
				layout='inline'
				// onFinish={onFinish}
			>
				<Form.Item name='category' label='Category'>
					<Input
						style={{ width: '100%' }}
						size='large'
						placeholder='Add Category'
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						size='large'
						style={{ backgroundColor: '#25AAE1' }}
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
			<CategoryList />
		</Card>
	);
};

export default Category;
