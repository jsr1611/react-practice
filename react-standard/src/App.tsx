import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Contents from "@/layout/Contents";
import Sidebar from "@/layout/Sidebar";
import styled from "styled-components";

import GlobalStyle from "@/styles/GlobalStyle";
import useAxiosInterceptor from "@/hook/useAxiosInterceptor";
import useCheckLoginState from "@/hook/useCheckLoginState";
import { useLoginState } from "@/global/loginState";
import { Outlet } from "react-router-dom";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 240px;
`;

/**
 * Root Component
 * @see https://www.jumanazar.uz/react-practice
 */
function App() {
    // hook
    useAxiosInterceptor();
    useCheckLoginState();

    //global state
    const { login } = useLoginState();

    //view
    return (
        <>
            {login.isLogin ? (
                <>
                    <GlobalStyle />
                    <AppContainer>
                        <Header
                            name="Jumanazar"
                            title="Software Engineer"
                            description="@ SweetK"
                        />
                        <Sidebar title="CMS 2022" menu="추천 콘텐츠" />
                        <Contents
                            title="VisitSeoul CMS"
                            description="No comments"
                            version={new Date().getFullYear()}
                        />
                        <Footer
                            title="Copyright"
                            description="(www.jumanazar.uz)"
                            year={new Date().getFullYear()}
                        />
                    </AppContainer>

                    {/* <Calculator /> */}
                </>
            ) : (
                <Outlet />
            )}
        </>
    );
}

export default App;
