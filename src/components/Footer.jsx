import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f1c6c0",  // 파스텔 핑크 색상
    color: "black",  // 진한 보라색 텍스트
    textAlign: "center",  // 텍스트 가운데 정렬
    padding: "30px 0px",  // 위아래 여백 추가
    marginTop: "80px",  // 상단 여백 추가
    fontFamily: "'Roboto', sans-serif",  // 글꼴 설정
    fontSize: "16px",  // 폰트 크기 설정
  };

  const iconStyle = {
    fontSize: "18px",
    margin: "0 10px",  // 아이콘 간 간격 설정
    color: "#4a148c",  // 아이콘 색상
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Nyaong, Inc. All Rights Reserved</p>
      <div>
        {/* 소셜 미디어 아이콘들 */}
        <i className="fa fa-facebook" style={iconStyle}></i>
        <i className="fa fa-twitter" style={iconStyle}></i>
        <i className="fa fa-instagram" style={iconStyle}></i>
        <i className="fa fa-youtube" style={iconStyle}></i>
      </div>
    </footer>
  );
};

export default Footer;
