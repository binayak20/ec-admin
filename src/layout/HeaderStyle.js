import styled from 'styled-components';

const TopbarWrapper = styled.div`
	.header {
		background-color: #ffffff;
		z-index: 1000;
		position: fixed;
		width: 100%;
		height: 5rem;
		padding: 0 50px 0 50px;
		box-shadow: 0 8px 6px -8px #d2d2ca;

		&.collapsed {
		}

		.ant-col {
			/* display: inherit; */
		}
		&-right {
			.ant-col {
				display: inherit;
			}
		}
	}
`;

export default TopbarWrapper;
