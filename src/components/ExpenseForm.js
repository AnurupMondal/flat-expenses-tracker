import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Grid } from '@mui/material';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title,
      amount: parseFloat(amount),
      date: new Date(date),
    };
    onAddExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <Box component="form" onSubmit={submitHandler} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Date"
            variant="outlined"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Expense
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
