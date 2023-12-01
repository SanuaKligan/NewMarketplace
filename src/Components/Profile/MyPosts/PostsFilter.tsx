import React from "react";
import classes from "./MyPosts.module.css";
import MySelect from "../../../UI/MySelect";

type PostFilterPropsType = {
    onSetSearchQuery: (searchQuery: string) => void
    searchQuery: string
    selectedSort: string
    sortPosts: (sort: string) => void
}
const PostsFilter: React.FC<PostFilterPropsType> = (props) => {
    return (
        <div>
            <div>
                <input
                    onChange={e => props.onSetSearchQuery(e.target.value)}
                    value={props.searchQuery}
                    placeholder={"Search..."}
                />
            </div>
            <div className={classes.paddingBottom}>
                <MySelect value={props.selectedSort}
                          onChange={props.sortPosts}
                          defaultValue={"Сортировка"}
                          options={[
                              {value: "title", name: "HeaderSort"},
                              {value: "body", name: "BodySort"}
                          ]}
                />
            </div>
        </div>
    )
}

export default PostsFilter;

