import {GETDATA, CARTITEMS,COUNTADD,COUNTREMOVE , REMOVEITEM, PRODUCTDETAILS, USERLOGIN} from "../redux/type.js"


export const apiFetcherDispatch = (data) => {
    return {
        type: GETDATA,
        payload: data
    }
}


export const filterList = (obj) => {
    return {
        type: CARTITEMS,
        payload: obj
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVEITEM,
        payload: id
    }
}

export const descriptionHandler = (id) => {
    return {
        type: PRODUCTDETAILS,
        payload: id
    }
}

export const userLoginHandler = (data) => {
    return {
        type: USERLOGIN,
        payload: data
    }
}

export const countAdd = (id) => {
    return {
        type: COUNTADD,
        payload:id
    }
}