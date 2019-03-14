import axios from 'axios';
import baseUrl from '@/api'

const api = {
  requestzjlistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/qxs/nowupdate?page=0')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestchangelistData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/qxs/nowupdate?page='+ index )
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestqclistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/qxs/bookkind?page=2')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestlalistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/qxs/bookkind?page=0')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestxhlistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/qxs/bookkind?page=1')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestgxlistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/qxs/updatelist?page=0')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestchange1listData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/qxs/updatelist?page='+ index )
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestrqlistData () {
    return new Promise((resolve,reject) => {
      axios.get( baseUrl + '/qxs/rank?page=0')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestrqlistData () {
    return new Promise((resolve,reject) => {
      axios.get( baseUrl + '/qxs/rank?page=0')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestsclistData () {
    return new Promise((resolve,reject) => {
      axios.get( baseUrl + '/qxs/rank?page=1')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestnvlistData () {
    return new Promise((resolve,reject) => {
      axios.get( baseUrl + '/qxs/rank?page=2')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestnanlistData () {
    return new Promise((resolve,reject) => {
      axios.get( baseUrl + '/qxs/rank?page=3')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestswiperlistData () {
    return new Promise((resolve,reject) => {
      axios.get( baseUrl + '/qxs/swiper')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  
  
} 

export default api