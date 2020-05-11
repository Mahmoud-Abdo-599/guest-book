import React from 'react';

import './form-input-message.scss'

const FormInputMessage = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    
  </div>
);

export default FormInputMessage;