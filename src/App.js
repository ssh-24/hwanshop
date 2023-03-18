/*eslint-disable*/
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import bgImg from './img/bg.png';
import data from './data';
import Product from './Product';
import Detail from './pages/Detail';
import About from './pages/About';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  const [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동 함수

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">HwanShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={()=> navigate("/cart")}>Cart</Nav.Link>
            <Nav.Link onClick={()=> navigate("/about")}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 배너 */}
      <div className="main-bg" style={{backgroundImage : 'url('+bgImg+')'}}></div>
      {/* 이미지 원본 링크로 삽입하는 방식 */}
      {/* <div className="main-bg" style={{backgroundImage : 'url("https://img.freepik.com/free-vector/banner-with-a-pair-of-realistic-black-sneakers-with-shadow-and-text_548887-94.jpg?w=1800&t=st=1678982266~exp=1678982866~hmac=bdda604f4a26be8ee73498fa077981fa7187483502bdf6a0a9dac0ecdffd97a2")'}}></div> */}

      <Routes>
            <Route path="/" element={
                <>
                  {/* 상품 리스트 (메인 페이지일 때만 보여주기)*/}
                  <div className="container">
                    <div className="row">
                      {
                        shoes.map((a,i) => {
                          return (<Product key = {i} seq = {i} data = {a}/>)
                        })
                      }
                    </div>
                  </div>
                </>
            }/>
            {/* 상세 페이지 */}
            <Route path="/detail/:seq" element={
              <Detail shoes={shoes}/>
            }/>

            {/* nested routes */}
            <Route path="/about" element={<About/>}>
              <Route path='contact' element={<div>연락처</div>}/>
              <Route path='location' element={<div>위치</div>}/>
            </Route>

            {/* Routes안에 명시되지 않은 페이지 주소 예외처리 */}
            <Route path="*" element={<>
              <h1>404 Not Found</h1>
              <img src=''></img>
            </>}/>
      </Routes>
 


    </div>
  );
}

export default App;
