import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    height: 30px;
    width: 60px;
`;

/**
 * @description Error page for pages that don't exist
 */
function NotFound() {
    //router-info
    const navigate = useNavigate();

    //event
    const onBack = () => {
        navigate(-1);
    };

    //view
    return (
        <>
            <h1>Page Not Found</h1>
            <Button onClick={onBack}> Back </Button>
        </>
    );
}

export default NotFound;
