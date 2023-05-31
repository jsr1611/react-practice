import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLoginState } from "@/global/loginState";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/mapping/Routes";

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #479bf5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
`;

const Form = styled.form`
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;

    h3 {
        margin-bottom: 1rem;
    }
    label {
        display: block;
        margin-bottom: 0.5rem;
    }
    .mb-3 {
        margin-bottom: 1rem;
    }
    .form-control {
        display: block;
        width: calc(100% - 3rem); // 여기서 수정
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        margin-bottom: 5px;
    }
    .custom-control {
        position: relative;
        display: block;
        min-height: 1.5rem;
        padding-left: 1.5rem;
    }
    .custom-control-input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-control-label {
        margin-bottom: 0;
        position: relative;
        padding-top: 0.25rem;
    }
    .custom-control-label::before {
        position: absolute;
        top: 0.25rem;
        left: 0;
        display: block;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
        content: "";
        background-color: #fff;
        border: #adb5bd solid 1px;
    }
    .custom-control-input:checked ~ .custom-control-label::before {
        color: #fff;
        border-color: #0d6efd;
        background-color: #0d6efd;
    }
    .d-grid {
        display: grid;
    }
    .btn {
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;

        display: block;
        width: calc(100% - 1.4rem); // 여기서 수정
        margin-top: 10px;
    }
    .btn-primary {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    .forgot-password {
        font-size: 0.875rem;
    }
`;

const Error = styled.span`
    color: red;
`;

type User = {
    userId: string;
    userPw: string;
};

/**
 * @description 로그인 컴포넌트
 */
function Login() {
    // auth
    const isLoggedIn = Cookies.get("isLoggedIn");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    //global state
    const { setLogin } = useLoginState();

    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        const { userId, userPw } = data;

        // when login success
        if (userId === "1111" && userPw === "2222") {
            setLogin((prevState) => {
                return { ...prevState, isLogin: true };
            });

            Cookies.set("isLoggedIn", "success", { expires: 1 });

            navigate(Routes.Root);
        } else {
            alert("Wrong user login info!");
        }
    };
    // view
    if (isLoggedIn) {
        return null;
    }

    return (
        <Wrapper>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter userId"
                            {...register("userId", { required: true })}
                        />
                        {errors.userId && <Error>This field is required</Error>}
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter userPw"
                            {...register("userPw", { required: true })}
                        />
                        {errors.userPw && <Error>This field is required</Error>}
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </Form>
            </Container>
        </Wrapper>
    );
}

export default Login;
