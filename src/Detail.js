import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log("안녕");
    return () => {
      clearTimeout(타이머);
    };
  }, [alert]);

  let { id } = useParams();
  let history = useHistory(id);
  let findId = props.shoes.find((items) => {
    return items.id == id;
  });
  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
        {/* <제목 색상="red">상세페이지</제목>
        <제목 색상="blue">상세페이지</제목> */}
      </박스>

      {inputData}
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />

      {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="" />
        </div>
        {/*  */}
        {/* React Router 3 : URL 파라미터로 상사페이지 100개 만들기 */}
        {/*  */}
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>{findId.price}원</p>
          <Info 재고={props.재고}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고변경([9, 10, 11]);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return <p>재고: {props.재고[0]}</p>;
}

export default Detail;
