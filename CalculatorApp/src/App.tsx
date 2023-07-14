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
      const clear = {
        ...state,
        current: payload,
        prev: payload,
        operation: payload,
      };
      return clear;
    case ACTIONS.DELETE_DIGIT:
      if (state.current.length > 0) {
        const deletedDigit = { ...state, current: state.current.slice(0, -1) };
        return deletedDigit;
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.operation === "+") {
        return {
          prev: Number(state.prev) + Number(state.current),
          current: "",
          operation: "+",
        };
      }
      if (state.operation === "-") {
        return {
          prev: Number(state.prev) - Number(state.current),
          current: "",
          operation: "-",
        };
      }
      if (state.operation === "/") {
        return {
          prev: Number(state.prev) / Number(state.current),
          current: "",
          operation: "/",
        };
      }
      if (state.operation === "X") {
        return {
          prev: Number(state.prev) * Number(state.current),
          current: "",
          operation: "X",
        };
      } else {
        return {
          ...state,
          prev: state.current,
          current: "",
          operation: payload,
        };
      }

    case ACTIONS.EVALUATE:
      if (state.operation === "+") {
        return {
          ...state,
          current: Number(state.prev) + Number(state.current),
          prev: "",
          operation: "",
        };
      }
      if (state.operation === "-") {
        return {
          ...state,
          current: Number(state.prev) - Number(state.current),
          prev: "",
          operation: "",
        };
      }
      if (state.operation === "/") {
        return {
          ...state,
          current: Number(state.prev) / Number(state.current),
          prev: "",
          operation: "",
        };
      }
      if (state.operation === "%") {
        return {
          ...state,
          current: (Number(state.current) / Number(state.prev)) * 100,
          prev: "",
          operation: "",
        };
      }
      if (state.operation === "X") {
        return {
          ...state,
          current: Number(state.prev) * Number(state.current),
          prev: "",
          operation: "",
        };
      }

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
  const evaluateNumbers = () => {
    dispatch({
      type: ACTIONS.EVALUATE,
      payload: operation,
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
          <button className="simbol" onClick={() => addOperation("X")}>
            X
          </button>
          <button onClick={() => putNumber("4")}>4</button>
          <button onClick={() => putNumber("5")}>5</button>
          <button onClick={() => putNumber("6")}>6</button>
          <button className="simbol" onClick={() => addOperation("-")}>
            -
          </button>
          <button onClick={() => putNumber("1")}>1</button>
          <button onClick={() => putNumber("2")}>2</button>
          <button onClick={() => putNumber("3")}>3</button>
          <button className="simbol" onClick={() => addOperation("+")}>
            +
          </button>
          <button onClick={() => putNumber("0")}>0</button>
          <button onClick={() => putNumber(".")}>.</button>
          <button className="sum simbol" onClick={evaluateNumbers}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
