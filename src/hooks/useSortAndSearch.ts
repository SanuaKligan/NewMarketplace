import {useMemo} from "react";
import {PostType, UserType} from "../utils/generalTypes";


// const useSort = (objects: Array<PostType | UserType>, selectedSort: string) => {
//     const sortedObjects: Array<PostType | UserType> = useMemo(() => {
//         if (selectedSort) {
//             // props.onSetSortPosts([...posts]
//             //     .sort((a, b) => a[props.selectedSort]
//             //         .localeCompare(b[props.selectedSort])))
//             return [...objects].sort(
//                 (a, b) => a[selectedSort as keyof (PostType | UserType)]
//                     .localeCompare(b[selectedSort as keyof (PostType | UserType)])
//             )
//         }
//         return objects
//     }, [selectedSort, objects])
//
//     return sortedObjects
// }
//
// export const useSortAndSearch = (objects: Array<PostType | UserType>, selectedSort: string, searchQuery: string) => {
//     // console.log(objects)
//     const sortedObjects = useSort(objects, selectedSort)
//     const sortedAndSearchObjects: Array<PostType | UserType> = useMemo(() => {
//         return sortedObjects
//             .filter(object => {
//                 const objectContentValues = Object.values(object)
//                 const objectContent = objectContentValues.map(obj => {
//                     if(Number.isFinite(obj)){
//                         if((obj) && (obj > 9999)) {
//                             obj = 0
//                         }
//                         obj = `${obj}`
//                         return obj
//                     }else {
//                         return obj
//                     }
//                 })
//                 let n = undefined
//                 let objCon0 = objectContent[0]
//                 let objCon1 = objectContent[1]
//                 if(objectContent.length < 2 || !objectContent[2] || !objectContent[3]){
//                     if((objCon0) && (objCon1) && (objCon0.length > objCon1.length)){
//                         n = objCon0
//                     }
//                     else {
//                         n = objCon1
//                     }
//                 }
//                 else{
//                     n = objectContent.reduce((acc, curr) => acc.length > curr.length ? acc : curr);
//                 }
//                 return n.toLowerCase().includes(searchQuery.toLowerCase())
//             })
//         }, [searchQuery, sortedObjects])
//     return sortedAndSearchObjects
// }

const useSort = (
  objects: Array<PostType | UserType>,
  selectedSort: string
): Array<PostType | UserType> => {
  const sortedObjects: Array<PostType | UserType> = useMemo(() => {
    if (selectedSort) {
      return [...objects].sort(
        (a, b) =>
          String(a[selectedSort as keyof (PostType | UserType)] || "")
            .localeCompare(
              String(b[selectedSort as keyof (PostType | UserType)] || "")
            )
      );
    }
    return objects;
  }, [selectedSort, objects]);

  return sortedObjects;
};

export const useSortAndSearch = (
  objects: Array<PostType | UserType>,
  selectedSort: string,
  searchQuery: string
): Array<PostType | UserType> => {
  const sortedObjects = useSort(objects, selectedSort);
  const sortedAndSearchObjects: Array<PostType | UserType> = useMemo(() => {
    return sortedObjects.filter((object) => {
      const objectContent = Object.values(object).map((obj) => {
        if (typeof obj === "number") {
          if (obj && obj > 9999) {
            obj = 0;
          }
          obj = String(obj);
          return obj;
        } else {
          return obj;
        }
      });
      let n: string | boolean | { small: string | null; large: string | null } | null = null;
      let objCon0 = objectContent[0];
      let objCon1 = objectContent[1];
      if (objectContent.length < 2 && !objectContent[2] && !objectContent[3]) {
        if (
          objCon0 &&
          objCon1 &&
          String(objCon0).length > String(objCon1).length
        ) {
          n = objCon0;
        } else {
          n = objCon1;
        }
        console.log(n)
      } else {
        n = objectContent.reduce((acc, curr) =>
          (String(acc).length > String(curr).length ? String(acc) : String(curr)) as
            | string
            | boolean
            | { small: string | null; large: string | null }
        );
      }
      return n
        ? typeof n === "string"
          ? n.toLowerCase().includes(searchQuery.toLowerCase())
          : false
        : false;
    });
  }, [searchQuery, sortedObjects]);
  return sortedAndSearchObjects;
};