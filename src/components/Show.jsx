import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

export default function Show({ list, deleteHandler, editHandler, completeHandler }) {
  return (
    <div className="list-box">
      {list.map((item, index) => (
        <div className="li" key={index}>
          <p className={item.complete ? "makeline" : ""}>
            {item.title}
          </p>

          <div className="btns">
            {/* Complete */}
            <button
              className={`btn-complete ${item.complete ? "completed" : ""}`}
              onClick={() => completeHandler(index)}
              title="Complete"
            >
              <FaCircleCheck />
            </button>

            {/* Edit */}
            <button
              className="btn-edit"
              onClick={() => editHandler(item, index)}
              title="Edit"
            >
              <MdModeEdit />
            </button>

            {/* Delete */}
            <button
              className="btn-delete"
              onClick={() => deleteHandler(index)}
              title="Delete"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
