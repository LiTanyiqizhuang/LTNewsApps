/**
 * 这里定义 action 的type常量
 */
// 修改工作
export const CHANGE_WORK = 'CHANGE_WORK'
// 修改头部
export const CHANGE_HEAD = 'CHANGE_HEAD'
// 请求新闻
export const REQUEST_NEWS = 'REQUEST_NEWS'

/**
 * 这里定义 action 的 status常量，用于判断一些一部状态
 */
export const REQUESTING = 'loading' // 加载中
export const REQUEST_SUCCESS = 'success' // 加载成功
export const REQUEST_ERROR = 'error' // 加载失败