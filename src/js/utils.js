import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const getData = async (coll) => {
  const collRef = collection(db, coll);
  const data = await getDocs(collRef);
  console.log(data);
  return data;
};

export { getData };
