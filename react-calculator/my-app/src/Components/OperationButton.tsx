import React from 'react';
import {ActionsKind} from '../App'

interface Props{
    dispatch: any
    operation:any 
}

const OperationButton: React.FC<Props> = ({ dispatch, operation }) => (
    <button onClick={() => dispatch({
        type: ActionsKind.CHOOSE_OPERATION,
        payload: { operation }
    })}>
        {operation}
    </button>
) 
/*
export default OperationButton

function OperationButton({ dispatch, operation }:Props) {
    return (
        <button onClick={() => dispatch({
            type: ActionsKind.CHOOSE_OPERATION,
            payload: { operation }
        })}>
            {operation}
        </button>
    );
}
*/
export default OperationButton;