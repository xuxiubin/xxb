import axios from 'axios';
import baseUrl from '@/api';

const api = {
    // 请求全部详情数据
    requestData(id){
        return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/detail/good?id='+ id) 
            .then(data => {
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    requestData1(id){
        return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/detail/swiper?id='+ id) 
            .then(data => {
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    requestData2(id){
        return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/detail/header?id='+ id) 
            .then(data => {
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    requestData3(id){
        return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/detail/pagelist?id='+ id) 
            .then(data => {
                resovle(data)
                // console.log(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    
    requestData4(id){
        return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/detail/page?page=0&id='+ id) 
            .then(data => {
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    
    requestData5(id){
        return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/detail/morelist?id='+ id) 
            .then(data => {
                resovle(data.data)
                // console.log(data.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    requestData6(){
        return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/Comic/hot?page=2') 
            .then(data => {
                resovle(data.data.data)
                console.log(data.data.data)
            })
            .catch(err => {
                reject(err)
            })

        })
    },
    requestpagelist(page,id){
    	return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/detail/page?page='+ page +'&id='+ id) 
            .then(data => {
            	console.log(data)
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })

        })
    },
    requestlooklist(){
    	return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/Comic/hot?page=1') 
            .then(data => {
            	console.log(data)
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })

        })
    },
    requesthotlist(page){
    	return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/all/hot/rank?page='+page) 
            .then(data => {
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })

        })
    },
    requesthot1list(page){
    	return new Promise((resovle,reject)=>{
            axios.get(baseUrl+'/all/hotLi/rank?page='+page) 
            .then(data => {
                resovle(data.data)
            })
            .catch(err => {
                reject(err)
            })

        })
    }

}

export default api