import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const InputArea = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
`;

const TodoItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const TodoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    margin-right: 10px;
    height: 20px;
    width: 20px;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const Task = styled.span<{ completed: boolean }>`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const AddButton = styled(Button)`
    margin-left: 10px;
    background-color: #17a2b8;
    color: #fff;
`;

const EditButton = styled(Button)`
    background-color: #f5dd09;
    color: #fff;
`;

const DeleteButton = styled(Button)`
    background-color: #dc3545;
    color: #fff;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;

    &:focus {
        outline: none;
        border-color: #17a2b8;
    }
`;

type ToDo = {
    completed: boolean;
    task: string;
};

const sampleList = [
    { completed: false, task: "React" },
    { completed: false, task: "AWS" },
    { completed: false, task: "DevOps" },
];

/**
 * @description 할 일 목록
 */
function TodoList() {
    const [inputValue, setInput] = useState<string>("");

    const [list, setList] = useState<ToDo[]>(sampleList);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const onAdd = () => {
        if (!inputValue) {
            alert("Nothing was entered!");
            return;
        }

        setList((prevList) => {
            const addRow = { completed: false, task: inputValue };
            const updList = prevList.concat(addRow);
            return updList;
        });
        setInput("");
    };

    const onDelete = (index: number) => {
        console.log(index);
        setList((prevList) => {
            const updList = prevList.filter((item, idx) => idx !== index);
            return updList;
        });
    };

    const onEdit = (index: number) => {
        const updVal = prompt();

        if (!updVal) {
            alert("Nothing was entered!");
            return;
        }

        setList((prevList) => {
            const updList = prevList.map((item, idx) => {
                if (idx === index) {
                    const updRow = { ...item, task: updVal };
                    return updRow;
                } else {
                    return item;
                }
            });

            return updList;
        });
    };

    const onCheck = (index: number) => {
        setList((prevList) => {
            const updList = prevList.map((item, idx) => {
                if (idx === index) {
                    const updRow = { ...item, completed: !item.completed };
                    return updRow;
                } else {
                    return item;
                }
            });
            return updList;
        });
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    // view
    return (
        <Wrapper>
            <Title>Todo List</Title>
            <form onSubmit={onSubmit}>
                <InputArea>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={onChange}
                        placeholder="할 일을 입력해주세요."
                    />
                    <AddButton onClick={onAdd}> Add</AddButton>
                </InputArea>
            </form>
            <TodoItems>
                {list.map(({ completed, task }, index) => (
                    <TodoItem key={index}>
                        <Flex>
                            <Checkbox onClick={() => onCheck(index)} />
                            <Task completed={false}>{task}</Task>
                        </Flex>
                        <div>
                            <EditButton onClick={() => onEdit(index)}>
                                Edit
                            </EditButton>
                            <DeleteButton onClick={() => onDelete(index)}>
                                Delete
                            </DeleteButton>
                        </div>
                    </TodoItem>
                ))}
            </TodoItems>
        </Wrapper>
    );
}

export default TodoList;
