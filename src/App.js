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

      {/* 배너 이미지 */}
      <div className="main-bg" style={{backgroundImage : 'url('+bgImg+')'}}></div>
      {/* 원본링크로 삽입하는 방식 */}
      {/* <div className="main-bg" style={{backgroundImage : 'url("https://img.freepik.com/free-vector/banner-with-a-pair-of-realistic-black-sneakers-with-shadow-and-text_548887-94.jpg?w=1800&t=st=1678982266~exp=1678982866~hmac=bdda604f4a26be8ee73498fa077981fa7187483502bdf6a0a9dac0ecdffd97a2")'}}></div> */}

      {/* 상품 */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product1.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product2.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product3.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product4.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product5.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product6.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product7.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product8.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product9.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product10.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product11.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/product12.png'} width='85%' height='70%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
