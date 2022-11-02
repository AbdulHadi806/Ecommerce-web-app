import {GETDATA, ADDCARTITEMS,COUNTADD , REMOVEITEM, PRODUCTDETAILS, ADDUSERSIGNIN, userLogin} from "../redux/type.js"


export const apiFetcherDispatch = (data) => {
    return {
        type: GETDATA,
        payload: data
    }
}


export const filterList = (obj) => {
    return {
        type: ADDCARTITEMS,
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

export const userSignInHandler = (...data) => {
    return {
        type: ADDUSERSIGNIN,
        payload: data
    }
}
export const userLoginHandler = (...data) => {
    return {
        type: userLogin,
        payload:data
    }
}

export const countAdd = (id) => {
    return {
        type: COUNTADD,
        payload:id
    }
}