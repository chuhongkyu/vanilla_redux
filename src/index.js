import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;
// 반환하는 값이 앱의 data가 됨.
// 파라미터로 state, 두번째로 action
// count =0 해주면 default 값 해줄수 있음 undefinded
const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

//데이터를 저장하는곳 (reducer(함수))가진다.
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

// 데이터
console.log(countStore.getState());
