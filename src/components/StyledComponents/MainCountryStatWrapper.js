import styled from 'styled-components';

const MainCountryStatWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:1fr;
    grid-column-gap:20px;
    @media(max-width:768px){
        grid-template-columns: 1fr;
    }
`

export default MainCountryStatWrapper;