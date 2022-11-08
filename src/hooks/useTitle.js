import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Sean Tucker Photography`;
    }, [title])
}

export default useTitle;