import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

import { useLoginState } from "@/global/loginState";
import { Routes } from "@/mapping/Routes";

/**
 * @description 로그인 상태 체크 훅
 */
function useCheckLoginState() {
    // global state
    const { login, setLogin } = useLoginState();

    // router-info
    const location = useLocation();
    const navigate = useNavigate();

    // watch
    useEffect(() => {
        const isLogin = Cookies.get("isLoggedIn");

        if (isLogin) {
            if (location.pathname === Routes.Login) {
                navigate(Routes.Root);
            }
        }
        if (!isLogin) {
            if (location.pathname !== Routes.Login) {
                navigate(Routes.Login);
            }
        }
    }, [location, login, navigate]);

    useEffect(() => {
        const isLogin = Cookies.get("isLoggedIn");

        if (isLogin) {
            setLogin((prevState) => ({
                ...prevState,
                isLogin: true,
            }));
        }
    }, [setLogin]);
}

export default useCheckLoginState;
