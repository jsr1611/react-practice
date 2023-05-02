import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

import { Table, TableBody, TableHead } from "@/styles/Board";

import { all } from "axios";
import { getSampleData2, Params } from "@/api/board";

const CheckboxLabel = styled.label`
    display: inline-block;
    margin-right: 10px;
    padding: 5px;
`;

type CheckboxItem = {
    label: string;
    checked: boolean;
};

type OptionType = {
    value: string;
    label: string;
};

type SearchCondition = {
    evalYearSeq: number;
    currentPageNo: number;
    allLv: CheckboxItem[];
    scaleLv: CheckboxItem[];
    searchType: string;
    searchWord: string;
};

const options: OptionType[] = [
    { value: "unvrsNm", label: "종목명" },
    { value: "asymbol", label: "종목코드" },
];

const checkList1: CheckboxItem[] = [
    { label: "A", checked: false },
    { label: "AA", checked: false },
    { label: "B", checked: false },
    { label: "BB", checked: false },
];

const checkList2: CheckboxItem[] = [
    { label: "A", checked: false },
    { label: "AA", checked: false },
    { label: "B", checked: false },
    { label: "BB", checked: false },
];

/**
 * @description 게시판
 */
function Board() {
    // state
    const [searchCondition, setSearchCondition] = useState<SearchCondition>({
        evalYearSeq: 1,
        currentPageNo: 1,
        allLv: checkList1,
        scaleLv: checkList2,
        searchType: "",
        searchWord: "",
    });
    const [list, setList] = useState<any[]>([]);

    // read-only
    const { allLv, scaleLv, searchType, searchWord } = searchCondition;

    //event

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchCondition((prevState) => {
            return {
                ...prevState,
                searchWord: e.target.value,
            };
        });
    };

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchCondition((prevState) => {
            return {
                ...prevState,
                searchType: e.target.value,
            };
        });
    };

    const onCheck = (
        e: ChangeEvent<HTMLInputElement>,
        index: number,
        checkList: CheckboxItem[]
    ) => {
        // console.log(index + " ===> " + e.target.name);

        const { checked, name } = e.target;

        const update = checkList.map((item, i) =>
            i === index ? { ...item, checked: checked } : item
        );

        setSearchCondition((prevState) => {
            return {
                ...prevState,
                [name]: update,
            };
        });
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const params = {
            ...searchCondition,
            allLv: allLv
                .filter((item) => item.checked)
                .map((item) => item.label)
                .join(","),
            scaleLv: scaleLv
                .filter((item) => item.checked)
                .map((item) => item.label)
                .join(","),
        };

        console.log(params);

        reqSampleData(params);
    };

    //method
    const reqSampleData = async (params: Params) => {
        const result = await getSampleData2(params);

        const { resultList } = result;
        console.log(result);
        setList(resultList);
    };

    // view
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    전체등급 :
                    {allLv.map(({ checked, label }, index) => (
                        <CheckboxLabel key={index}>
                            <input
                                name="allLv"
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => onCheck(e, index, allLv)}
                            />
                            {label}
                        </CheckboxLabel>
                    ))}
                    <select value={searchType} onChange={onSelect}>
                        <option value="" disabled>
                            선택하세요
                        </option>
                        {options.map(({ value, label }, index) => (
                            <option key={index.toString()} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    규모등급 :
                    {scaleLv.map(({ checked, label }, index) => (
                        <CheckboxLabel key={index}>
                            <input
                                name="scaleLv"
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => onCheck(e, index, scaleLv)}
                            />
                            {label}
                        </CheckboxLabel>
                    ))}
                    <input value={searchWord} onChange={onChange} />
                    <button>검색</button>
                </div>
            </form>
            <Table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <TableHead>
                    <tr>
                        <th>필드01</th>
                        <th>필드02</th>
                        <th>필드03</th>
                        <th>필드04</th>
                        <th>필드05</th>
                        <th>필드06</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {list.map(
                        (
                            {
                                unvrsNm,
                                allLvResult,
                                asymbol,
                                scaleLvResult,
                                assetScale,
                            },
                            index
                        ) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{allLvResult}</td>
                                <td>{asymbol}</td>
                                <td>{scaleLvResult}</td>
                                <td>{unvrsNm}</td>
                                <td>{assetScale}</td>
                            </tr>
                        )
                    )}
                </TableBody>
            </Table>
        </>
    );
}

export default Board;
