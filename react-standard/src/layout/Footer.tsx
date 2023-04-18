import styled from "styled-components";
import { useLoginState } from "@/global/loginState";

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
    const { login } = useLoginState();
    return (
        <FooterContainer>
            <h1>
                {login.userId} {year}
            </h1>
        </FooterContainer>
    );
}

export default Footer;
