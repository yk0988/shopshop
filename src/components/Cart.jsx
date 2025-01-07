import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decreaseCount, deleteItem, sortName } from "../store.jsx";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  const smallProdcuctStyle = {
    border: "1px solid #ddd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };

  let textverticalAlign = {
    verticalAlign: "middle",
    textAlign: "center",
  };

  return (
    <>
      <div className="container" style={{ paddingTop: "50px" }}> {/* 위쪽 여백 추가 */}
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <h5 style={{ padding: "50px" }}>
              😻 {state.user.name} {state.user.age}님의 장바구니 🐱
            </h5>

            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                </tr>
              </thead>
              <tbody>
                {state.cart.map((a, i) => (
                  <tr key={i}>
                    <td style={textverticalAlign}>{state.cart[i].id + 1}</td>

                    <td>
                      <Link to={`/detail/${state.cart[i].id}`}>
                        {/* 이미지 경로 수정 */}
                        <img
                          src={`/img/shop${state.cart[i].id + 1}.jpg`} // 동적 이미지 경로 설정
                          style={smallProdcuctStyle}
                        />
                      </Link>
                    </td>
                    <td style={textverticalAlign}>{state.cart[i].name}</td>
                    <td style={textverticalAlign}>{state.cart[i].count}</td>
                    <td style={textverticalAlign}>
                      <Button
                        onClick={() => {
                          dispatch(addCount(state.cart[i].id));
                        }}
                        variant="outline-success"
                        style={{ marginRight: "10px" }}
                      >
                        +
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(decreaseCount(state.cart[i].id));
                        }}
                        variant="outline-warning"
                        style={{ marginRight: "10px" }}
                      >
                        -
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(deleteItem(state.cart[i].id));
                        }}
                        variant="outline-danger"
                      >
                        상품삭제
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Button
              variant="outline-primary"
              onClick={() => {
                dispatch(sortName(state.cart.Name));
              }}
            >
              이름순정렬
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
