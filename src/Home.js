import { useState,useEffect } from "react";
import Task from "./Task";

const Home = () => {
    const [task,settask]=useState('')

    const [list,setList]=useState([]);

    const addItem=(e)=>{
        e.preventDefault();
        console.log(task);
        if(task){
            const to_add={task}
            fetch('http://localhost:8000/list',{
            method:'POST',
            headers:{"Content-Type": "application/json" },
            body: JSON.stringify(to_add)
            })
            .then(()=>{
                console.log("adding completed");
                })
         }        
    }
    useEffect(() => {
        fetch('http://localhost:8000/list')
        .then(res=>res.json())
        .then(data=>setList(data))
    }, [list])
   
    const deleting=(id)=>{
        fetch('http://localhost:8000/list/'+id,{
            method:'DELETE',
            })
            // const temp= list.filter(list=>list.id!==id)
            // setList(temp)
    }

    return ( 
        <div>
            <div className="header">
                <h1>To-Do</h1>
                <div>
                    <form>
                        <label htmlFor="">Task:</label>
                        <textarea
                            placeholder="task goes here"
                            onChange={(e)=>(settask(e.target.value))}
                        ></textarea>

                        <button type="submit" onClick={addItem}>Add Task</button>
                    </form>
                </div>
            </div>
            <Task list={list} deleting={deleting}/>
        </div>
     ); 
}
 
export default Home;