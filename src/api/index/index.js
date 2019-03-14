import axios from 'axios';
import baseUrl from '@/api'

const api = {
  //动画
    requestdhtitleData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/dhtitle')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //国漫
  requestgmlistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/hottop/0')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //国漫所有
  requestchangehotlistData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/hottop/'+ index)
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //推荐
  requestbtnlistData ( ) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/qdtj')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  
  //月票
  requestyplistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/fav/1')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //月票所有
  requestchangeyplistData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/fav/'+ (index+1))
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //上升
  requestsslistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/api/products/sort?sortType=hot&num=-1&pageNumber=10&pageCode=1' )
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestchangesslistData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/api/products/sort?sortType=hot&num=-1&pageNumber=10&pageCode='+ (index+1))
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  
  //更新1
  requestgxlistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/nowupdate/?page=0')
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestchangegxlistData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/index/nowupdate/?page='+ index)
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //强推
  requestqtlistData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/Comic/hot/?audience=1&theme=15&page='+ index)
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //签约
  requestqylistData (index) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/comic?state=right')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //轻小说
  requestqxsData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/comic?type=8')
        .then(data => {
         resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },  
  //少女
  requestnvlistData (page) {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/Comic/hot?page=' + page )
      // console.log(data.data )
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  //少年
  requestnanlistData () {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl +'/comic?state=right')
      // console.log(data.data )
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
