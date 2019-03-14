import axios from 'axios';
import baseUrl from '@/api'

const api = {
  requestData (num) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/jump/list?type='+ num)
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  
   requestBannerData1 () {
     return new Promise((resolve, reject) => {
       axios.get(baseUrl + '/jump/left/swiper2')
       .then(data => {
           resolve(data.data)
         })
         .catch(err => {
           reject(err)
         })
     })
   },
   
   requestBannerData2 () {
     return new Promise((resolve, reject) => {
       axios.get(baseUrl + '/jump/left/swiper1')
       .then(data => {
           resolve(data.data)
         })
         .catch(err => {
           reject(err)
         })
     })
   },
   
   requestBannerData3 () {
     return new Promise((resolve, reject) => {
       axios.get(baseUrl + '/jump/right/swiper')
       .then(data => {
           resolve(data.data)
         })
         .catch(err => {
           reject(err)
         })
     })
   }
}

export default api
