import React, {useEffect, useMemo, useState} from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import MySelect from "../../UI/MySelect";
import {useSortAndSearch} from "../../hooks/useSortAndSearch"
import MySlicedPages from "../../UI/MySlicedPages/MySlicedPages";
import {NavLink} from "react-router-dom";
import {UserType} from "../../utils/generalTypes";
// const {classes} = require("./Users.module.css");
// const {userPhoto} = require("../../assets/images/user.png");
// const {MySelect} = require("../../UI/MySelect");
// const {useSortedAndSearch} = require("../../UI/MySlicedPages/MySlicedPages");
// const {MySlicedPages} = require("../../UI/MySlicedPages/MySlicedPages");

type UsersPageType = {
    currentPage: number
    deleteUsers: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    postUsers: (userId: number) => void
    getFriends: (currentPage: number | null, pageSize: number | null) => void
    isAuth: boolean
    isFollowingInProgress: Array<number | null>
    isShowPreloader: boolean
    onPageChange: (pageNumber: number) => void
    onSetSelectedSort: (sort: string) => void
    onSetSearchQuery: (searchQuery: string) => void
    onSetSortUsers: (newUsers: Array<UserType>) => void
    pageSize: number
    searchQuery: string
    selectedSort: string
    setCurrentPageForUsers: (page: number) => void
    userTotalCount: string | undefined
    users: Array<UserType>
}

const Users: React.FC<UsersPageType> = (props) => {
    // let pagesCount = Math.ceil(props.userTotalCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i < pagesCount; i++) {
    //     pages.push(i);
    // }
    // let curP = props.currentPage;
    // let curPF = ((curP - 10) < 0) ? 0 : curP - 10;
    // let curPL = curP + 10;
    // let slicedPages = pages.slice(curPF, curPL);

    const [users, setUsers] = useState(props.users)
    const sortedAndSearchUsers = useSortAndSearch(users, props.selectedSort, props.searchQuery)

    useEffect(() => {
        setUsers(props.users)
    }, [props.users])

    // const sortedUsers = useMemo(() => {
    //     if (props.selectedSort) {
    //         // props.onSetSortUsers([...users]
    //         //     .sort((a, b) => a[props.selectedSort]
    //         //         .localeCompare(b[props.selectedSort])))
    //         return [...users].sort((a, b) => a[props.selectedSort].localeCompare(b[props.selectedSort]))
    //     } else {
    //         return props.users
    //     }
    // }, [props.selectedSort, props.users])
    //
    // const sortedAndSearchUsers = useMemo(() => {
    //     return sortedUsers
    //         .filter(user => user.name.toLowerCase().includes(props.searchQuery.toLowerCase()))
    // }, [props.searchQuery, sortedUsers])

    const sortUsers = (sort: string) => {
        props.onSetSelectedSort(sort)
    }

    return <div>
        <div>
            <input
                onChange={e => props.onSetSearchQuery(e.target.value)}
                value={props.searchQuery}
                placeholder={"Search..."}
            />
        </div>
        <div className={classes.paddingBottom}>
            <MySelect value={props.selectedSort}
                      onChange={sortUsers}
                      defaultValue={"Сортировка"}
                      options={[
                          {value: "name", name: "NameSort"},
                          {value: "", name: "SortOff"}
                      ]}
            />
        </div>
        {/*Номера страниц*/}
        {/*{slicedPages.map(page => {*/}
        {/*    return <span className={props.currentPage === page ? classes.activeNumber : " "}*/}
        {/*                 onClick={() => {*/}
        {/*                     props.onPageChange(page)*/}
        {/*                 }*/}
        {/*                 }>{page} </span>*/}
        {/*})}*/}
        <MySlicedPages objectTotalCount={props.userTotalCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChange={props.onPageChange}
        />
        {/*Номера страниц*/}
        <div>
            {sortedAndSearchUsers.map(user => {const typedUser = user as UserType; 
                return <div key={typedUser.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + typedUser.id}>
                            <img
                                className={classes.avatar}
                                src={typedUser.photos.small != null ? typedUser.photos.small : userPhoto}
                            />
                        </NavLink>
                    </div>
                    {props.isAuth
                        ? <div> {typedUser.followed
                            ? <button disabled={props.isFollowingInProgress.some(id => id === typedUser.id)}
                                      onClick={() => {
                                          props.deleteUsers(typedUser.id)
                                          // props.getFriends()
                                      }
                                    }>Follow</button>
                            : <button disabled={props.isFollowingInProgress.some(id => id === typedUser.id)}
                                      onClick={() => {
                                          props.postUsers(typedUser.id)
                                          // props.getFriends()
                                      }
                                    }>Unfollow</button>
                        }
                        </div>
                        : ""
                    }
                </span>
                <span>
                <span>
                    <div>
                        {typedUser.name}
                    </div>
                    <div>
                        {typedUser.status}
                    </div>
                </span>
                </span>
            </div>})}
        </div>
    </div>
}

export default Users;