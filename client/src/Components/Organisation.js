import React from 'react'
import TableList from './Table';
 

const data = [
    { name: 'John Doe', age: 32, gender: 'Male' },
    { name: 'Jane Doe', age: 28, gender: 'Female' },
    { name: 'Jim Brown', age: 40, gender: 'Male' },
  ];
  
const Organisation = () => {
  return (
    <div> 
        <TableList data={data}  />
    </div>
  )
}

export default Organisation