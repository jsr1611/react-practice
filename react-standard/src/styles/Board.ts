import styled from "styled-components";

type StyledProps = {
    marginBottom?: number;
    marginTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    justifyContent?: string;
    flexDirection?: string;
    alignItems?: string;
    width?: string;
    borderTop?: string;
    display?: string;
    fontSize?: number;
    backgroundColor?: string;
    borderRadius?: number;
    padding?: number;
    height?: string;
    position?: string;
    gap?: string;
};

/* image list */
export const ImageThumbWrap = styled.div<StyledProps>`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px 15px;
    margin-top: 30px;
`;
export const ImageThumbItem = styled.div<StyledProps>``;
export const ImageThumb = styled.a<StyledProps>`
    overflow: hidden;
    display: block;
    position: relative;
    width: 232px;
    height: 170px;
    font-size: 0;
    img {
        width: 100%;
    }
`;
export const StrongTitle = styled.div<StyledProps>`
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.05rem;
    margin-top: 10px;
    strong {
        font-weight: 500;
        color: #375bdb;
    }
`;

/* file */
export const Table = styled.table<StyledProps>`
    width: 100%;
    margin: 30px 0 30px;
`;
export const TableHead = styled.thead<StyledProps>`
    th {
        font-size: 16px;
        font-weight: 500;
        background-color: #f3f5fa;
        height: 49px;
        line-height: 49px;
        border-width: 1px 0;
        border-style: solid;
        border-color: #d0d0d0;
    }
`;
export const TableBody = styled.tbody<StyledProps>`
    .btn-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 20px;
    }
    th,
    td {
        border-bottom: 1px solid #d0d0d0;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: -0.05em;
        padding: 15px 10px;
        .strong-title {
            margin-top: 0;
        }
    }
`;
