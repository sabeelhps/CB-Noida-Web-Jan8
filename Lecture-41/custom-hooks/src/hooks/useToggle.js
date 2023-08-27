import { useState } from "react";

const useToggle = (initialVal=false) => {

    const [val, setVal] = useState(initialVal);

    const toggleVal = () => {
        setVal(!val);
    }

    return [val, toggleVal];
}

export default useToggle;