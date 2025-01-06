import { configureStore, createSlice } from '@reduxjs/toolkit';

// cart slice 정의
let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, imgurl: 'shoes1.jpg', name: 'White and Black', count: 2 },
    { id: 1, imgurl: 'shoes2.jpg', name: 'Red Knit', count: 1 },
    { id: 2, imgurl: 'shoes3.jpg', name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => a.id === action.payload);
      if (num !== -1) {
        state[num].count++;
      }
    },
    decreaseCount(state, action) {
      let num = state.findIndex((a) => a.id === action.payload);
      if (num !== -1 && state[num].count > 0) {
        state[num].count--;
      } else if (num !== -1 && state[num].count === 0) {
        alert("상품이 더 이상 없습니다.");
      }
    },
    addItem(state, action) {
      let num = state.findIndex((a) => a.id === action.payload.id);
      if (num !== -1) {
        state[num].count++;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      let num = state.findIndex((a) => a.id === action.payload);
      if (num !== -1) {
        state.splice(num, 1);
      }
    },
    sortName(state) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1)); // name을 기준으로 정렬
    },
  },
});

// user slice 정의 (예시로 추가)
let user = createSlice({
  name: 'user',
  initialState: { name: '츄르28호'}, // 예시로 user 객체 초기화
  reducers: {
    updateUser(state, action) {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
});

export let { addCount, decreaseCount, addItem, deleteItem, sortName } = cart.actions;
export let { updateUser } = user.actions;

// store 설정
export default configureStore({
  reducer: {
    user: user.reducer, // user reducer 추가
    cart: cart.reducer, // cart reducer 추가
  },
});
