// import {useEffect, useRef} from "react";
//
// export const useObserver = (ref, canLoad: boolean, isLoading: boolean, callback: () => void) => {
//     const observer = useRef();
//
//     useEffect(() => {
//         // console.log(isLoading)
//         if (isLoading) return;
//         if (observer.current) observer.current.disconnect();
//
//         var cb = (entries) => {
//             if (entries[0].isIntersecting && canLoad) {
//                 callback()
//             }
//         };
//         observer.current = new IntersectionObserver(cb);
//         observer.current.observe(ref.current)
//     }, [isLoading])
// }
import React, { useEffect, useRef } from "react";

type ObserverCallback = () => void;

export const useObserver = (
    ref: React.RefObject<HTMLDivElement>,
    canLoad: boolean,
    isLoading: boolean,
    callback: ObserverCallback
): void => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const cb: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };

        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current!);

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [isLoading]);
};