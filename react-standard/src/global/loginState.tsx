import { atom } from "recoil";

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

export default loginState;
