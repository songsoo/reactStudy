import { useState } from "react"

function ToDoList(){
    
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        
        event.preventDefault();
        if(toDo === ""){
            return;
        }

        setToDos(currentArray => [...currentArray , toDo]);
        setToDo("");
        
        console.log(toDos);
    };

    return (
    <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input 
            onChange = {onChange} 
            type="text" 
            placeholder = "write to do..."
            value = {toDo}
            ></input>
            <button> Add To Do</button>
        </form>
        <hr/>
        <ul>
            {toDos.map((item, index)=>
                <li key={index}>{item}</li>
            )}
        </ul>
    </div>
    );
}

export default ToDoList;