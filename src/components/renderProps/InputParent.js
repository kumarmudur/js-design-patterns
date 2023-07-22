import React from 'react';

import Input from './Input';

const InputParent = () => {

    const showValue = (value) => <>The value is {value}</>;

    const multiplyValue = (value) => <>The multiplyValue value is {value * value}</>;
    
    return (
        <div>
            <Input 
                renderText={showValue}
            />
            <Input 
                renderText={multiplyValue}
            />
        </div>
    );
};

export default InputParent;