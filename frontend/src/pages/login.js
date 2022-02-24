import React, { useState, useEffect, useRef, useCallback } from "react";


export default function LoginPage() {
    const [open, setOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    // 화면 사이즈에 따른 ui 변경을 위해 정의
    const handleWindowResize = useCallback((event) => {
        setWindowSize(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        windowSize >= 600 && setOpen(false);
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }, [windowSize]);

    return (
        <p>여긴 로그인 페이지</p>
    )
}