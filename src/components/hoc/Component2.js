import React, { forwardRef } from 'react';

import widthDimensions from './withDimensions';

const Component2 = ({ height }, forwardedRefFromParent) => {
    return (
        <div ref={forwardedRefFromParent} className="comp2">
            Hey I am Component2, Height is {height} 
        </div>
    );
};

export default widthDimensions(forwardRef(Component2));