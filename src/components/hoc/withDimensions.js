import { useEffect, useRef, useState } from "react";

const widthDimensions = (Component) => {
    return function WidthDimensions() {
        const [width, setWidth] = useState(null);
        const [height, setHeight] = useState(null);
        const compRef = useRef();

        useEffect(() => {
            if (compRef.current) {
                setWidth(compRef.current.offsetWidth);
                setHeight(compRef.current.offsetHeight);
            }
        }, [compRef]);

        return <Component ref={compRef} height={height} width={width} />
    };
};

export default widthDimensions;