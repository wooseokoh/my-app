import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// 하나의 컴포넌트를 생성 (재사용)

// styled-components의 장점 => js+css 파일 관리!!
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundColor};
`;

const StyledHeadLink = styled(Link)`
    color : red;
`;

const Header = () => {
    return (
        <div>
        <StyledHeaderDiv backgroundColor="blue">
            <ul>
                <li>
                    <StyledHeadLink to="/">홈</StyledHeadLink>
                </li>
                <li>
                    <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
                </li>
            </ul>
        </StyledHeaderDiv>
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">aaaaaaaaaaa</Navbar.Brand>
    <Nav className="me-auto">
        <Link to="/" className="nav-link">홈</Link>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;