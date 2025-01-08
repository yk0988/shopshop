import './App.css';
import { useState, useEffect } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './db/shop'; // 상품 목록 데이터
import Products from './components/Products'; // 제품 컴포넌트
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // 라우팅 관련
import Detail from './components/Detail'; // 상세 페이지 컴포넌트
import Title from './components/Title'; // 타이틀 컴포넌트
import Title2 from './components/Title2'; // 타이틀2 컴포넌트
import inice from './db/inice'; // 다른 데이터 (예: nice 목록)
import ComNice from './components/ComNice'; // ComNice 컴포넌트 임포트
import Cart from "./components/Cart";
import { Provider } from 'react-redux'; // Redux Provider import
import store from './store'; // store import
import Footer from './components/Footer'; // 푸터 컴포넌트 임포트
import axios from 'axios'


function App() {
  let [shoplist, setShop] = useState(data);
  let navigate = useNavigate(); // navigate 함수 정의
  let [nice, setNice] = useState(inice); // nice 상태
  let [count, setCount] = useState(1);  // count 상태 추가

  useEffect(() => {
    fetch('http://localhost:3000/shop')
    .then(res => res.json())
    .then(data => console.log(data));
  }, []);

  function About() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",  marginTop : "50px"}}>
        <img src="./public/img/slider2.jpg" alt="Cat" style={{ maxWidth: "50%", height: "auto" }} />
        <h4>모자 사세옹</h4>
      </div>
    );
  }
  
  return (
    <div className="App">
      <Navbar style={{ backgroundColor: '#f1c6c0' }} variant="none">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }} style={{ color: '#333333' }}>Nyaong</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }} style={{ color: '#333333' }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Cart') }} style={{ color: '#333333' }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/About') }} style={{ color: '#333333' }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="slider">
            <div className="slider-text">
              <h2>복실복실 친구들</h2>
              <p>생각하는 작은머리 츄르명상</p>
            </div>
          </div>
              <Title /> 

              <div className="container" style={{ marginTop: '20px' }}>
                <div className="row">
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        let copy3 = [...shoplist].sort((a, b) =>
                          a.title > b.title ? 1 : -1
                        );
                        setShop(copy3);
                      }}
                    >
                      이름순 정렬
                    </Button>{' '}
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        let copy4 = [...shoplist].sort((a, b) =>
                          a.price > b.price ? 1 : -1
                        );
                        setShop(copy4);
                      }}
                    >
                      낮은가격순 정렬
                    </Button>{' '}
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        let copy5 = [...shoplist].sort((a, b) =>
                          b.price > a.price ? 1 : -1
                        );
                        setShop(copy5);
                      }}
                    >
                      높은가격순 정렬
                    </Button>{' '}
                    <p></p>
                  </div>

                  {shoplist.map((ele) => {
                    return (
                      <Products
                        shop={ele}
                        key={ele.id}
                      />
                    );
                  })}

                  <div style={{ textAlign: 'center' }}>
                    <Title2 />
                    <Button variant="outline-success" count = {count} onClick={() => {
                 
                        if(count==1){
                          axios.get('https://raw.githubusercontent.com/yk0988/shopshop/main/nice2.json').then((result)=>{
                              let copy10 =[...nice, ...result.data];
                              setNice(copy10);
                              setCount(count + 1);
                      
                        })}else if(count==2){
                          axios.get('https://raw.githubusercontent.com/yk0988/shopshop/main/nice3.json').then((result)=>{
                            let copy11 =[...nice, ...result.data];
                            setNice(copy11);
                            setCount(count + 1);
                            })   
                        }
              
                        if(count===3){
                          alert("더이상 상품이 없습니다.");  
                        }
              }}> + 3개 상품 더 보기 </Button>{' '}   



                  </div>

                  <div className="container" style={{ marginTop: '30px' }}>
                    <div className="row">
                      {nice.map((ele) => {
                        return <ComNice nice={ele} key={ele.id} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shop={shoplist} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
