export const apiFetcherDispatch = (data) => {
    return {
        type: 'GETDATA',
        payload: data
    }
    
}

export const countAdd = () => {
    return {
        type: 'COUNTADD'
    }
}

export const filterList = (id) => {
    return {
        type: 'CARTITEMS',
        payload: id
    }
}

export const countRemove = () => {
    return {
        type: 'COUNTREMOVE'
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
        type: 'PRODUCTDETAILS',
        payload: id
    }
}

export const userLoginHandler = (data) => {
    return {
        type: 'USERLOGIN',
        payload: data
    }
}