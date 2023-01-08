import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
        <button className='btn btn-danger' style={{margin: '20px'}} onClick={handleFilter}>Clear</button>

            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
        </div>
    );
};

export default ToDoList;