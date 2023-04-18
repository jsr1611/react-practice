import styled from "styled-components";
import loginState from "@/global/loginState";

import { useRecoilState } from "recoil";

type Props = {
    title: string;
    description?: string;
    year: number;
};

const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

/**
 * @description Footer Component
 * @see https://www.jumanazar.uz/react-practice
 */
function Footer({ title, description, year }: Props) {
    const [userInfo] = useRecoilState(loginState);
    return (
        <FooterContainer>
            <h1>
                {userInfo.userId} {year}
            </h1>
        </FooterContainer>
    );
}

export default Footer;
