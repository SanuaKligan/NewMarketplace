import React from "react"
import classes from "./MySlicedPages.module.css"
import {useSlicePages} from "../../hooks/useSlicePages"
// const {classes} = require("./MySlicedPages.module.css")
// const {useSlicePages} = require("../../hooks/useSlicePages")

type MySlicedPagesType = {
    objectTotalCount: string | undefined
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
}

const MySlicedPages: React.FC<MySlicedPagesType> = (props) => {
    // console.log(props.objectTotalCount)
    let slicedPages = useSlicePages(Number(props.objectTotalCount), props.pageSize, props.currentPage)
    // console.log(slicedPages)
    return (
        <div>
            {slicedPages.map((page: number) => {
                return <span className={props.currentPage === page ? classes.activeNumber : " "}
                             onClick={() => {
                                 props.onPageChange(page)
                             }
                             }>{page} </span>
            })}
        </div>
    )
}

export default MySlicedPages;