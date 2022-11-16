import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const SSkeleton = () => {
  return (
    <div>
      
      <Skeleton variant="rectangular" width={362.66} height={203.98} />
      <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' }} width="50%"/>
      <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' }} width="50%"/>
      <Skeleton variant="rounded" animation="wave" width={100} height={60}  />
    </div>
  )
}

export default SSkeleton;

