import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableControl = ({ id, label }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="control-item"
    >
      {label}
    </div>
  );
};

const ControlPanel = () => {
  const controls = [
    { id: "text", label: "Text Block" },
    { id: "image", label: "Image Block" },

  ];

  return (
    <div className="control-panel">
      {controls.map((control) => (
        <DraggableControl
          key={control.id}
          id={control.id}
          label={control.label}
        />
      ))}
    </div>
  );
};

export default ControlPanel;
