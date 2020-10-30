import styled from 'styled-components';
//style={{ background: '#25AAE1' }}
const MenuBar = styled.div`
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0px 100px 0px 100px;
		overflow: hidden;
		background-color: #25aae1;
	}

	li {
		float: left;
	}
	span {
		margin-right: 5px;
	}
	li a {
		display: block;
		color: white;
		font-size: 17px;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	li a:hover {
		background-color: #0f7aa6;
	}
	.active {
		background-color: #0f7aa6;
	}
`;

export default MenuBar;
