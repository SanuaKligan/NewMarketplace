import React, {useEffect, useMemo, useRef, useState} from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {PostType, UserType} from "../../../utils/generalTypes";
import classes from "./MyPosts.module.css"
import Post from "./Product/Product"
import PostsFilter from "./PostsFilter"
import {required, maxLengthCreator} from "../../../utils/validators/validators"
import {Element} from "../../../common/FormsControls/FormsControls"
import {useSortAndSearch} from "../../../hooks/useSortAndSearch"
import MySlicedPages from "../../../UI/MySlicedPages/MySlicedPages"
import Preloader from "../../../assets/Preloader/Preloader"
import {useObserver} from"../../../hooks/useObserver"
import RangeSlider from "../../../UI/RangeSlider/RangeSlider";
// import MySelect from "../../../UI/MySelect";
// import {CSSTransition, TransitionGroup} from "react-transition-group";

const maxLength = maxLengthCreator(5000)
const Textarea = Element("textarea");

type MyPostsFormPropsType = {
    posts: Array<PostType>
    selectedSort: string
    searchQuery: string
    isShowPreloader: boolean
    onSetSelectedSort: (sort: string) => void
    onSetSortPosts: (newPosts: Array<PostType>) => void
    onSetSearchQuery: (searchQuery: string) => void
    getPosts: (currentPage: number, pageSize: number, posts: Array<PostType> | null) => void
}

const MyPosts: React.FC<MyPostsFormPropsType> = (props) => {
    // const lastElement = useRef<(HTMLDivElement)>(null)

    // useEffect(() => {
    //     props.getPosts(props.currentPage, props.pageSize, null)
    //     props.getPosts(props.currentPage, props.pageSize, null)
    // }, [])

    // let currentPage = props.currentPage

    // const callBack = () => {
    //     // console.log(currentPage, props.isShowPreloader, "observer")
    //     // onPageChange(currentPage + 1);
    // }

    // useObserver(
    //     lastElement,
    //     currentPage < (Number(props.objectTotalCount) / props.pageSize),
    //     props.isShowPreloader,
    //     callBack
    // )

    // useEffect(() => {
    //     posts = props.posts
    // }, [props.posts])

    // let posts = props.posts
    // const sortedAndSearchPosts = useSortAndSearch(posts, props.selectedSort, props.searchQuery)

    // const sortPosts = (sort: string) => {
    //     props.onSetSelectedSort(sort)
    // }
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (item: string) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const items = ["Все", "Стол", "Стул", "Стеллаж", "Диван", "Кресло", "Прочее"];

    return (
        <div className={classes.products}>
            <div className={classes.leftFilterBlock}>
                <div className={classes.allWoodSpecies}>
                    <div><button>Все породы дерева</button></div>
                    <div><button>Хвоя</button></div>
                    <div><button>Ангарская сосна</button></div>
                    <div><button>Берёза</button></div>
                    <div><button>Лиственница</button></div>
                    <div><button>Дуб</button></div>
                    <div><button>Кедр</button></div>
                </div>
                <RangeSlider />
                <div className={classes.productsType}>
                    <h2>Тип товара:</h2>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    id={`item-${index}`}
                                    value={item}
                                    checked={selectedItems.includes(item)}
                                    onChange={() => handleCheckboxChange(item)}
                                />
                                <label htmlFor={`item-${index}`}>{item}</label>
                            </li>
                        ))}
                    </ul>
                    <h3>Выбранные значения:</h3>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={classes.rightProductsBlock}>
                <div className={classes.searchAndSort}>
                    <div><input placeholder={"Поиск"} className={classes.field} /></div>
                    <div><input placeholder={"Порядок: по умолчанию"} className={classes.field} /></div>
                </div>
                <div className={classes.allWoodSpecies}>

                </div>
                <div className={classes.allWoodSpecies}>
                    
                </div>
            </div>
            

            {/* <div className={classes.posts}>
                <PostsFilter
                    onSetSearchQuery={props.onSetSearchQuery}
                    searchQuery={props.searchQuery}
                    selectedSort={props.selectedSort}
                    sortPosts={sortPosts}
                />
                {props.isShowPreloader
                    && <Preloader/>}
                {
                    sortedAndSearchPosts.map((post: PostType | UserType, index: number) => {
                            const typedPost = post as PostType;
                            return (
                                <Post
                                    number={index + 1}
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
            </div> */}
        </div>
    )
}

export default MyPosts;

