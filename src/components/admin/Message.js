import React from 'react'

export const Message = ({message, type}) => {
  return (
    <>
        {type === 'success' ? 
            <div class="alert alert-success"><i class="bi bi-check-circle"></i> 
            {message}</div>:
            <div class="alert alert-danger"><i class="bi bi-file-excel"></i> {message}</div>
        }
    </>
  )
}
