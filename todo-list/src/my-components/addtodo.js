import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot be empty");
        }else{
            props.addTodo(title, desc);
        }
    }
    return (
    <form onSubmit={submit}>
    <div className='container my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Add a Todo</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Title"/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <textarea className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" rows="3"></textarea>
        </div>
        <button className="btn btn-sm btn-success">Add Todo</button>
        <hr/>
    </div>
</form>
  )
}