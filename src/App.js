import React from 'react';
import {useState,useEffect} from 'react'
import './App.css';

function App() {
  
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>
          setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])
        } className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { ((toDos.sort((a,b)=>{
        if (!a.status && b.status){
          return -1
        }else if (a.status && !b.status ){
          return 1
        }else{
          return 0
        }
      })).slice(0,5)).map((value)=>{

      return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodos(toDos.filter(obj=>{
                if (obj.id===value.id){
                  obj.status=e.target.checked
                }
                return obj
              }))
            }} value={value.status}checked={value.status}  type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{
              setTodos(toDos.filter((obj2)=> value.id !== obj2.id))
            }} className="fas fa-times"></i>
          </div>
        </div>
      )     
    })}
 <div className="mainHeading">
<h1 style={{padding:'20px'}}>Completed Items</h1>
      </div>
      { ((toDos.sort((a,b)=>{
        if (!a.status && b.status){
          return 1
        }else if (a.status && !b.status ){
          return -1
        }else{
          return 0
        }
      })).slice(0,5)).map((value)=>{
        if (value.status){        
          return(
          <div className="input">
          <input value={value.text} disabled type="text" />
          </div>  
        )
        }return null
    })}
    </div> 
    </div>
  );
}
export default App;