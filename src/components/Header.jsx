import React,{useState} from 'react'
import Darkdown from './Darkdown';

function Header() {
    const [question,setQuestion] = useState(false);
    

    return (
        <div className='header'>
            <h1>Markdown Previewer</h1>
            <i onClick={()=>setQuestion(true)} class="fa-solid fa-question"></i>
            <Darkdown question={question}/>
        </div>

    )
}

export default Header