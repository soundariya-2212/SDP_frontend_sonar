import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const CertificateComponent = ({ open, onClose, testSubject = 'N/A', score = 0, totalQuestions = 0 }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Certificate of Achievement</DialogTitle>
      <DialogContent>
        <div style={{ textAlign: 'center', padding: '16px' }}>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>
            Certificate of Achievement
          </Typography>
          <Typography variant="h6">
            This is to certify that you have successfully completed the test on:
          </Typography>
          <Typography variant="h5" style={{ margin: '16px 0' }}>
            {testSubject}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            Score: {score} out of {totalQuestions}
          </Typography>
          <Typography variant="body2">
            Date: {new Date().toLocaleDateString()}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handlePrint} color="secondary">
          Print Certificate
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CertificateComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  testSubject: PropTypes.string,
  score: PropTypes.number,
  totalQuestions: PropTypes.number,
};

export default CertificateComponent;
