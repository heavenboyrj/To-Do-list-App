const Task = ({list,deleting}) => {

    return ( 
        <div className="tasks">
            <h1>Current Tasks</h1>
            {
              list.map(list=>(
                  <div class="both">
                    <div class="tsk">{list.task}</div>
                    <div class="btn"><button className="del" onClick={()=>deleting(list.id)}>Done</button></div>
                  </div>
                  
              ))  
            }
        </div>
     );
}
 
export default Task;