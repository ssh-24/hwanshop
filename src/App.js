/*eslint-disable*/
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data';
import Product from './Product';
import Detail from './pages/Detail';
import About from './pages/About';
import Info from './pages/Info';
import Contact from './pages/Contact';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            <Nav.Link onClick={()=> navigate("/about/info")}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 배너 */}
      <div className="main-bg" style={{backgroundImage : 'url('+process.env.PUBLIC_URL + "/banner.png"+')'}}></div>
      
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
                  {/* 더보기 버튼 (AJAX 요청) */}
                  <button className="btn btn-primary" onClick={()=> {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => { console.log(result.data) })
                    .catch(()=> { console.log('REQUEST FAIL') })
                  }}>More</button>
                </>
            }/>
            {/* 상세 페이지 */}
            <Route path="/detail/:seq" element={
              <Detail shoes={shoes}/>
            }/>

            {/* nested routes */}
            <Route path="/about" element={<About/>}>
              <Route path='contact' element={<Contact></Contact>}/>
              <Route path='info' element={<Info></Info>}/>
            </Route>

            {/* Routes안에 명시되지 않은 페이지 주소 예외처리 */}
            <Route path="*" element={<>
              <h1 id='error-header'>404 Not Found</h1>
              <img width='15%' alt='Not Found' src='https://cdn-icons-png.flaticon.com/512/1102/1102029.png?w=826&t=st=1679291144~exp=1679291744~hmac=d365fae0bd25b8f4aebf963e3ac2f5d9a38e7bddcca77c9880fe2d9676f86ce8'></img>
            </>}/>
      </Routes>
 


    </div>
  );
}

export default App;
