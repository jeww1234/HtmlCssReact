import React from "react";
import "./FeeCard.style.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const FeeCard = () => {
  return (
    <div className="FeeCard-box">
      <Card style={{ width: "18rem", margin: "20px" }}>
        <div className="CardBBox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/2024_Spotify_logo_without_text_%28black%29.svg"
            alt="#"
          />
          <span style={{ color: "#ff8feeff" }}>개인</span>
        </div>
        <Card.Body>
          <p>1개월 이용 시 ₩0</p>
          <Card.Text>
            체험 기간 종료 후 매월 ₩10,900(부가세 별도) 결제
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{height:"150px"}}>
          <ListGroup.Item>Premium 계정 1개</ListGroup.Item>
          <ListGroup.Item>언제든 해지 가능</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button>123</button>
        </Card.Body>
        <h6>
          1개월 이용 시 ₩0, 이후 매월 ₩10,900(부가세 별도)입니다. Premium 구독
          이력이 없는 사용자만 혜택을 이용할 수 있습니다. 약관이 적용됩니다.
        </h6>
      </Card>
      <Card style={{ width: "18rem", margin: "20px" }}>
        <div className="CardBBox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/2024_Spotify_logo_without_text_%28black%29.svg"
            alt="#"
          />
          <span style={{ color: "#a0ff80ff" }}>듀오</span>
        </div>
        <Card.Body>
          <p>매월 ₩16,350(부가세 별도)</p>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{height:"150px"}}>
          <ListGroup.Item>Premium 별도 계정 2개</ListGroup.Item>
          <ListGroup.Item>언제든 해지 가능</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button>123</button>
        </Card.Body>
        <h6>같은 주소지에 거주하는 커플용 요금제입니다. 약관이 적용됩니다.</h6>
      </Card>
      <Card style={{ width: "18rem", margin: "20px" }}>
        <div className="CardBBox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/2024_Spotify_logo_without_text_%28black%29.svg"
            alt="#"
          />
          <span style={{ color: "#f9c944ff" }}>베이직</span>
        </div>
        <Card.Body>
          <p>매월 ₩7,900(부가세 별도)</p>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{height:"150px"}}>
          <ListGroup.Item>Premium 베이직 계정 1개</ListGroup.Item>
          <ListGroup.Item>다운로드 기능을 사용할 수 없음</ListGroup.Item>
          <ListGroup.Item>언제든 해지 가능</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button>123</button>
        </Card.Body>
        <h6>약관이 적용됩니다.</h6>
      </Card>
    </div>
  );
};

export default FeeCard;
