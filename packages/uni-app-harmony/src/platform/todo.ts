import { extend } from '@vue/shared'
import type {
  AddIntersectionObserverArgs,
  AddMediaQueryObserverArgs,
  RemoveIntersectionObserverArgs,
  RemoveMediaQueryObserverArgs,
  SelectorQueryNodeInfo,
  SelectorQueryRequest,
  SetPageMetaOptions,
} from '@dcloudio/uni-api'
import type { ComponentPublicInstance } from 'vue'
import { type LaunchOptions, createLaunchOptions } from '@dcloudio/uni-core'

export function operateVideoPlayer(
  videoId: string,
  pageId: number,
  type: string,
  data?: unknown
) {
  // TODO: Implement
}

export function operateMap(
  id: string,
  pageId: number,
  type: string,
  data?: unknown,
  operateMapCallback?: (res: any) => void
) {
  // TODO: Implement
}

export const TEMP_PATH = '' // TODO 需要从applicationContext获取

export function addIntersectionObserver(
  { reqId, component, options, callback }: AddIntersectionObserverArgs,
  _pageId: number
) {
  // TODO: Implement
}

export function removeIntersectionObserver(
  { reqId, component }: RemoveIntersectionObserverArgs,
  _pageId: number
) {
  // TODO: Implement
}

export function addMediaQueryObserver(
  { reqId, component, options, callback }: AddMediaQueryObserverArgs,
  _pageId: number
) {
  // TODO: Implement
}

export function removeMediaQueryObserver(
  { reqId, component }: RemoveMediaQueryObserverArgs,
  _pageId: number
) {
  // TODO: Implement
}

export function requestComponentInfo(
  pageVm: ComponentPublicInstance,
  reqs: Array<SelectorQueryRequest>,
  callback: (result: Array<SelectorQueryNodeInfo | null>) => void
) {
  // TODO: Implement
}
export function setCurrentPageMeta(
  page: ComponentPublicInstance,
  options: SetPageMetaOptions
) {
  // TODO: Implement
}

const enterOptions: LaunchOptions = /*#__PURE__*/ createLaunchOptions()
const launchOptions: LaunchOptions = /*#__PURE__*/ createLaunchOptions()

export function getLaunchOptions() {
  // TODO: Implement
  return extend({}, launchOptions)
}

export function getEnterOptions() {
  // TODO: Implement
  return extend({}, enterOptions)
}

export function getRealPath(filepath: string) {
  // TODO: Implement
  return filepath
}