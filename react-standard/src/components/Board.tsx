import { getSampleData } from "@/api/board";
import { Table, TableBody, TableHead } from "@/styles/Board";
import { useState, useEffect } from "react";

/**
 * @description 게시판
 */
function Board() {
    // state
    const [list, setList] = useState<any[]>([]);

    //method
    const fetchRequest = async () => {
        const result = await getSampleData();

        const { resultList = [] } = result || {}; // error-safe
        // const { resultList} = result; // error-prone but works if correct data format is assigned
        setList(resultList);
        console.log(result);
    };

    //watch
    useEffect(() => {
        fetchRequest();
    }, []);

    // view
    return (
        <>
            <input />
            <button>검색</button>
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
                                aflNm,
                                assetScaleCcdNm,
                                asymbol,
                                currGrade,
                                gicsLv2Nm,
                                gradeDiff,
                            },
                            index
                        ) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{aflNm}</td>
                                <td>{asymbol}</td>
                                <td>{currGrade}</td>
                                <td>{gicsLv2Nm}</td>
                                <td>{gradeDiff}</td>
                            </tr>
                        )
                    )}
                </TableBody>
            </Table>
        </>
    );
}

export default Board;
