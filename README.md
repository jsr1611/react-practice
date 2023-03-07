# React Project Standard

#### 2023.02.28 day 1

## Environment setup

-   Plugins
    -   ESLint
    -   prettier
    -   material
-   Dev packages

    -   Node.js latest LTS version
    -   tsx = typescript on react

-   Format

    -   CamelCase Componant Naming

-   Craco
    -   helps with routes/paths replacing all "../../App" with just "@/App"

#### 2023.03.07 day 2

## Components and Props

-   Components

    -   declare components as functions and export them
    -   Header.tsx file
        ```
        function Header() {
            //view
            return <h1>Header</h1>;
            }
        export default Header;
        ```

-   Props

    -   declare props with type (typescript) keyword
    -   use ? to make props elements non-required
    -   Props usage with Components:

        -   Header.tsx file:

            ```
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
            ```

        -   App.tsx file:

            ```
                /**
                * Root Component
                * @see https://www.jumanazar.uz/react-practice
                */

                function App() {
                    //js
                    //view
                    return (
                        <>
                            <Header
                                name="Jumanazar"
                                title="Java Engineer"
                                description="SweetK"
                            />
                        </>
                    );
                }
            ```

-   Styled-Components
    -   use -D to install it as dev dependency which is not added in deployment build
