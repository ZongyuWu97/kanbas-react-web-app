import React from 'react';

function ConfirmationDialog({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) {
    return null; // Don't render the modal if it's closed
  }

  return (
    <div>
      <div>
        <p>Are you sure you want to remove the assignment?</p>
        <button onClick={onConfirm} className='btn btn-danger'>Yes</button>
        <button onClick={onCancel} className='btn btn-primary'>No</button>
      </div>
    </div>
  );
}

export default ConfirmationDialog;