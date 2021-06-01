export const extractErrorMessage = (error) =>
    error.response && error.response.data.message
        ? error.response.data.message
        : error.message