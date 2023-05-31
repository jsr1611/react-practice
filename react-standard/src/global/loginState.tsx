import { atom, useRecoilState, useResetRecoilState } from "recoil";

type LoginInfo = {
    userId: string;
    userPwd: string;
    isLogin?: boolean;
};

const loginState = atom<LoginInfo>({
    key: "loginState",
    default: {
        userId: "",
        userPwd: "",
        isLogin: false,
    },
});

/**
 * @description Custom Hook
 * @returns
 */
function useLoginState() {
    const [login, setLogin] = useRecoilState(loginState);
    const resetLogin = useResetRecoilState(loginState);

    return {
        login,
        setLogin,
        resetLogin,
    };
}

export { useLoginState };
