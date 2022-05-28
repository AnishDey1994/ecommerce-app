import React from 'react';
import './UXValidation.css';

const UXValidation = (props) => {
    return (
      <div
        id={props.id && props.id}
        className={props.className && props.className}
      >
        {props.text && props.text}
      </div>
    );
}
export default UXValidation;
