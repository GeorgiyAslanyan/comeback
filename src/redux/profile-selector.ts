import {AppStateType} from "./redux-store";

export const getUserImg = (state: AppStateType) => {
    return state.profile.userImg
}

export const getUserName = (state: AppStateType) => {
    return state.profile.userName
}

export const getUserStatus = (state: AppStateType) => {
    return state.profile.status
}

export const getUserPhone = (state: AppStateType) => {
    return state.profile.phone
}
//
// export const getVideosFilter = (state: AppStateType) => {
//     return state.videosPage.filter
// }
//
// export const getTotalItemsCount = (state: AppStateType) => {
//     return state.videosPage.totalItemsCount
// }
//
// export const getCurrentPage = (state: AppStateType) => {
//     return state.videosPage.currentPage
// }
//
// export const getPageSize = (state: AppStateType) => {
//     return state.videosPage.pageSize
// }
//
// export const getIsFetching = (state: AppStateType) => {
//     return state.videosPage.isFetching
// }