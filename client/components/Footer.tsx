import styled from "styled-components";

const FooterWrapper = styled.div`
  text-align: center;
  background-color: #fafafa;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <small>Chris Cooper | {new Date().getFullYear()}</small>
    </FooterWrapper>
  );
};

export default Footer;
