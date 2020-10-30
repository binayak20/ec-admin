import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import React from 'react';
const columns = [
	{
		title: 'ID',
		dataIndex: 'key',
		key: 'key',
	},
	{
		title: 'Category',
		dataIndex: 'name',
		key: 'name',
	},

	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<Space size='middle'>
				<EditOutlined />
				<DeleteOutlined style={{ color: 'red' }} />
			</Space>
		),
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
	},
	{
		key: '2',
		name: 'Jim Green',
	},
	{
		key: '3',
		name: 'Joe Black',
	},
];
const CategoryList = () => {
	return (
		<div style={{ marginTop: 20 }}>
			<Table columns={columns} dataSource={data} />
		</div>
	);
};

export default CategoryList;
