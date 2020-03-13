import React, { useState, useReducer, useEffect, useContext } from "react";

import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";

import * as constants from "./constants";
import { todoReducer } from "./todoReducer";

const initialState = constants.TODO_SEED;
// 00: show how we are populating the grid using initialState

const Todos = () => {
  // 01: Add todo and textInput state
  // 1b: Update Grid data source (Line 51)
  // 02: Add completedTodos filter

  // 03: (Add OnChange)
  // 04: (Add OnChange event to Input)

  // 05: Add effect for document title
  
  function addTodo(event) {
    console.log(event) 
    // 06: Prevent browser refresh
    // 06: Add add_todo dispatch
    // 06: reset setTextInput to nothing
  }
  function toggleComplete(id) {
    // 07: Add toggle_complete dispatch
  }
  function deleteTodo(id) {
    // 08: Add delete_todos dispatch
  }
  function clearTodos() {
    // 09: Add clear_todos dispatch
  }

  // 03: Add updateTextInput function

  return (
    <>
      <div className="todo-form">
        <form onSubmit={addTodo}>
          {/* 04: Add OnChange event to Input */}
          <Input type="search" placeholder="Enter task..." autoComplete="off" />
          <Button onClick={e => addTodo(e)} look="bare" icon="plus" type="submit">
            Add To Do
          </Button>
        </form>
      </div>
      <div className="todo-container">
        {/* 1b: Change to todos */}
        <Grid data={initialState} style={{ width: "100%", height: "100%" }}>
          <Column field="name" title="Name" />
          <Column field="complete" title="Completed"
            cell={(props) => (
              <td>
                <Button onClick={() => toggleComplete(props.dataItem.id)}
                  look="bare" 
                  icon={props.dataItem[props.field] 
                    ? "checkbox-checked" 
                    : "checkbox" }
                />
              </td>
            )}
          />
          <Column title="Remove"
            cell={(props) => (
              <td>
                <Button onClick={() => deleteTodo(props.dataItem.id)} look="bare" icon="trash" />
              </td>
            )}
          />
        </Grid>
      </div>
      <Button onClick={() => clearTodos()} look="bare" icon="reset">
        Remove All To Do's
      </Button>
    </>
  );
};

export default Todos;


//// const [todos, dispatch] = useReducer(todoReducer, initialState)
// const myReducer = useReducer(todoReducer, initialState);
// const todos = myReducer[0]
// console.log(todos)
// const dispatch = myReducer[1]
// console.log(dispatch)

//// const [textInput, setTextInput] = useState('');
// const myState = useState('');
// const textInput = myReducer[0]
// console.log(textInput)
// const setTextInput = myReducer[1]
// console.log(setTextInput)