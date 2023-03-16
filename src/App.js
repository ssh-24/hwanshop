/*eslint-disable*/
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bgImg from './img/bg.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HwanShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 메인사진 */}
      <div className="main-bg" style={{backgroundImage : 'url('+bgImg+')'}}></div>

      {/* 상품 */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src=''/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src=''/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src=''/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
