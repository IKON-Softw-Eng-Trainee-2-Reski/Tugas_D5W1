import React from "react";
import  {useState}  from "react";
import { Container } from "react-bootstrap";
import ToDoList from "../components/TodoList";
import ToDoForm from "../components/ToDoForm"
//mock data
import data from "../data.json";


const TodoPages = () => {
    const [ toDoList, setToDoList ] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
        }
    
        const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
        }
    
        const addTask = (userInput ) => {
            let copy = [...toDoList];
            copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
            setToDoList(copy);
        }

    return (
        <div>
        <Container className="mt-5">
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
            <ToDoForm addTask={addTask}/>
            
        </Container>
        </div>
    );
    };

export default TodoPages;
