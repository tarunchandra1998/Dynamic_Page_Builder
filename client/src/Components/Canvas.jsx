import React from "react";
import { DndContext } from "@dnd-kit/core";

const Canvas = ({ items, setItems }) => {
  return (
    <div>
      {items?.map((item, index) => (
        <div
          key={index}
          style={{ border: "1px solid black", padding: "8px", margin: "4px" }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
