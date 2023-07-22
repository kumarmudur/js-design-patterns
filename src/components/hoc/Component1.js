import React, { forwardRef } from 'react';

import widthDimensions from './withDimensions';

const Component1 = ({ width }, forwardedRefFromParent) => {
    return (
        <div ref={forwardedRefFromParent} className="comp1">
            Hey I am Component1  and my width is: {width}
        </div>
    );
};

export default widthDimensions(forwardRef(Component1));