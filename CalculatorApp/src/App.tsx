import React, { useState, useReducer } from "react";
import "./App.scss";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
type StateType = {
  state: any;
  type: any;
  payload: any;
};
const initialState = {
  current: "",
  prev: "",
  operation: "",
};

function reducer(state: any, { type, payload }: StateType) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      const newDigit = { ...state, current: state.current + payload };
      return newDigit;
    case ACTIONS.CLEAR:
      const clear = { ...state, current: payload };
      return clear;
    case ACTIONS.DELETE_DIGIT:
      const deletedDigit = { ...state, current: state.current.slice(0, -1) };
      return deletedDigit;
    case ACTIONS.CHOOSE_OPERATION:
      const number = { ...state.current };
      const clearItem = { ...state, current: "" };
      const addPrev = { ...state, prev: number };
      const prevNumber = {
        ...state,
        prev: addPrev,
        current: clearItem,
      };

      console.log(prevNumber);

    default:
      return { ...initialState };
  }
}

function App() {
  const [{ current, prev, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const putNumber = (num: string) => {
    dispatch({
      type: ACTIONS.ADD_DIGIT,
      payload: num,
      state: initialState,
    });
  };
  const deleteDigit = () => {
    dispatch({
      type: ACTIONS.DELETE_DIGIT,
      payload: "",
      state: initialState,
    });
  };
  const clearInput = (zero: string) => {
    dispatch({
      type: ACTIONS.CLEAR,
      payload: zero,
      state: initialState,
    });
  };
  const addOperation = (symbol: string) => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: symbol,
      state: initialState,
    });
  };
  return (
    <div className="page">
      <div className="calculator">
        <div className="display">
          <div className="prev">
            {prev} {operation}{" "}
          </div>
          <div className="new">{current}</div>
        </div>
        <hr />
        <div className="btns">
          <button className=" simbol" onClick={() => clearInput("")}>
            AC
          </button>
          <button className=" simbol" onClick={() => deleteDigit()}>
            DEL
          </button>
          <button className="simbol" onClick={() => addOperation("%")}>
            %
          </button>
          <button className="simbol" onClick={() => addOperation("/")}>
            /
          </button>
          <button onClick={() => putNumber("7")}>7</button>
          <button onClick={() => putNumber("8")}>8</button>
          <button onClick={() => putNumber("9")}>9</button>
          <button className="simbol" onClick={() => putNumber("x")}>
            x
          </button>
          <button onClick={() => putNumber("4")}>4</button>
          <button onClick={() => putNumber("5")}>5</button>
          <button onClick={() => putNumber("6")}>6</button>
          <button className="simbol" onClick={() => putNumber("-")}>
            -
          </button>
          <button onClick={() => putNumber("1")}>1</button>
          <button onClick={() => putNumber("2")}>2</button>
          <button onClick={() => putNumber("3")}>3</button>
          <button className="simbol" onClick={() => putNumber("+")}>
            +
          </button>
          <button onClick={() => putNumber("0")}>0</button>
          <button onClick={() => putNumber(",")}>,</button>
          <button className="sum simbol">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
