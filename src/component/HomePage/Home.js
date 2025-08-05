import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useRef, useEffect } from "react";
import "./Home.style.css";

const Home = () => {
  const textBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);
      if (scrollY >= 1300 || scrollY <= 300) {
        textBoxRef.current.style.animation = "reSlide 2s ease-in-out forwards";
      } else if (scrollY > 300) {
        textBoxRef.current.style.animation = "slide 2s ease-in-out forwards";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Home">
      <Navbar expand="lg" className="bg-body-tertiary fixed-navbar">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "#2C3E50", fontWeight: "bolder" }}
          >
            K-pop Coffee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="fw-bolder">
                Coffee
              </Nav.Link>
              <Nav.Link href="#home" className="fw-bolder">
                Menu
              </Nav.Link>
              <Nav.Link href="#link" className="fw-bolder">
                공간
              </Nav.Link>
              <Nav.Link href="#link" className="fw-bolder">
                히스토리
              </Nav.Link>
              <Nav.Link href="#link" className="fw-bolder">
                이벤트
              </Nav.Link>
              <Nav.Link href="#link" className="fw-bolder">
                가맹점 문의
              </Nav.Link>
            </Nav>

            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder=""
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Search</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            src="https://newsprime.co.kr/data/photos/cdn/20250831/art_698587_1754021123.png"
            className="d-block w-100"
            alt="#"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAxODAxMTVfMjMz/MDAxNTE1OTgzNjYzNDY5._ZFFrI0-MJD836zo7gL7SUQkkcu9UlI30QfBDzTqVZUg.RgNqLNLW8_nC6EpTIcrbXPZ1HDPGk_tHi3zHY6WFfi8g.PNG.thermos_kr/%EC%8D%A8%EB%AA%A8%EC%8A%A4_%EC%84%9C%EC%9A%B8_%EC%B9%B4%ED%8E%98%EA%B1%B0%EB%A6%AC_01_%ED%83%80%EC%9D%B4%ED%8B%80.png?type=w800"
            className="d-block w-100"
            alt="#"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyNTAzMDhfMjc5/MDAxNzQxNDQ0OTMwODg3.tHoCnkU75KFR9xMfzI-btO66PEOvcQKzX20Iw-EnAYUg.xKECcNmBFipB6iQxO1QZn2YnCnzkjcbQOqoCWV07ZkIg.JPEG/001.jpg?type=w800"
            className="d-block w-100"
            alt="#"
          />
        </Carousel.Item>
      </Carousel>

      <section className="sectionSlide">
        <div ref={textBoxRef}>
          <h1>PICK</h1>
          <h2>YOUR</h2>
          <h3>FAVORITE</h3>
          <h4>다양한 메뉴를</h4>
          <h4>K-Coffee에서 즐겨보세요</h4>
          <h5>
            다양한 메뉴를 스타벅스에서 즐겨보세요. K-Coffee만의 특별함을 경험할
            수 있는 최상의 선택 음료, K-Coffee 커피와 완벽한 어울림을 자랑하는
            푸드, 다양한 시도와 디자인으로 가치를 더하는 상품, 소중한 사람에게
            마음을 전하는 가장 좋은 방법 스타벅스 카드
          </h5>
          <button>자세히 보기</button>
        </div>
        <img
          className="photo"
          src="https://image.istarbucks.co.kr/upload/common/img/main/2025/2025_summer2_pick_img_250715.png"
          alt="#"
        />
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#2C3E50", color: "#F2DCDC" }}
      >
        <div style={{ fontSize: "5vw" }}>K-pop 정신</div>
        <div style={{ fontSize: "5vw" }}>
          우리는 무대를 꿈꾸고, 그 꿈을 마신다.
        </div>
        <div style={{ fontSize: "4vw" }}>
          열정은 리듬이 되고, 감동은 커피 향이 된다.
        </div>
        <Button style={{ fontSize: "2.5vw"}} className="m-3">
          한 잔의 K-Coffee로 오늘을 특별하게
        </Button>
      </div>

      <Container>
        <Row>
          <Col md={4} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://img1.daumcdn.net/thumb/R1024x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ftable_attach%2F1008381234%2F1110b3c708c83aa99d52e037c0dac397fdd9463d&scode=cafe"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  <p style={{ fontWeight: "bolder" }}>케이팝 데몬 헌터스</p>
                </Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.weeklyfocustx.com/news/photo/202410/853_579_1727967609.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  <p style={{ fontWeight: "bolder" }}>오징어 게임2</p>
                </Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.umnews.org/-/media/umc-media/2024/09/06/13/17/parasite-poster2.jpg?mw=1200&hash=A2A8828CD39542D054F50F3C847DBB17"
              />
              <Card.Body className="text-center">
                <Card.Title>
                  <p style={{ fontWeight: "bolder" }}>기생충</p>
                </Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Row className="local p-0 m-0">
        <Col lg={7} md={12} className="imgBox">
          <div>
            <img
              src="https://www.ygnews.co.kr/news/photo/202107/304085_24722_233.jpg"
              alt="#"
            />
          </div>
        </Col>
        <Col lg={5} md={12} className="text-left fw-bolder">
        <div className="textBox">
          <div>
            <p>전국 어디에서나 K-Coffee와 함께!</p>
            <p>K-coffee와 함께 커피 한잔의 여유를 가져보세요</p>
          </div>
          <div>
            <p>나의 취향이 머무는 곳, K-Coffee 리저브 매장</p>
            <p>더욱 편리하게 K-Coffee를 만나보는 드라이브 스루 매장</p>
            <p>함께해서 더 따뜻한 지역사회 소통 공간, 커뮤니티 스토어까지</p>
            <p>다양한 K-Coffee 매장이 여러분을 기다립니다.</p>
          </div>
          <button>매장 찾기</button>
          </div>
        </Col>
      </Row>

      <footer>
        <Container>
          <div className="pb-4 pt-4 first-line">K-Coffee</div>
          <div className="second-line">
            <Row className="pb-4 pt-4 text-center">
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">United States</a>
              </Col>
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">Email Sign-up</a>
              </Col>
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">Contact Us</a>
              </Col>
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">Follow Us</a>
              </Col>
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">Callifonia Transparency</a>
              </Col>
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">Legal Notice</a>
              </Col>
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">Careers</a>
              </Col>
              <Col className="d-flex align-items-center">
                <a href="https://www.naver.com/">Sitemap</a>
              </Col>
            </Row>
          </div>
          <div className="text-center p-2">Ship to : Korea</div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
