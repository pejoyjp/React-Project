import React from 'react';
import {ActionsKind} from '../App'

interface Props{
    dispatch: any
    digit:any 
}
const DigitButton: React.FC<Props> = ({ dispatch, digit }) => (
    <button onClick={() => dispatch({
        type: ActionsKind.ADD_DIGIT,
        payload: { digit }
    })}>
        {digit}
    </button>
) 
    
export default DigitButton

