

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