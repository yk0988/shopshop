import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Products = (props) => {
  let navigate = useNavigate();

  // props.shop에서 필요한 속성 추출
  const { title, price, content, id } = props.shop;

  // id 값에 맞는 이미지 파일 경로 설정
  const imgUrl = `/img/shop${id + 1}.jpg`;  // id에 따라 동적으로 이미지 경로 생성

  return (
    <div className="col-md-4">
      {/* 클릭 시 상세 페이지로 이동 */}
      <Nav.Link
        onClick={() => { navigate('/detail/' + id); }}
        style={{ textDecoration: "none", color: "#000", textAlign: "center" }}
      >
        {/* 동적으로 설정한 이미지 경로 사용 */}
        <img src={imgUrl} width="80%" alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
      </Nav.Link>
    </div>
  );
};

export default Products;
