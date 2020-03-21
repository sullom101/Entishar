// Try to make Header with styled component and then import it instead of our header 
import styled from 'styled-components';

const Footer = styled.header`
    padding: 1rem 0;
    border-top:1px solid rgba(0,40,100,0.12);
`;

export default Footer;