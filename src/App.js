/*eslint-disable*/
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
// import data from './data';
import data from './data_init';
import Product from './Product';
import Detail from './pages/Detail';
import About from './pages/About';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {

  const [shoes, setShoes] = useState(data);
  const [loading, setLoading] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [count, setCount] = useState(1);

  let navigate = useNavigate(); // 페이지 이동 함수


  useEffect(()=>{
    if (count>=3) {
      setNoMoreData(true)
    }
  },[count])


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
                          return (<Product key = {i} seq = {Number(a.id)} data = {a}/>)
                        })
                      }
                    </div>

                    {/* 로딩중 모달 */}
                    {
                        loading == true ? 
                        <div className="alert alert-info mt-2">
                            Getting data...
                        </div>
                        : null
                    }
                  </div>

                  {/* 더보기 버튼 */}
                  {
                    noMoreData == false ?
                    <>
                      <button className="btn btn-primary mt-3 mb-2" onClick={()=> {
                        setLoading(true)

                        // AJAX 요청
                        axios.get('https://my-json-server.typicode.com/ssh-24/My-JSON-Server/db')
                        .then((result) => {
                          let temp;
                          let rcvData;
                          if (count === 1) { rcvData = [...result.data.shoes1]}
                          if (count === 2) { rcvData = [...result.data.shoes2]}
                          temp = [...shoes, ...rcvData]

                          console.log("기존 state", shoes)
                          console.log("받아온 데이터", rcvData)
                          console.log("결과", temp)
                          console.log("================")

                          //state 변경
                          setShoes(temp)
                          setLoading(false)
                          setCount(count+1) //버튼 카운트 증가
                        })
                        .catch(()=> {
                          setLoading(false)
                          console.log('REQUEST FAIL')
                        })
                      }}>More</button>
                    </>
                    : null
                  }
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

            <Route path='/cart' element={<Cart/>}/>

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
