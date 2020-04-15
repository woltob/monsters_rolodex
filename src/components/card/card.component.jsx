import React from 'react';

import './card.styles.css'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        <h2>{props.monster.employee_name}</h2>
        <p>Salary: {formatter.format(props.monster.employee_salary)}</p>
        <p>Age: {props.monster.employee_age}</p>
    </div>
)