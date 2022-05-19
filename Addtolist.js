import React  from "react";
import { useState } from "react";
import "./Addtolist.css";
import ListItem from './ListItem'

function Addtolist() {
  const [tasks, setTasks] = useState([])
  const [newItemName, setNewItemName] = useState("")

  const handleChange = function(event){
    setNewItemName(event.target.value)
  }

  const handleSubmit = function(event) {
    event.preventDefault()
    // get the name from the state
    // create an object wit the name 
    const newTask = {
      name: newItemName
    }
    // if empty list then start ID at 1
    if (tasks.length === 0) {
      newTask.id = 1
    } else {
      // add an id to the object
      const lastItemId = tasks[tasks.length - 1].id
      newTask.id = lastItemId + 1
    }
    // make copy of current state
    const tasksCopy = [...tasks]
    // add my object to the copy
    tasksCopy.push(newTask)
    // update the state
    setTasks(tasksCopy)
    setNewItemName('')
  }
  const clearList = function (){
    setTasks([])
  }
  const removeTask = function(id){
    // get the tasks
    // remove the task we want
    const updatedTasks = tasks.filter(task => task.id !== id)
    // update the state with the new list of tasks
    setTasks(updatedTasks)
  }
  const listItems = tasks.map(function(item) {
    return <ListItem delete={()=> removeTask(item.id)} key={item.id} itemName={item.name}/>
  })

    return (
      <div>
        <center>
        <form onSubmit={handleSubmit}>
          <input className="addfavorites" type="submit" value="Add to Favorites" />
        </form>
        </center>

        <ul>
        {listItems}
      </ul>
     <center>
       <button onClick={clearList}>Clear List</button>
     </center>
      </div>
    );
}

export default Addtolist;