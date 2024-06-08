import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <List>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </List>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};

export default ExpenseList;