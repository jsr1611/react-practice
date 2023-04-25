import { Table, TableBody, TableHead } from "@/style/Board";

/**
 * @description 게시판
 */
function Board() {
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
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </TableBody>
            </Table>
        </>
    );
}

export default Board;
