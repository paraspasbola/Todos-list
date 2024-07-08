import React from "react";

//------------------------> ya to (props0 likh do fir karna pdega  -->  props.___
//destrucing -------------> ya props ke andar jo jo chize hai vo likh do
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
