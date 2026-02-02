import React, { useState } from 'react'
import List from './List'
import Show from './Show'

export default function Todo() {
  const [val, setVal] = useState("")
  const [list, setList] = useState([])

  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [error, setError] = useState("")

  const addHandler = (e) => {
    if (e) e.preventDefault()
    const trimmed = val.trim()
    if (!trimmed) { setError("Please enter a task"); return }

    const isExist = list.find((item, idx) =>
      item.title.toLowerCase() === trimmed.toLowerCase() && idx !== editId
    )

    if (isExist) { setError("Task already exists!"); return }

    if (isEdit) {
      const updated = list.map((item, idx) =>
        idx === editId ? { ...item, title: trimmed } : item
      )
      setList(updated)
      setIsEdit(false)
      setEditId(null)
    } else {
      setList([...list, { title: trimmed, complete: false }])
    }

    setVal("")
    setError("")
  }

  const deleteHandler = (index) => {
    setList(list.filter((_, i) => i !== index))
    if (isEdit && editId === index) {
      setIsEdit(false)
      setEditId(null)
      setVal("")
      setError("")
    }
  }

  const editHandler = (item, index) => {
    setIsEdit(true)
    setVal(item.title)
    setEditId(index)
    setError("")
  }

  const completeHandler = (index) => {
    const updated = list.map((item, i) =>
      i === index ? { ...item, complete: !item.complete } : item
    )
    setList(updated)
  }

  return (
    <div className='task2'>
      <h1>My To-Do List</h1>

      <List
        val={val}
        setVal={(v) => { setVal(v); setError("") }}
        addHandler={addHandler}
        isEdit={isEdit}
        error={error}
      />

      <Show
        list={list}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        completeHandler={completeHandler}
      />
    </div>
  )
}