import { collection, getDocs, query, doc, getDoc, deleteDoc, updateDoc, addDoc, setDoc, where } from "firebase/firestore";
import { db } from './Firebase';

// CREATE
export const createItem = async(obj, fbCollection) => {
    const colRef = collection(db, fbCollection);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj, fbCollection) => {
    const colRef = collection(db, fbCollection);
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems = async (fbCollection)  => {
    const colRef = collection(db, fbCollection);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
export const getItemsByCondition = async (value, fbCollection) => {
    const colRef = collection(db, fbCollection);
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id, fbCollection) => {
    const colRef = collection(db, fbCollection);
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id, fbCollection) => {
    const colRef = collection(db, fbCollection);
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}