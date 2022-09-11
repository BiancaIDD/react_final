import * as React from 'react';
import './PendingThing.css'
export default function PendingList() {
  const list = [
    "Complete the LarnU bootcamp courses",
    "Develop my application for children",
    "Study some courses in platzi",
    "Learn English"
  ]
  
  return (
    <div className='pending-list'>
      <h2>Pending List</h2>
    <ul className='pending__list'>
      {list.map((task) => (
        <li key={`section-${task}`}>
          {task}
        </li>
      ))}
    </ul>
    </div>
  );
}
