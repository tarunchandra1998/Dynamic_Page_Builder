import { db, doc, setDoc, getDoc } from "../firebaseConfig";

export const saveState = async (state) => {
  try {
    await setDoc(doc(db, "pages", "pageId"), { state });
    console.log("State saved successfully!");
  } catch (error) {
    console.error("Error saving state: ", error);
  }
};

export const getState = async () => {
  try {
    const docRef = doc(db, "pages", "pageId");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().state;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting state: ", error);
    return null;
  }
};
