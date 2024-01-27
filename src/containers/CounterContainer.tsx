// connect 함수를 사용한 컨테이너 컴포넌트 방식

import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { CounterProps } from 'model/Counter';
import { Dispatch } from "redux";
import {  } from '../modules/counter';
import { RootState } from "modules";


const mapStateToProps = (state: RootState) => ({
    number: state.counter.number,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    // 임시 함수
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
})

const CounterContainer = ({ number, increase, decrease }: CounterProps) => {
    return (
        <Counter number={number} increase={increase} decrease={decrease} />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/*
    mapStateToProps와 mapDispatchProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.

    mapStateToProps : state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다.
    mapDispatchProps : store의 내장함수 dispatch를 파라미터로 받아온다.
*/