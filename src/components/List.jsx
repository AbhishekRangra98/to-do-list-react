import React from 'react'

export default function List({ val, setVal, addHandler, isEdit, error }) {
  return (
    <>
      <form className='input-box' onSubmit={addHandler}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Add your task..."
        />
        <button type="submit">{isEdit ? "Edit" : "Add"}</button>
      </form>

      {error && <div className="error-msg">{error}</div>}
    </>
  )
}