import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {PostCommentsType, PostType} from "../../../../../utils/generalTypes";
// import userPhoto from "../../../../../assets/images/user.png";
// import classes from "../Post.module.css";
const {userPhoto} = require("../../../../../assets/images/user.png")
const {classes} = require("../Post.module.css")

type PostIdPageType = {
    post: Array<PostType>
    comments: Array<PostCommentsType>
    getPostById: (id: string | undefined) => void
    getPostComments: (id: string | undefined) => void
}

// type RootParamsTypeType = typeof useParams
// type ParamsType = ReturnType<RootParamsTypeType>

type UserItemPageParams = {
    id: string | undefined
}

const PostIdPage: React.FC<PostIdPageType> = (props) => {
    const params = useParams<UserItemPageParams>()
    // console.log(props)
    useEffect(() => {
        props.getPostById(params.id)
        props.getPostComments(params.id)
    }, [props.post, props.comments])
    //Не работает. Попробовать useMemo
    const post = props.post[0]
    return (
        <div>
            <h1>Post page with ID = {params.id}</h1>
            <div>
                <div>{post.id}</div>
                <div>
                    <span>
                        {post.title}
                    </span>
                </div>
                {/*<img src={*/}
                {/*    post.photos != null ? post.photos : userPhoto*/}
                {/*} className={classes.avatar}/>*/}
                <div>
                    {
                        <div>
                            <span>
                                {post.body}
                            </span>
                        </div>
                    }
                </div>
            </div>
            <h1>Comments</h1>
            <div>
                <div>
                    {
                        props.comments.map(comment => <div>
                            <div>{comment.id}</div>
                            {/*<img src={*/}
                            {/*    comment.photos != null ? comment.photos : userPhoto*/}
                            {/*} className={classes.avatar}/>*/}
                            <div>
                                <span>
                                    {comment.name}
                                </span>
                            </div>
                            <div>
                                <span>
                                    {comment.email}
                                </span>
                            </div>
                            <div>
                                {
                                    <div>
                                        <span>
                                            {comment.body}
                                        </span>
                                    </div>
                                }
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostIdPage;