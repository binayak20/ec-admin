import {
	ApartmentOutlined,
	AppstoreOutlined,
	SettingOutlined,
	ShopOutlined,
	UngroupOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons';
const { PRIVATE_ROUTE } = require('../router/routePaths');

const { DASHBOARD, CATEGORY, ITEM, STORE, ORDER, SETTINGS } = PRIVATE_ROUTE;

export const options = [
	{
		key: DASHBOARD,
		label: 'Dashboard',
		LeftIcon: AppstoreOutlined,
		exact: true,
	},
	{
		key: CATEGORY,
		label: 'Add Category',
		LeftIcon: ApartmentOutlined,
	},
	{
		key: ITEM,
		label: 'Add Item',
		LeftIcon: UngroupOutlined,
	},
	{
		key: STORE,
		label: 'Store',
		LeftIcon: ShopOutlined,
	},
	{
		key: ORDER,
		label: 'Order',
		LeftIcon: UnorderedListOutlined,
	},
	{
		key: SETTINGS,
		label: 'Settings',
		LeftIcon: SettingOutlined,
	},
];
