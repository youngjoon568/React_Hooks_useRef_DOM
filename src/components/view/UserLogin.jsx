import React, { useRef } from 'react';
import { useEffect } from 'react';

export default function UserLogin() {

    const inputRef = useRef("");

    useEffect(() => {
        // console.log(inputRef.current);
        inputRef.current.focus();
    }, []);

    const handleLogin = () => {
        alert(`환영합니다. ${inputRef.current.value}`);
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder='username' />
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
};