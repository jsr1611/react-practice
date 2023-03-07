/**
 * @description Contents Component
 * @see https://www.jumanazar.uz/react-practice
 */

type Props = {
    title: string;
    description?: string;
    version?: number;
};

function Contents({ title, description, version }: Props) {
    return (
        <>
            <h1>{title}</h1>
            <ul>
                <li>
                    <h1>{description}</h1>
                </li>
                <li>
                    <h1>{version}</h1>
                </li>
            </ul>
        </>
    );
}

export default Contents;
