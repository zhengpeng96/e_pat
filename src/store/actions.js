import {
  RECEIVE_INDEX,
  RECEIVE_CAROUSEL,
  RECEIVE_BRAND
} from './mutation-types'
import {
  reqIndex,
  reqCarousel,
  reqBrand
} from '../api'

export default {
  async getIndex({commit}) {
    const result = await reqIndex()
    if (result.code === 0) {
      const index = result.data
      // 提交commutation
      commit(RECEIVE_INDEX, {index})
    }
  },
  async getCarousel({commit}) {
    const result = await reqCarousel()
    if (result.code === 0) {
      const carousel = result.data
      // 提交commutation
      commit(RECEIVE_CAROUSEL, {carousel})
    }
  },
  async getBrand({commit}) {
    const result = await reqBrand()
    if (result.code === 0) {
      const brand = result.data
      // 提交commutation
      commit(RECEIVE_BRAND, {brand})
    }
  },
}
