import React, { useState, useEffect } from "react";

import { DndContext } from "@dnd-kit/core";
import { saveState, getState } from "../Utils/firebaseUtils";
import ControlPanel from "./ControlPanel";
import Canvas from "./Canvas";
import Loader from "./Loader";

const PageBuilder = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedState = await getState();
        if (savedState) setItems(savedState);
      } catch (error) {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const updatedItems = items.map((item) =>
        item.id === active.id ? { ...item, position: over.position } : item
      );
      setItems(updatedItems);
    }
  };

  const handleSave = async () => {
    try {
      await saveState(items);
      alert("Page saved successfully.");
    } catch (error) {
      alert("Failed to save page.");
    }
  };

  const handlePublish = () => {
    const htmlContent = generateHTML(items);
    const newWindow = window.open();
    newWindow.document.write(htmlContent);
    newWindow.document.close();
  };

  const generateHTML = (items) => {
    return `<!DOCTYPE html>
    <html>
    <head>
      <title>Published Page</title>
    </head>
    <body>
      ${items.map((item) => `<div>${item.content}</div>`).join("")}
    </body>
    </html>`;
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <ControlPanel />
        <Canvas items={items} setItems={setItems} />
      </DndContext>
      <button onClick={handleSave}>Save</button>
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};

export default PageBuilder;
