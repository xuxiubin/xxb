import axios from 'axios';
import listUrl from '@/api';

const api = {
    // 请求全部列表数据
    requestData(vip, finish, theme, audience, state, type, nation, copyright, mark, page) {
        return new Promise((resovle, reject) => {
            axios.get(listUrl + '/comic?vip='+ vip +'&finish='+ finish + '&theme='+ theme + '&audience='+ audience + '&state='+ state + '&type='+ type + '&nation='+ nation + '&copyright='+ copyright + '&mark='+ mark + '&page='+ page )
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


