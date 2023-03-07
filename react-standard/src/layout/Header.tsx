/**
 * @description Header Component
 * @see https://www.jumanazar.uz/react-practice
 */

type Props = {
    title: string;
    description: string;
};

function Header(props: Props) {
    //view
    return (
        <>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
        </>
    );
}

export default Header;
