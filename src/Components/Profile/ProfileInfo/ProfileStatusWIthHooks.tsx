import React, {useEffect, useState} from "react"
import classes from "./ProfileInfo.module.css";
// const {classes} = require("./ProfileInfo.module.css")

type ProfileStatusType = {
    status: string
    profileId: number
    updateStatus: (statusText: string) => void
    authorizedUserId: number | null
}

const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {setStatus(props.status)}, [props.status])

    let activateEditMode = () => {
        if (props.authorizedUserId === props.profileId) {
            setEditMode(true)
        }
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (text: { currentTarget: { value: React.SetStateAction<string> } }) => {
        setStatus(text.currentTarget.value)
    }
    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}
                    />
                </div>
                : <div>
                        <span onDoubleClick={activateEditMode}>
                            {status || "-----"}
                        </span>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
