import { db } from "../config/firebaseConfig.js";

export const savePage = async (req, res) => {
  try {
    const { pageId, content } = req.body;
    await db.collection("pages").doc(pageId).set({ content });
    res.status(200).send("Page saved successfully");
  } catch (error) {
    res.status(500).send("Error saving page");
  }
};

export const getPage = async (req, res) => {
  try {
    const { pageId } = req.params;
    const doc = await db.collection("pages").doc(pageId).get();
    if (doc.exists) {
      res.status(200).json(doc.data());
    } else {
      res.status(404).send("Page not found");
    }
  } catch (error) {
    res.status(500).send("Error retrieving page");
  }
};
