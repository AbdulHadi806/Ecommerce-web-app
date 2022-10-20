

export const apiFetcherDispatch = (data) => {
    return {
        type: 'GETDATA',
        payload: data
    }
    
}
export const addHandler = () => {
    return {
        type: 'COUNTADD'
    }
}

export const removeCountHandler = () => {
    return {
        type: "COUNTREMOVE"
    }
}
export const filterList = (id) => {
    return {
        type: 'FILTERLIST',
        payload: id
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVEITEM',
        payload: id
    }
}

export const descriptionHandler = (id) => {
    return {
        type: 'SHOWDESCRIPTION',
        payload: id
    }
}

export const userLoginHandler = (data) => {
    return {
        type: 'USERLOGIN',
        payload: data
    }
}