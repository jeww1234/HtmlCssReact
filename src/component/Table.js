import React from "react";
import './Table.style.css'


const table = () => {
  return (
    <div>
      <table className="table-box">
        <tr>
          <th>질문</th>
          <th>답변</th>
        </tr>
        <tr>
          <td>나이</td>
          <td>3</td>
        </tr>
        <tr>
          <td>나이</td>
          <td>3</td>
        </tr>
      </table>
      <p>테이블 쓰는 방법을 모르겠다고??? 요즘 것들은 에잉 ㅉㅉ~</p>
    </div>
  );
};

export default table;
