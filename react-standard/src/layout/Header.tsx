/**
 * @description Header Component
 * @see https://www.jumanazar.uz/react-practice
 */

type Props = {
    name: string;
    title: string;
    description: string;
};

function Header({ name, title, description }: Props) {
    //view
    return (
        <>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <h2>{description}</h2>
        </>
    );
}

export default Header;
