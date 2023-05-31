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

### 2023.03.14 Day 3

## useState and events

-   useState

    -   const [count, setCount] = useState<number>(0);

-   events

    -   uses const func = (evt: ChangeEvent<HtmlElemName>) = >{};

    ```
       //event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
    };
    ```

-   useEffect
    -   usage:
        ```
          //watch
            useEffect(() => {
                //init
                console.log(inputValue);
            }, [inputValue]);
        ```
    -   is used for watching some change.
    -   ex: call some API when some value changes such as useState value.

### 2023.03.21 Day 4

### 2023.04.04 Day 6

-   ToList App

    -   use `map` for rendering lists

    -   using `forEach` does not work because it does not return anything.

### 2023.04.11 Day 7

-   React Router

    -   to use children routes, use `Outlet` from `react-router-dom`
    -   Link
    -   NavLink - has more features

### 2023.04.18 Day 8

-   State Management with Recoil.js

-   Redux alternative, but official and more reactish library
-   Redux is 3rd party, and has great learning curve

### 2023.04.25 Day 9

-   Async data transfer and environment values

-   dependencies:
    -   yarn add axios
    -   yarn add env-cmd

### 2023.05.02 Day 10

-   project

#### 2023.05.29 Day 11

-   TypeScript -D
    -   TypeScript devDependencies are necessary only for developmen purpose. All typescript codes are transpiled into JavaScript while production build
