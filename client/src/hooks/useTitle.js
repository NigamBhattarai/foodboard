import {useEffect} from 'react';

const UseTitle = (title) => {
    useEffect(() => {
        document.title=title+" | Foodboard";
    });
}

export default UseTitle;