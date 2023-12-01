import React, {useEffect, useMemo, useRef, useState} from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {PostType, UserType} from "../../../utils/generalTypes";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import PostsFilter from "./PostsFilter"
import MyModal from "../../../UI/MyModal/MyModal"
import {required, maxLengthCreator} from "../../../utils/validators/validators"
import {Element} from "../../../common/FormsControls/FormsControls"
import {useSortAndSearch} from "../../../hooks/useSortAndSearch"
import MySlicedPages from "../../../UI/MySlicedPages/MySlicedPages"
import Preloader from "../../../assets/Preloader/Preloader"
import {useObserver} from"../../../hooks/useObserver"
// import MySelect from "../../../UI/MySelect";
// import {CSSTransition, TransitionGroup} from "react-transition-group";

const maxLength = maxLengthCreator(5000)
const Textarea = Element("textarea");

type MyPostsFormPropsType = {
    posts: Array<PostType>
    isAuth: boolean
    userId: number | null
    selectedSort: string
    searchQuery: string
    objectTotalCount: string | undefined
    pageSize: number
    currentPage: number
    isShowPreloader: boolean
    onAddPost: (userId: number, name: string, text: string, id: number) => void
    removePost: (id: number) => void
    onSetSelectedSort: (sort: string) => void
    onSetSortPosts: (newPosts: Array<PostType>) => void
    onSetSearchQuery: (searchQuery: string) => void
    getPosts: (currentPage: number, pageSize: number, posts: Array<PostType> | null) => void
    onSetCurrentPageForPosts: (page: number) => void
}

type MyPostsFormDataType = {
    postName: string
    post: string
}

type MyPostsFormOwnPropsType = {}

const MyPostsForm: React.FC<
    InjectedFormProps<MyPostsFormDataType, MyPostsFormOwnPropsType> & MyPostsFormOwnPropsType
    > = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Header"}
                    name={"postName"}
                    validate={[required, maxLength]}
                    // onChange={props.onPostChange}
                    // value={props.newPostText}
                    component={Textarea}
                />
            </div>
            <div>
                <Field
                    placeholder={"post"}
                    name={"post"}
                    validate={[required, maxLength]}
                    // onChange={props.onPostChange}
                    // value={props.newPostText}
                    component={Textarea}
                />
            </div>
            <div>
                <button
                    // onClick={props.addPostToState}
                >Post
                </button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm<MyPostsFormDataType, MyPostsFormOwnPropsType>({form: "post"})(MyPostsForm)

const MyPosts: React.FC<MyPostsFormPropsType> = (props) => {
    const lastElement = useRef<(HTMLDivElement)>(null)

    useEffect(() => {
        props.getPosts(props.currentPage, props.pageSize, null)
        props.getPosts(props.currentPage, props.pageSize, null)
    }, [])

    // useEffect(() => {
    //     // console.log(props.currentPage)
    //     setCurrentPage(props.currentPage)
    // }, [props.currentPage])

    let currentPage = props.currentPage

    const callBack = () => {
        // console.log(currentPage, props.isShowPreloader, "observer")
        onPageChange(currentPage + 1);
    }

    useObserver(
        lastElement,
        currentPage < (Number(props.objectTotalCount) / props.pageSize),
        props.isShowPreloader,
        callBack
    )
    // console.log(currentPage, "render")

    useEffect(() => {
        posts = props.posts
    }, [props.posts])

    let posts = props.posts
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = useSortAndSearch(posts, props.selectedSort, props.searchQuery)

    // const sortedPosts = useMemo(() => {
    //     if (props.selectedSort) {
    //         // props.onSetSortPosts([...posts]
    //         //     .sort((a, b) => a[props.selectedSort]
    //         //         .localeCompare(b[props.selectedSort])))
    //         return [...posts].sort((a, b) => a[props.selectedSort].localeCompare(b[props.selectedSort]))
    //     } else {
    //         return props.posts
    //     }
    // }, [props.selectedSort, props.posts])
    //
    // const sortedAndSearchPosts = useMemo(() => {
    //     return sortedPosts
    //         .filter(post => post.message.toLowerCase().includes(props.searchQuery.toLowerCase()))
    // }, [props.searchQuery, sortedPosts])

    const onSubmit = (values: MyPostsFormDataType) => {
        if(props.userId){
            props.onAddPost(props.userId, values.postName, values.post, Date.now());
        }
        // console.log(values.postName, values.post, Date.now())
        setModal(false)
    }

    const sortPosts = (sort: string) => {
        props.onSetSelectedSort(sort)
    }

    const onPageChange = (pageNumber: number) => {
        props.onSetCurrentPageForPosts(pageNumber)
        props.getPosts(pageNumber, props.pageSize, posts)
    }

    // const checkUpdate = useMemo(() => {
    //     sortedAndSearchPosts и логика сравнения массивов
    // })

    return (
        <>
            {!props.isAuth
                ? <div></div>
                : <div className={classes.myPosts}>
                    My posts:
                    <div>
                        New post
                        <div style={{marginTop: 10, marginBottom: 10}}>
                            <button onClick={() => setModal(true)}>Add Post</button>
                        </div>
                        <div>
                            <MyModal visible={modal} setVisible={setModal}>
                                <MyPostsReduxForm
                                    onSubmit={onSubmit}
                                />
                            </MyModal>
                        </div>
                    </div>
                    <hr/>
                    <div className={classes.posts}>
                        <PostsFilter
                            onSetSearchQuery={props.onSetSearchQuery}
                            searchQuery={props.searchQuery}
                            selectedSort={props.selectedSort}
                            sortPosts={sortPosts}
                        />
                        {/*<MySelect*/}
                        {/*    value={props.pageSize}*/}
                        {/*    onChange={}*/}
                        {/*/>*/}
                        <MySlicedPages objectTotalCount={props.objectTotalCount}
                                       pageSize={props.pageSize}
                                       currentPage={currentPage}
                                       onPageChange={onPageChange}
                        />
                        {props.isShowPreloader
                            && <Preloader/>}
                        {
                            sortedAndSearchPosts.map((post: PostType | UserType, index: number) => {
                                    const typedPost = post as PostType;
                                    return (
                                        <Post
                                            number={index + 1}
                                            removePost={props.removePost}
                                            id={typedPost.id}
                                            name={typedPost.title}
                                            massage={typedPost.body}
                                            key={typedPost.id}
                                        />
                                    );
                            })
                        }
                        <div ref={lastElement} style={{height: 20, background: "red"}}/>
                        {sortedAndSearchPosts.length === 0 && !props.isShowPreloader
                            && <h1 className={classes.headlines}>Posts not found!</h1>}
                    </div>
                </div>}
        </>
    )
}

export default MyPosts;

