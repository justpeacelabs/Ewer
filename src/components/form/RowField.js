import React from 'react';
const RowField = ({text, children, className}) => (
  <div className={"pure-u-1 pure-u-md-1-2 row " + (className || '')}>
    <div className="pure-g">
      <div className="pure-u-4-5 label-container">
        <label htmlFor="rumourDate">{text}</label>
      </div>
      <div className="pure-u-1-5 info-icon label-container-right">
        <i class="fa fa-question-circle" aria-hidden="true"></i>
      </div>
    </div>
    {children}
</div>);

export default RowField;