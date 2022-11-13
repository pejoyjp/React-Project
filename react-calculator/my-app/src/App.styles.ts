import styled from "styled-components";
export const Wrapper = styled.div`
    height: 2000px;
    margin: 0;
    background: linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb);
    .calculator-grid{
        padding-top: 30vh;
        display: flex;
        justify-content: center;
        .calculator-container{ 
    
            border-radius: 30px;
            display:grid; 
            grid-template-columns: repeat(4,9vw);
            grid-template-rows: repeat(6,10vh);
        }

        .output{
            border-top-left-radius:10px;
            border-top-right-radius:10px;
            grid-column: 1/-1;
            background-color: rgba(0, 0,0,.75);
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-around;
            font-size: 1.8vh;
            padding: .5rem;
            color: white;
        }
        
        button{
        font-size: 1vw;
        border: 1px solid white;
        outline: none;
        }
        button:hover{
            background-color: rebeccapurple;
        }
        .span-two{
            grid-column: span 2;
        }
    
    }

    
    
    
    
    

`