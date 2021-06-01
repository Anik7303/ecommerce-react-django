export const extractErrorMessage = (error) =>
    error.response && error.response.data.message
        ? error.response.data.message
        : error.message

export const parseSearchParams = (value) => {
    let params = {}
    const pairs = value.replace(/^\?/, '').split('&')

    for (let pair of pairs) {
        const [key, value] = pair.split('=')
        params[key] = value
    }
    return params
}
