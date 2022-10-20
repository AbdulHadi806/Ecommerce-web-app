

export const apiFetcherDispatch = (data) => {
    return {
        type: 'get-Data',
        payload: data
    }
    
}
export const addHandler = () => {
    return {
        type: 'CountAdd'
    }
}

export const removeCountHandler = () => {
    return {
        type: "COUNTREMOVE"
    }
}
export const filterList = (id) => {
    return {
        type: 'FilterList',
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