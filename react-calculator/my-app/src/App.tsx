import React from 'react';
import { Wrapper } from './App.styles'
import DigitButton from './Components/DigitButton'
import OperationButton from './Components/OperationButton';
import {useReducer} from 'react'
//enums
export enum ActionsKind{
  ADD_DIGIT = 'add-digit',
  CHOOSE_OPERATION = 'choose-opreration',
  CLEAR = 'clear',
  DELETE_DIGIT = 'delete-digit',
  EVALUATE = 'evaluate'
}

interface CalculationInt{
  currentOperand: string,
  previousOperand: string,
  operation: string
}


function reducer(state:any, {type, payload}:any) {
  switch (type) {
    case ActionsKind.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite:false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state
      if(payload.digit === "." && state.currentOperand.includes("."))return state
      return {
        ...state,
        currentOperand:`${state.currentOperand || ""}${payload.digit}`
      }
    case ActionsKind.CLEAR:
      return {}
    case ActionsKind.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation:payload.operation,
        }
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      return {
        ...state,
        previousOperand: calculate(state),
        operation:payload.operation,
        currentOperand:null
      }
    case ActionsKind.EVALUATE:
      if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
        return state
      }
      return {
        ...state,
        overwrite:true,
        previousOperand: null,
        currentOperand: calculate(state),
        operation:null,
       
      }
    case ActionsKind.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand:null,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return{...state,currentOperand:null}
      }
      return {
        ...state,
        currentOperand:state.currentOperand.slice(0,-1)
      }

  }
}

function calculate({currentOperand, previousOperand, operation}:CalculationInt){
  const prev = parseFloat(previousOperand)
  const curr = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(curr)) return ''
  let computation:number = 0
  switch (operation) {
    case "+":
      computation = prev + curr
      break
    case "-":
      computation = prev - curr
      break
    case "*":
      computation = prev * curr
      break
    case "÷":
      computation = prev / curr
      break
  }
  return computation.toString()
}
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits:0,
})
function formatOperand(operand:any) {
  if (operand == null) return 
  const [integer, decimal] = operand.split('.')
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}


function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] =
    useReducer(reducer, {})
  
  return (
    <Wrapper>
      <div className="calculator-grid">
        <div className="calculator-container">
          <div className="output">
            <div className="previous-operand">{previousOperand}{operation}
            </div>
            <div className="current-operand">{formatOperand(currentOperand)}</div>
          </div>
          <button className='span-two'
            onClick={() => dispatch({ type: ActionsKind.CLEAR })}>AC
          </button>
          <button
            onClick={() => dispatch({ type: ActionsKind.DELETE_DIGIT })} > DEL
          </button>
          <OperationButton operation="÷" dispatch={dispatch}/>
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="*" dispatch={dispatch}/>
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch}/>
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch}/>
          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
  
          <button className='span-two' onClick={() => dispatch({ type: ActionsKind.EVALUATE })}>=</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
