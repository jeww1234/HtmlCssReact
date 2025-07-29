import React from "react";
import './Lorem.style.css'

const Lorem = () => {
  return (
    <div class="challenge2">
      <h1>HTML Tutorial</h1>
      <p class="sub-header">
        HTML is the standard markup language for Web pages. With HTML you can
        create your own Website. HTML is easy to learn - You will enjoy it!{" "}
      </p>
      <p>
        The HyperText Markup Language, or HTML is the standard markup language
        for documents designed to be displayed in a web browser. It can be
        assisted by technologies such as Cascading Style Sheets (CSS) and
        scripting languages such as JavaScript. ... HTML elements are the
        building blocks of HTML pages.{" "}
      </p>
      <h1>CSS Tutorial</h1>
      <p class="sub-header">
        CSS is the language we use to style an HTML document.CSS describes how
        HTML elements should be displayed.This tutorial will teach you CSS from
        basic to advanced.
      </p>
      <p>
        Cascading Style Sheets (CSS) is a style sheet language used for
        describing the presentation of a document written in a markup language
        such as HTML. CSS is a cornerstone technology of the World Wide Web,
        alongside HTML and JavaScript.{" "}
      </p>

      <h1>CSS Tutorial</h1>
      <p class="sub-header">
        CSS is the language we use to style an HTML document.CSS describes how
        HTML elements should be displayed.This tutorial will teach you CSS from
        basic to advanced.
      </p>
      <p>
        Cascading Style Sheets (CSS) is a style sheet language used for
        describing the presentation of a document written in a markup language
        such as HTML. CSS is a cornerstone technology of the World Wide Web,
        alongside HTML and JavaScript.{" "}
      </p>
      

      <h2>
        first-child 이든 nth-child든 단순히 부모의 몇 번째 자식 요소를 선택하는거다
      </h2>
      <h2>
        2번째 h1 태그를 선택하고 싶다면 .challenge2 h1:nth-of-type(2)을 사용
      </h2>
      <h2>
        .challenge2 h1:nth-child(2)는 challenge2의 2번째 자식이 h1일때 동작하겠다는 의미
      </h2>
    </div>
  );
};

export default Lorem;


