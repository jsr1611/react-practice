import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`    
${reset}    
/* 전역 스타일 */    

    @font-face{
        font-family:"Mont ExtraLight";
        font-style:normal;
        src:url("./font/Montserrat-ExtraLight.woff2") 
        format("woff2"),
        url("./font/Montserrat-ExtraLight.woff") 
        format("woff")
    }    
    @font-face{
        font-family:"Mont Light";
        font-style:normal;
        src:url("./font/Montserrat-Light.woff2") 
        format("woff2"),
        url("./font/Montserrat-Light.woff") 
        format("woff")
    }    
    @font-face{
        font-family:"Mont Regular";
        font-style:normal;
        src:url("./font/Montserrat-Regular.woff2") 
        format("woff2"),
        url("./font/Montserrat-Regular.woff") 
        format("woff")
    }    
    @font-face{
        font-family:"Mont Medium";
        font-style:normal;
        src:url("./font/Montserrat-Medium.woff2") 
        format("woff2"),
        url("./font/Montserrat-Medium.woff") 
        format("woff")
    }    
    @font-face{
        font-family:"Mont SemiBold";
        font-style:normal;
        src:url("./font/Montserrat-SemiBold.woff2") 
        format("woff2"),
        url("./font/Montserrat-SemiBold.woff") 
        format("woff")
    }    
    @font-face{
        font-family:"Mont Bold";
        font-style:normal;
        src:url("./font/Montserrat-Bold.woff2") 
        format("woff2"),
        url("./font/Montserrat-Bold.woff") 
        format("woff")
    }    
    @font-face{
        font-family:"Mont ExtraBold";
        font-style:normal;
        src:url("./font/Montserrat-ExtraBold.woff2") 
        format("woff2"),
        url("./font/Montserrat-ExtraBold.woff") 
        format("woff")
    }    
    html, body {
        height:100%;
        font-family:"Mont Light";
    }    
    #root{
        height:100%
    }    
    h2{
        margin:10px;
        font-family:"Mont Bold";
        font-size:1.8rem
    }`;
export default GlobalStyle;
