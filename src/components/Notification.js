import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const Notification = ({ userId }) => {
  const [unpaid, setUnpaid] = useState(false);

  useEffect(() => {
    const checkUnpaid = async () => {
      const q = query(
        collection(db, "payments"),
        where("userId", "==", userId),
        where("month", "==", new Date().getMonth() + 1),
        where("year", "==", new Date().getFullYear())
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setUnpaid(true);
      }
    };

    checkUnpaid();
  }, [userId]);

  return (
    unpaid && <div>You have not paid your maintenance fee for this month.</div>
  );
};

export default Notification;