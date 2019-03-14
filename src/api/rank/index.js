import axios from 'axios';
import baseUrl from '@/api'

const api = {
  requestRankdata1() {
    return new Promise((resolve, reject) => {
      axios.get( baseUrl + '/yuepiaotop10/rank')
        .then(data => {
					console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
 
   requestRankdata2 (page,type) {
     return new Promise((resolve, reject) => {
       axios.get(baseUrl + '/yuepiao/rank?page='+ page + '&type=' + type)
       .then(data => {
           resolve(data.data)
         })
         .catch(err => {
           reject(err)
         })
     })
   },

   requestRenqidata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/renqi/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
	 
	 requestChangxiaodata2 (page,type) {
	 	return new Promise((resolve, reject) => {
	 		axios.get(baseUrl + '/changxiao/rank?page='+ page + '&type=' + type)
	 		.then(data => {
	 				resolve(data.data)
	 			})
	 			.catch(err => {
	 				reject(err)
	 			})
	 	})
   },
   
   requestShangshengdata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/shangshen/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  requestShaoniandata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/shaonian/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  requestShaonvdata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/shaonv/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestRexuedata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/rexue/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestKongbudata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/kongbu/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestGaoxiaodata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/gaoxiao/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestZhentandata2 (page,type) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/zhentan/rank?page='+ page + '&type=' + type)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  
  requestAllyuepiaodata2 (page) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/all/yuepiao/rank?page='+ page)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  
  requestAllrenqidata2 (page) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/all/hot/rank?page='+ page)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestAllshangshengdata2 (page) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/all/shangsheng/rank?page='+ page)
      .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestAllchangxiaodata2 (page) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/all/changxiao/rank?page='+ page)
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
