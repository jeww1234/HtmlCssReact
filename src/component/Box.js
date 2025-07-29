import React from "react";
import './Box.style.css'

const Box = () => {
  return (
    <div>
      <div class="box">Box 1</div>
      <div class="box green none">Box 2</div>
      <div class="box blue">Box 3</div>
      <h3>display:none - 요소 숨기기지만 제거에 가까움 공간을 차지 안 함</h3>
      <div class="box">Box 1</div>
      <div class="box green">Box 2</div>
      <div class="box blue">Box 3</div>
      <h3>visibility: hidden - 요소 숨기기 d-none과 다르게 공간을 차지 함 </h3>
    </div>
  );
};

export default Box;
