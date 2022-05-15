import React from 'react';
import './UXHeader.css';

const UXHeader = (props) => {
    return (
      <div
        id={props.id && props.id}
        className={props.className && props.className}
      >
        {props.text && props.text}
      </div>
    );
}
export default UXHeader;
