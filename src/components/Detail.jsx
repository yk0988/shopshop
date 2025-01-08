import React, { useState } from 'react';
import { Button, Modal, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addItem } from "../store"; // store에서 addItem import

function Detail({shop}) {
  const { id } = useParams(); // URL에서 id를 가져옵니다.
  // id는 문자열로 반환되므로 숫자로 변환
  const productId = Number(id);

  const selectedProduct = shop.find((product) => product.id === productId);

  const dispatch = useDispatch();

  // 탭 상태
  let [tap, setTap] = useState(0);

  // 모달 상태 관리
  const [showModal, setShowModal] = useState(false); // 모달을 보여줄지 말지를 결정

  // 상품이 없을 경우 처리
  if (!selectedProduct) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  // 주문하기 버튼 클릭 시 처리
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: selectedProduct.id,
        imgurl: selectedProduct.imgurl,  // 이미지 URL 경로 수정 (imgUrl에서 imgurl로 변경)
        title: selectedProduct.title,
        count: 1,
      })
    );

    // 상품이 담겼다는 메시지를 모달로 표시
    setShowModal(true); // 모달을 열기 위해 상태 변경
  };

  // TabContent 컴포넌트 추가
  function TabContent({ tap }) {
    if (tap === 0) {
      return <div><img src="" style={{ width: '100px', height: 'auto' }} /></div>;
    } else if (tap === 1) {
      return <div><img src="" style={{ width: '100px', height: 'auto' }} /></div>;
    } else if (tap === 2) {
      return <div><img src="" style={{ width: '100px', height: 'auto' }} /></div>;
    }
    return null;
  }

  return (
<div className="container" style={{ marginTop: '100px' }}>
      <div className="row">
        <div className="col-md-6">
          {/* 상품 이미지 */}
          <img
            src={`/img/shop${selectedProduct.id + 1}.jpg`} // 이미지 경로 수정
            alt={selectedProduct.name}
            width="80%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{selectedProduct.name}</h4>
          {/* 상품명, 설명, 가격을 조건부로 렌더링 */}
          <p style={{ fontSize: '35px' }}>
            {selectedProduct.title ? selectedProduct.title : "상품명이 없습니다."}
          </p>
          <p>💰{selectedProduct.price ? `${selectedProduct.price} 원` : "가격 정보가 없습니다."}</p>

          <Button
            variant="primary"
            onClick={handleAddToCart} // 주문하기 클릭 시 이벤트 처리
            style={{ marginRight: "10px" }}
          >
            주문하기
          </Button>

          {/* 주문상품 확인 페이지로 이동하는 버튼 */}
          <Link to="/cart">
            <Button variant="outline-success">장바구니</Button>
          </Link>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0" style={{ marginTop: '100px' }}>
        <Nav.Item>
          <Nav.Link onClick={() => setTap(0)} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTap(1)} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTap(2)} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* TabContent 표시 */}
      <TabContent tap={tap} />
      <img src="" style={{ width: '100px', height: 'auto' }} />

      {/* 모달 창 */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>상품이 담겼습니다!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Detail;
