import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
   <button className='btn-custom' {...otherProps}>{children}</button>
);

export default CustomButton;



