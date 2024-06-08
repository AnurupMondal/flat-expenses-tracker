import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography, Box } from '@mui/material';

function ExpenseItem({ expense }) {
  return (
    <ListItem>
      <Box>
        <Typography variant="h6">{expense.title}</Typography>
        <Typography variant="body2">${expense.amount.toFixed(2)}</Typography>
        <Typography variant="body2">{expense.date.toDateString()}</Typography>
      </Box>
    </ListItem>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default ExpenseItem;