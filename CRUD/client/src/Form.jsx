import React from 'react';
import './Form.css'
function Form(props) {
    return (
        <div className='wrapper'>
            <h1>CRUD APPLICATION</h1>
            <div className='form'>
                <label>Movie Name:</label>
                <input type="text" name="movieName" onChange={props.changeMoiveHandler} />
                <label>Review:</label>
                <input type="text" name="review" onChange={props.changeReviewHandler}/>
                <button onClick={props.clickHandler}>Submit</button>
            </div>
        </div>
    );
}

export default Form;