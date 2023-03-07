/**
 * @description Sidebar Component
 * @see https://www.jumanazar.uz/react-practice
 */

type Props = {
    title: string;
    description?: string;
    menu?: string;
};

function Sidebar({ title, description, menu }: Props) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{menu}</h2>
        </>
    );
}

export default Sidebar;
