import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop(){
    const uselocation = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    },[uselocation.pathname])
}

