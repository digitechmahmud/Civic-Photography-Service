import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Civic Photography!`;
    }, [title]);
};


export default useTitle;