import { useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
//component
import Form from './Form';



function App() {
  const[movieName,setMoiveName] = useState('')
  const [review, setReview] = useState('')
  const submitReview = () => {
    axios.post('http://localhost:3001/api/insert', { movieName: movieName, movieReview: review })
      .then(() => console.log('插入成功'))
  }

  return (
    <div className="App">
      <Form changeMoiveHandler={(e) => { setMoiveName(e.target.value) }}
        changeReviewHandler={(e) => { setReview(e.target.value) }}
        clickHandler={submitReview} />
    </div>
  );
}

export default App;
