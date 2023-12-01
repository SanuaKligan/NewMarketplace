import {useMemo} from "react";

export const useSlicePages = (totalCount: number, pageSize: number, currentPage: number) => {
    const slicedPages: Array<number> = useMemo(() => {
        let pagesCount = Math.ceil(totalCount / pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let curP = currentPage;
        let curPF = ((curP - 10) < 0) ? 0 : curP - 10;
        let curPL = curP + 10;
        return pages.slice(curPF, curPL);
    }, [totalCount, currentPage])
    // console.log(slicedPages)
    return slicedPages
}