import {useParams} from "react-router-dom";
import React from "react";

export function withRouter(Children: React.ComponentType) {
    return (props: any) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}