import React from "react";
import H1 from "./H1";
import H1_1 from "./H1_1";
import Img from "./Img";
import Audio from "./Audio";
import Table from "./Table";
import Box from "./Box";
import Lorem from "./Lorem";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/Google"><h1>3번쨰 과제</h1></Link>
      <H1 />
      <H1_1 />
      <Img />
      <Audio />
      <Table />
      <Box />
      <Lorem />
    </div>
  );
};

export default Home;
