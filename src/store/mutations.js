
import {
  RECEIVE_INDEX,
  RECEIVE_CAROUSEL,
  RECEIVE_BRAND
} from './mutation-types'

export default {
  [RECEIVE_INDEX](state,{index}){
    state.index = index
  },
  [RECEIVE_CAROUSEL](state,{carousel}){
    state.carousel = carousel
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  }
}
