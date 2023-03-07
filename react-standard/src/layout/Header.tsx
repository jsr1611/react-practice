/**
 * @description Header Component
 * @see https://www.jumanazar.uz/react-practice
 */

type Props = {
    title: string;
    description: string;
};

function Header({ title, description }: Props) {
    //view
    return (
        <>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </>
    );
}

export default Header;
