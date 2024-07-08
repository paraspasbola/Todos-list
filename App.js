import "./App.css";
import { Navbar } from "./components/Navbar";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import React, { useState, useEffect } from "react";
// import { cleanup } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("on delete of todo", todo); -->not necessary
    //deleting this way in react does not work
    //let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    // console.log("i am adding todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
   
  // if are not using --> react router dom
  // return (
  //   <>
  //     <Navbar title="MyTodoList" />
  //     <AddTodo addTodo={addTodo} />
  //     <Todos todos={todos} onDelete={onDelete} />
  //     <Footer />
  //   </>
  // );


  // using react router dom 
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* users --> component 1
            users/home --> component 2 */}
          {/* use Route exact path - for good practice */}
          <Route
            exact
            path="/about"
            element={
              <>
                <Navbar title="MyTodoList" />
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar title="MyTodoList" />
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
