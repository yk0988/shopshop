import React from "react";


const Title = () => {  // 매개변수 없이 화살표 함수로 수정
    let csst1 = {
        marginTop: "70px",
        textAlign: "center"
    };

    

    return (
        <>
            <h3 style={csst1}>MD's Pick</h3>
            <p style={{ textAlign: "center" }}>
                동글동글 두상을 감싸는 스타일링 제품들을 만나보세옹
            </p>
        </>
    );
};

export default Title;