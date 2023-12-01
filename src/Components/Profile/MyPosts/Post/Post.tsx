import React from "react";
import classes from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {useNavigate} from "react-router-dom";
// import classes from "./Post.module.css"
// import userPhoto from "../../../../assets/images/"

type PostElementType = {
    number: number
    removePost: (id: number) => void
    id: number
    name: string
    massage: string
    key: number
}

const Post: React.FC<PostElementType> = (props) => {

    // let [redactMode, setRedactMode] = useState(false)
    // let [message, setMessage] = useState(props.message)
    //
    // useEffect(() => {
    //     setRedactMode(false)
    // }, [props.message])
    //
    // let activateEditMode = () => {
    //     if (props.authorizedUserId === props.profileId) {
    //         setRedactMode(true);
    //     }
    // }
    //
    // let deactivateEditMode = () => {
    //     setRedactMode(false)
    //     props.updatePost(message, props.id)
    // }
    //
    // let onPostMessageRedact = (text) => {
    //     setMessage(text.currentTarget.value)
    // }

    const router = useNavigate()

    let removePost = () => {
        props.removePost(props.id)
    }
    return (
        <div className={classes.item}>
            <div>{props.number}</div>
            <div><span>{props.name}</span></div>
            <img src={userPhoto} className={classes.avatar}/>
            <div>
                {
                    // redactMode
                    // ? <div>
                    //     <input onChange={onPostMessageRedact}
                    //            autoFocus={true}
                    //            onBlur={deactivateEditMode}
                    //            value={props.massage}
                    //     />
                    // </div>
                    // :
                    <div>
                        <span
                            // onDoubleClick={activateEditMode}
                        >
                            {props.massage}
                        </span>
                    </div>
                }
            </div>
            {/*<div>*/}
            {/*    <span>like </span>*/}
            {/*    {props.likes}*/}
            {/*</div>*/}
            <div className={classes.button}>
                <button onClick={() => {router(`/posts/${props.id}`)}}>Open</button>
                <button onClick={removePost}>Delete post</button>
            </div>
        </div>
    )
}

export default Post;
