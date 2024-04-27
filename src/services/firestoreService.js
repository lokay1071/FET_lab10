import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyDjloOPwuJr4CRAniEdyVkm85FYUk236Ks",
    authDomain: "fet-lab10.firebaseapp.com",
    projectId: "fet-lab10",
    storageBucket: "fet-lab10.appspot.com",
    messagingSenderId: "1003637732532",
    appId: "1:1003637732532:web:65ff5bf1f55fa4742913e1",
});

const firestore = firebase.firestore();

export const addExpense = async (expenseData) => {
    try {
        await firestore.collection("expenses").add(expenseData);
    } catch (error) {
        console.error("Error adding expense: ", error);
    }
};

export const getExpenses = async () => {
    try {
        const snapshot = await firestore.collection("expenses").get();
        const expenses = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return expenses;
    } catch (error) {
        console.error("Error getting expenses: ", error);
        return [];
    }
};

export const updateExpense = async (expenseId, expenseData) => {
    try {
        await firestore
            .collection("expenses")
            .doc(expenseId)
            .update(expenseData);
    } catch (error) {
        console.error("Error updating expense: ", error);
    }
};

export const deleteExpense = async (expenseId) => {
    try {
        await firestore.collection("expenses").doc(expenseId).delete();
    } catch (error) {
        console.error("Error deleting expense: ", error);
    }
};
