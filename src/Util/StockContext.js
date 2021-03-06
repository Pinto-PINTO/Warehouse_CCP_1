import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, limit, startAfter } from "firebase/firestore";

const stockCollectionRef = collection(db, "stocks");

class StockDataService {

    // 1) insert
    // newStock is the new record
    addStocks = (newStock) => {
        return addDoc(stockCollectionRef, newStock);
    };

    // 2) Update
    // stockDoc -> Existing record
    // updatedStock -> Updated record
    updateStock = (id, updatedStock) => {
        const stockDoc = doc(db, "stocks", id);
        return updateDoc(stockDoc, updatedStock)
    };

    // 3) Delete
    deleteStock = (id) => {
        const stockDoc = doc(db, "stocks", id);
        return deleteDoc(stockDoc);
    };

    // 4) Fetch All Stocks in db
    // getAllStocks = () => {
    //     const q = query(stockCollectionRef, limit(5))
    //     return getDocs(q);
    // };

    getAllStocks = () => {
        return getDocs(stockCollectionRef);
    };

    // 5) Fetch an individual stock
    getStock = (id) => {
        const stockDoc = doc(db, "stocks", id);
        return getDoc(stockDoc);
    }



    // ------------- Filter Logic START -------------

    Filter = (fname, fcategory, fbrand, fstatus) => {

        let q = query(stockCollectionRef);

        if (fname !== "") {
            q = query(q, where("name", "==", fname))
        }
        if (fcategory !== "") {
            q = query(q, where("category", "==", fcategory))
        }
        if (fbrand !== "") {
            q = query(q, where("brand", "==", fbrand))
        }
        if (fstatus !== "") {
            q = query(q, where("status", "==", fstatus))
        }

        return getDocs(q);
    }

    // ------------- Filter Logic END -------------



}

export default new StockDataService();