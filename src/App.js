import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useHistory } from 'react-router-dom';
import Notification from './components/Notification';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setRole(userDoc.data().role);
      } else {
        history.push('/login');
      }
    });

    return unsubscribe;
  }, [history]);

  const handleLogout = () => {
    signOut(auth);
    history.push('/login');
  };

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Flat Expenses Tracker
        </Typography>
        {user && <Notification userId={user.uid} />}
        {role === 'maintainer' && <ExpenseForm onAddExpense={addExpense} />}
        <ExpenseList expenses={expenses} />
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
    </Container>
  );
}

export default App;