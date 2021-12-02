import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding: 2rem 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Things To Do</h1>
    </HeaderWrapper>
  );
};

export default Header;
