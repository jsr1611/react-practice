/**
 * @description Footer Component
 * @see https://www.jumanazar.uz/react-practice
 *
 */

type Props = {
    title: string;
    description?: string;
    year: number;
};

function Footer({ title, description, year }: Props) {
    return (
        <>
            <h1>
                {title} {year}
            </h1>
        </>
    );
}

export default Footer;
