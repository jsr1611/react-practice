import { atom, useRecoilState } from "recoil";

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

function useLoginState() {
    const [login, setLogin] = useRecoilState(loginState);

    return {
        login,
        setLogin,
    };
}

export { useLoginState };
