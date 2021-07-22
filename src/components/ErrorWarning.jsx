// import ErrorIcon from '@material-ui/icons/Error';
import { Alert } from '@material-ui/lab';
import React from 'react';

export const ErrorWarning = ({ errorMessage }) => (
  <Alert className="error" severity="error" style={{ maxWidth: 'fit-content', margin: 'auto' }}>{errorMessage}</Alert>
);
