import {AppStateType} from "./redux-store";

export const getAuthUserId = (state: AppStateType) => {
    return state.auth.userId
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