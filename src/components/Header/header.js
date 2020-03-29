import React from "react"
import Head from "../StyledComponents/header"
import { Container, Col, Row, Nav } from "reactstrap"
import CornaIcon from './cornaIcon.png'
import DoctorsIcon from './DoctorsIcon.svg'
import  styled from 'styled-components'
import MaterialIcon , {colorPalette}  from 'material-icons-react';

const SearchBox= styled.div `
    background: white;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
    width: 50%;
    margin-top: 13%;
    @media (max-width: 768px) {
      margin-left : 20%;
      margin-bottom: 10%;
    }
`
const SearchInput = styled.input`
  border:none;
  background: none;
  outline:none;
  padding: 0;
  color: black;
  font-size: 16px;
  line-height: 40px;
  margin-bottom: 50%;
  position: relative;
  top: -37%;
  left: 13%;

  `
const SearchButton = styled.button `
border: none;
background: none;
`
const ShareIcon = styled.button `
 background: black;
 border-radius: 40px;
 border: none;
 @media (max-width: 768px) { 
   margin-top: 1%;
 }
`
const NavCard = styled.div`
display: flex;
justify-content: center;
padding: 10%;
border-radius: 40px;
color: red;
{
    a:hover {
      text-decoration: none;
      color:#950202;
    };
    i:hover {
     color:#950202;
    }
}
@media (max-width: 768px) {
  a:hover {
    text-decoration: none;
    color:#950202;
  };
  i:hover {
   color:#950202;
  };
  margin-top: 10%;
 
}
`

const Header = () => 
 {
    return (
      <div> 
    <Head>
  <Container> 
   <Col lg="12" style={{color:'white'}}>
    
      <h1>
      C <img className='mt-1' style={{height:'56.54px', width:'56.54px'}} src={CornaIcon} /> vid-19 Outbreak Live Updates
      </h1>

   </Col>
  </Container>
 <Container>
   <Row> 

   <Col md="6">
     <br />
   <SearchBox>
     <SearchButton> 
   <MaterialIcon icon="search" >   
 </MaterialIcon >
 </SearchButton>
<SearchInput type="text" /> 
</SearchBox>
</Col>
 <Col md='6'>
    <img src={DoctorsIcon} />
 </Col>

  </Row>
 
 </Container>
  </Head>
 
<Container>

<Col md="12"> 
<Row> 
<Col md="1">
<ShareIcon> 
<MaterialIcon icon="notifications"  color='#fafafa'/> </ShareIcon>
</Col>

<Col md="1"> 
<ShareIcon> 
<MaterialIcon icon="share" color='#fafafa' />
</ShareIcon>
</Col>
</Row>
</Col>
 </Container>
 <br />

 <Container>
   <Col md="12">
     <Row>
   <Col md="6">
  <NavCard style={{background: '#F2CC85'}} >
  <a style={{ textDecoration: "none;"}} href="#">
   <MaterialIcon icon="home" size='large' />
   <h4 style={{fontSize:'15px', textAlign:"center"}}> Home </h4>
 </a>
  </NavCard>
   </Col>

<Col md="6">
<NavCard style={{background: '#E5E5E5'}} >
 
 <a style={{ textDecoration: "none;"}} href="#">
 
   <MaterialIcon icon="public" size='large' / >
   <h4 style={{fontSize:'15px', textAlign:"center"}}> World </h4>
 </a>
  </NavCard>
</Col>
</Row>
</Col>
</Container>
 </div>
)
}





export default Header
