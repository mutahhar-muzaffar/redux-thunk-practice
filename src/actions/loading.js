export const IS_LOADING = 'IS_LOADING'
export const IS_NOT_LOADING = 'IS_NOT_LOADING'

export const startLoading = () => ({ type: IS_LOADING })
export const stopLoading = () => ({ type: IS_NOT_LOADING })
