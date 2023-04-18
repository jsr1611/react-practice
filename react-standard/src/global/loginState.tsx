import { atom, useRecoilState, useResetRecoilState } from "recoil";

type LoginInfo = {
    userId: string;
    userPwd: string;
};

const loginState = atom<LoginInfo>({
    key: "loginState",
    default: {
        userId: "",
        userPwd: "",
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
