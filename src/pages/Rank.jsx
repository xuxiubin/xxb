import React, { Component } from 'react'
import './rank.css'
import api from '@/api/rank'
import Header from '@/components/common/Header'
// import { threadId } from 'worker_threads';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showranknum: 0,
      num0: 3,
      allshangshengdata0: [],
      num0: 2,
      allchangxiaodata0: [],
      allchangxiaodata1: [],
      allchangxiaodata2: [],
      num0: 1,
      allrenqidata0: [],
      allrenqidata1: [],
      allrenqidata2: [],
      num0: 0,
      allyuepiaodata0: [],
      allyuepiaodata1: [],
      allyuepiaodata2: [],
      allyuepiaodata3: [],
      allyuepiaodata4: [],
      allyuepiaodata5: [],
      weeknum8: 0,
      zhentandata0: [],
			zhentandata1: [],
			zhentandata2: [],
			zhentandata3: [],
      zhentandata4: [],
      weeknum7: 0,
      kongbudata0: [],
			kongbudata1: [],
			kongbudata2: [],
			kongbudata3: [],
      kongbudata4: [],
      weeknum6: 0,
      gaoxiaodata0: [],
			gaoxiaodata1: [],
			gaoxiaodata2: [],
			gaoxiaodata3: [],
      gaoxiaodata4: [],
      weeknum5: 0,
      rexuedata4: [],
			rexuedata3: [],
			rexuedata2: [],
			rexuedata1: [],
      rexuedata0: [],
      weeknum4: 0,
      shaonvdata0: [],
			shaonvdata1: [],
			shaonvdata2: [],
			shaonvdata3: [],
      shaonvdata4: [],
      weeknum3: 0,
      shaoniandata0: [],
			shaoniandata1: [],
			shaoniandata2: [],
			shaoniandata3: [],
			shaoniandata4: [],
      weeknum2: 0,
      shangshengdata0: [],
			shangshengdata1: [],
			shangshengdata2: [],
			shangshengdata3: [],
			shangshengdata4: [],
      weeknum1: 0,
      changxiaodata0: [],
			changxiaodata1: [],
			changxiaodata2: [],
			changxiaodata3: [],
			changxiaodata4: [],
			weeknum0: 0,
			renqidata0: [],
			renqidata1: [],
			renqidata2: [],
			renqidata3: [],
			renqidata4: [],
      list: [],
      rankdata0: [],
      rankdata1: [],
      rankdata2: [],
      rankdata3: [],
      rankdata4: [],
      rankdata5: [],
      titlelist: ['全部', '连载中', '已完结', '番外篇', '全彩版'],
      num: 0,
      page: 0,
			type: 0,
      active: 'comic-list-all active',
      classnum: 0,
      pagename: ['/data/build/#/index', '/data/build/#/kind', '/data/build/#/riman', '/data/build/#/qxs', '/data/build/#/fls', '/data/build/#/zixun', '/data/build/#/flash', '/data/build/#/rank', '/data/build/#/user', '/data/build/#/phone']
    }
    // this.firstpage = this.firstpage.bind(this)
    // this.lastpage = this.lastpage.bind(this)
  }
	
	componentDidMount() {
		
		api.requestRankdata1().then(data => {
			this.setState({
				list: data.data
			})
		})
		
		api.requestRankdata2(0,this.state.type).then(data => {
			this.setState({
				rankdata0: data.data
			})
		})
		api.requestRankdata2(1,this.state.type).then(data => {
			this.setState({
				rankdata1: data.data
			})
		})
		api.requestRankdata2(2,this.state.type).then(data => {
			this.setState({
				rankdata2: data.data
			})
		})
		api.requestRankdata2(3,this.state.type).then(data => {
			this.setState({
				rankdata3: data.data
			})
		})
		api.requestRankdata2(4,this.state.type).then(data => {
			this.setState({
				rankdata4: data.data
			})
		})	
	
	api.requestRenqidata2(0,this.state.type).then(data => {
		this.setState({
			renqidata0: data.data
		})
	})
	api.requestRenqidata2(1,this.state.type).then(data => {
		this.setState({
			renqidata1: data.data
		})
	})
	api.requestRenqidata2(2,this.state.type).then(data => {
		this.setState({
			renqidata2: data.data
		})
	})
	api.requestRenqidata2(3,this.state.type).then(data => {
		this.setState({
			renqidata3: data.data
		})
	})
	api.requestRenqidata2(4,this.state.type).then(data => {
		this.setState({
			renqidata4: data.data
		})
	}) 
  
  api.requestChangxiaodata2(0,this.state.type).then(data => {
		this.setState({
			changxiaodata0: data.data
		})
	})
	api.requestChangxiaodata2(1,this.state.type).then(data => {
		this.setState({
			changxiaodata1: data.data
		})
	})
	api.requestChangxiaodata2(2,this.state.type).then(data => {
		this.setState({
			changxiaodata2: data.data
		})
	})
	api.requestChangxiaodata2(3,this.state.type).then(data => {
		this.setState({
			changxiaodata3: data.data
		})
	})
	api.requestChangxiaodata2(4,this.state.type).then(data => {
		this.setState({
			changxiaodata4: data.data
		})
	}) 
  
  
  api.requestShangshengdata2(0,this.state.type).then(data => {
		this.setState({
			shangshengdata0: data.data
		})
	})
	api.requestShangshengdata2(1,this.state.type).then(data => {
		this.setState({
			shangshengdata1: data.data
		})
	})
	api.requestShangshengdata2(2,this.state.type).then(data => {
		this.setState({
			shangshengdata2: data.data
		})
	})
	api.requestShangshengdata2(3,this.state.type).then(data => {
		this.setState({
			shangshengdata3: data.data
		})
	})
	api.requestShangshengdata2(4,this.state.type).then(data => {
		this.setState({
			shangshengdata4: data.data
		})
  }) 
  
  api.requestShaoniandata2(0,this.state.type).then(data => {
		this.setState({
			shaoniandata0: data.data
		})
	})
	api.requestShaoniandata2(1,this.state.type).then(data => {
		this.setState({
			shaoniandata1: data.data
		})
	})
	api.requestShaoniandata2(2,this.state.type).then(data => {
		this.setState({
			shaoniandata2: data.data
		})
	})
	api.requestShaoniandata2(3,this.state.type).then(data => {
		this.setState({
			shaoniandata3: data.data
		})
	})
	api.requestShaoniandata2(4,this.state.type).then(data => {
		this.setState({
			shaoniandata4: data.data
		})
  }) 
  
  api.requestShaonvdata2(0,this.state.type).then(data => {
		this.setState({
			shaonvdata0: data.data
		})
	})
	api.requestShaonvdata2(1,this.state.type).then(data => {
		this.setState({
			shaonvdata1: data.data
		})
	})
	api.requestShaonvdata2(2,this.state.type).then(data => {
		this.setState({
			shaonvdata2: data.data
		})
	})
	api.requestShaonvdata2(3,this.state.type).then(data => {
		this.setState({
			shaonvdata3: data.data
		})
	})
	api.requestShaonvdata2(4,this.state.type).then(data => {
		this.setState({
			shaonvdata4: data.data
		})
  }) 
  
  api.requestRexuedata2(0,this.state.type).then(data => {
		this.setState({
			rexuedata0: data.data
		})
	})
	api.requestRexuedata2(1,this.state.type).then(data => {
		this.setState({
			rexuedata1: data.data
		})
	})
	api.requestRexuedata2(2,this.state.type).then(data => {
		this.setState({
			rexuedata2: data.data
		})
	})
	api.requestRexuedata2(3,this.state.type).then(data => {
		this.setState({
			rexuedata3: data.data
		})
	})
	api.requestRexuedata2(4,this.state.type).then(data => {
		this.setState({
			rexuedata4: data.data
		})
  }) 
  
  api.requestGaoxiaodata2(0,this.state.type).then(data => {
		this.setState({
			shaonvdata0: data.data
		})
	})
	api.requestGaoxiaodata2(1,this.state.type).then(data => {
		this.setState({
			gaoxiaodata1: data.data
		})
	})
	api.requestGaoxiaodata2(2,this.state.type).then(data => {
		this.setState({
			gaoxiaodata2: data.data
		})
	})
	api.requestGaoxiaodata2(3,this.state.type).then(data => {
		this.setState({
			gaoxiaodata3: data.data
		})
	})
	api.requestGaoxiaodata2(4,this.state.type).then(data => {
		this.setState({
			gaoxiaodata4: data.data
		})
  }) 
  
  api.requestShaonvdata2(0,this.state.type).then(data => {
		this.setState({
			shaonvdata0: data.data
		})
	})
	api.requestKongbudata2(1,this.state.type).then(data => {
		this.setState({
			kongbudata1: data.data
		})
	})
	api.requestKongbudata2(2,this.state.type).then(data => {
		this.setState({
			kongbudata2: data.data
		})
	})
	api.requestKongbudata2(3,this.state.type).then(data => {
		this.setState({
			kongbudata3: data.data
		})
	})
	api.requestKongbudata2(4,this.state.type).then(data => {
		this.setState({
			kongbudata4: data.data
		})
  }) 
  
  api.requestZhentandata2(0,this.state.type).then(data => {
		this.setState({
			zhentandata0: data.data
		})
	})
	api.requestZhentandata2(1,this.state.type).then(data => {
		this.setState({
			zhentandata1: data.data
		})
	})
	api.requestZhentandata2(2,this.state.type).then(data => {
		this.setState({
			zhentandata2: data.data
		})
	})
	api.requestZhentandata2(3,this.state.type).then(data => {
		this.setState({
			zhentandata3: data.data
		})
	})
	api.requestZhentandata2(4,this.state.type).then(data => {
		this.setState({
			zhentandata4: data.data
		})
	}) 

  api.requestAllyuepiaodata2(0).then(data => {
		this.setState({
			allyuepiaodata0: data.data
		})
	})
	api.requestAllyuepiaodata2(1).then(data => {
		this.setState({
			allyuepiaodata1: data.data
		})
	})
	api.requestAllyuepiaodata2(2).then(data => {
		this.setState({
			allyuepiaodata2: data.data
		})
	})
	api.requestAllyuepiaodata2(3).then(data => {
		this.setState({
			allyuepiaodata3: data.data
		})
	})
	api.requestAllyuepiaodata2(4).then(data => {
		this.setState({
			allyuepiaodata4: data.data
		})
  })
  api.requestAllyuepiaodata2(5).then(data => {
		this.setState({
			allyuepiaodata5: data.data
		})
  }) 
  
  api.requestAllrenqidata2(0).then(data => {
    this.setState({
      allrenqidata0: data.data
    })
  })
  api.requestAllrenqidata2(1).then(data => {
    this.setState({
      allrenqidata1: data.data
    })
  })
  api.requestAllrenqidata2(2).then(data => {
    this.setState({
      allrenqidata2: data.data
    })
  })

  api.requestAllchangxiaodata2(0).then(data => {
    this.setState({
      allchangxiaodata0: data.data
    })
  })
  api.requestAllchangxiaodata2(1).then(data => {
    this.setState({
      allchangxiaodata1: data.data
    })
  })
  api.requestAllchangxiaodata2(2).then(data => {
    this.setState({
      allchangxiaodata2: data.data
    })
  })

  api.requestAllshangshengdata2(0).then(data => {
    this.setState({
      allshangshengdata0: data.data
    })
  })
 

}

	weekchage (index) {
		this.setState ({
			weeknum: index
		})
		api.requestRankdata2(0,index).then(data => {
			this.setState({
				rankdata0: data.data
			})
		})
		api.requestRankdata2(1,index).then(data => {
			this.setState({
				rankdata1: data.data
			})
		})
		api.requestRankdata2(2,index).then(data => {
			this.setState({
				rankdata2: data.data
			})
		})
		api.requestRankdata2(3,index).then(data => {
			this.setState({
				rankdata3: data.data
			})
		})
		api.requestRankdata2(4,index).then(data => {
			this.setState({
				rankdata4: data.data
			})
		})
	}
	
	weekRenqichage (index) {
		this.setState ({
			weeknum0: index,
		})
		api.requestRenqidata2(0,index).then(data => {
			this.setState({
				renqidata0: data.data
			})
		})
		api.requestRenqidata2(1,index).then(data => {
			this.setState({
				renqidata1: data.data
			})
		})
		api.requestRenqidata2(2,index).then(data => {
			this.setState({
				renqidata2: data.data
			})
		})
		api.requestRenqidata2(3,index).then(data => {
			this.setState({
				renqidata3: data.data
			})
		})
		api.requestRenqidata2(4,index).then(data => {
			this.setState({
				renqidata4: data.data
			})
		})
  }
  
  weekChangxiaochage (index) {
		this.setState ({
			weeknum1: index,
		})
    api.requestChangxiaodata2(0,index).then(data => {
      this.setState({
        changxiaodata0: data.data
      })
    })
    api.requestChangxiaodata2(1,index).then(data => {
      this.setState({
        changxiaodata1: data.data
      })
    })
    api.requestChangxiaodata2(2,index).then(data => {
      this.setState({
        changxiaodata2: data.data
      })
    })
    api.requestChangxiaodata2(3,index).then(data => {
      this.setState({
        changxiaodata3: data.data
      })
    })
    api.requestChangxiaodata2(4,index).then(data => {
      this.setState({
        changxiaodata4: data.data
      })
    }) 
  }
  
  weekShangshengchage (index) {
		this.setState ({
			weeknum2: index,
		})
    api.requestShangshengdata2(0,index).then(data => {
      this.setState({
        shangshengdata0: data.data
      })
    })
    api.requestShangshengdata2(1,index).then(data => {
      this.setState({
        shangshengdata1: data.data
      })
    })
    api.requestShangshengdata2(2,index).then(data => {
      this.setState({
        shangshengdata2: data.data
      })
    })
    api.requestShangshengdata2(3,index).then(data => {
      this.setState({
        shangshengdata3: data.data
      })
    })
    api.requestShangshengdata2(4,index).then(data => {
      this.setState({
        shangshengdata4: data.data
      })
    }) 
  }
  
  weekShaonianchage (index) {
		this.setState ({
			weeknum3: index,
		})
    api.requestShaoniandata2(0,index).then(data => {
      this.setState({
        shaoniandata0: data.data
      })
    })
    api.requestShaoniandata2(1,index).then(data => {
      this.setState({
        shaoniandata1: data.data
      })
    })
    api.requestShaoniandata2(2,index).then(data => {
      this.setState({
        shaoniandata2: data.data
      })
    })
    api.requestShaoniandata2(3,index).then(data => {
      this.setState({
        shaoniandata3: data.data
      })
    })
    api.requestShaoniandata2(4,index).then(data => {
      this.setState({
        shaoniandata4: data.data
      })
    }) 
  }

  weekShaonvchage (index) {
		this.setState ({
			weeknum4: index,
		})
    api.requestShaonvdata2(0,index).then(data => {
      this.setState({
        shaonvdata0: data.data
      })
    })
    api.requestShaonvdata2(1,index).then(data => {
      this.setState({
        shaonvdata1: data.data
      })
    })
    api.requestShaonvdata2(2,index).then(data => {
      this.setState({
        shaonvdata2: data.data
      })
    })
    api.requestShaonvdata2(3,index).then(data => {
      this.setState({
        shaonvdata3: data.data
      })
    })
    api.requestShaonvdata2(4,index).then(data => {
      this.setState({
        shaonvdata4: data.data
      })
    }) 
  }

  weekRexuechage (index) {
		this.setState ({
			weeknum5: index,
		})
    api.requestRexuedata2(0,index).then(data => {
      this.setState({
        rexuedata0: data.data
      })
    })
    api.requestRexuedata2(1,index).then(data => {
      this.setState({
        rexuedata1: data.data
      })
    })
    api.requestRexuedata2(2,index).then(data => {
      this.setState({
        rexuedata2: data.data
      })
    })
    api.requestRexuedata2(3,index).then(data => {
      this.setState({
        rexuedata3: data.data
      })
    })
    api.requestRexuedata2(4,index).then(data => {
      this.setState({
        rexuedata4: data.data
      })
    }) 
  }

  weekGaoxiaochage (index) {
		this.setState ({
			weeknum6: index,
		})
    api.requestGaoxiaodata2(0,index).then(data => {
      this.setState({
        gaoxiaodata0: data.data
      })
    })
    api.requestGaoxiaodata2(1,index).then(data => {
      this.setState({
        gaoxiaodata1: data.data
      })
    })
    api.requestGaoxiaodata2(2,index).then(data => {
      this.setState({
        gaoxiaodata2: data.data
      })
    })
    api.requestGaoxiaodata2(3,index).then(data => {
      this.setState({
        gaoxiaodata3: data.data
      })
    })
    api.requestGaoxiaodata2(4,index).then(data => {
      this.setState({
        gaoxiaodata4: data.data
      })
    }) 
  }

   
  weekKongbuchage (index) {
		this.setState ({
			weeknum7: index,
		})
    api.requestKongbudata2(0,index).then(data => {
      this.setState({
        kongbudata0: data.data
      })
    })
    api.requestKongbudata2(1,index).then(data => {
      this.setState({
        kongbudata1: data.data
      })
    })
    api.requestKongbudata2(2,index).then(data => {
      this.setState({
        kongbudata2: data.data
      })
    })
    api.requestKongbudata2(3,index).then(data => {
      this.setState({
        kongbudata3: data.data
      })
    })
    api.requestKongbudata2(4,index).then(data => {
      this.setState({
        kongbudata4: data.data
      })
    }) 
  }
  
  weekZhentanchage (index) {
		this.setState ({
			weeknum8: index,
		})
    api.requestZhentandata2(0,index).then(data => {
      this.setState({
        zhentandata0: data.data
      })
    })
    api.requestZhentandata2(1,index).then(data => {
      this.setState({
        zhentandata1: data.data
      })
    })
    api.requestZhentandata2(2,index).then(data => {
      this.setState({
        zhentandata2: data.data
      })
    })
    api.requestZhentandata2(3,index).then(data => {
      this.setState({
        zhentandata3: data.data
      })
    })
    api.requestZhentandata2(4,index).then(data => {
      this.setState({
        zhentandata4: data.data
      })
    }) 
  }
  
  weekAllyuepiaochage (index) {
		this.setState ({
			num0: index,
		})
    api.requestAllyuepiaodata2(0).then(data => {
      this.setState({
        allyuepiaodata0: data.data
      })
    })
    api.requestAllyuepiaodata2(1).then(data => {
      this.setState({
        allyuepiaodata1: data.data
      })
    })
    api.requestAllyuepiaodata2(2).then(data => {
      this.setState({
        allyuepiaodata2: data.data
      })
    })
    api.requestAllyuepiaodata2(3).then(data => {
      this.setState({
        allyuepiaodata3: data.data
      })
    })
    api.requestAllyuepiaodata2(4).then(data => {
      this.setState({
        allyuepiaodata4: data.data
      })
    })
    api.requestAllyuepiaodata2(5).then(data => {
      this.setState({
        allyuepiaodata5: data.data
      })
    }) 
    


  }

  weekAllrenqichage (index) {
		this.setState ({
			num1: index,
		})
    api.requestAllrenqidata2(0).then(data => {
      this.setState({
        allrenqidata0: data.data
      })
    })
    api.requestAllrenqidata2(1).then(data => {
      this.setState({
        allrenqidata1: data.data
      })
    })
    api.requestAllrenqidata2(2).then(data => {
      this.setState({
        allrenqidata2: data.data
      })
    })
   


  }

  weekAllchangxiaochage (index) {
		this.setState ({
			num2: index,
		})
    api.requestAllchangxiaodata2(0).then(data => {
      this.setState({
        allchangxiaodata0: data.data
      })
    })
    api.requestAllchangxiaodata2(1).then(data => {
      this.setState({
        allchangxiaodata1: data.data
      })
    })
    api.requestAllchangxiaodata2(2).then(data => {
      this.setState({
        allchangxiaodata2: data.data
      })
    })
   


  }

  changerank (index) {
    this.setState({
      showranknum: index
    })
  }
 

  
  render() {
		let listhtml = [];
		let rankdatahtml0 = [];	
		let rankdatahtml1 = [];	
		let rankdatahtml2 = [];
		let rankdatahtml3 = [];
		let rankdatahtml4 = [];
		let renqidatahtml0 = [];
		let renqidatahtml1 = [];
		let renqidatahtml2 = [];
		let renqidatahtml3 = [];
    let renqidatahtml4 = [];
    let changxiaodatahtml0 = [];
		let changxiaodatahtml1 = [];
		let changxiaodatahtml2 = [];
		let changxiaodatahtml3 = [];
    let changxiaodatahtml4 = [];
    let shangshengdatahtml0 = [];
		let shangshengdatahtml1 = [];
		let shangshengdatahtml2 = [];
		let shangshengdatahtml3 = [];
		let shangshengdatahtml4 = [];
    let shaoniandatahtml0 = [];
		let shaoniandatahtml1 = [];
		let shaoniandatahtml2 = [];
		let shaoniandatahtml3 = [];
    let shaoniandatahtml4 = [];
    let shaonvdatahtml0 = [];
		let shaonvdatahtml1 = [];
		let shaonvdatahtml2 = [];
		let shaonvdatahtml3 = [];
    let shaonvdatahtml4 = [];
    let rexuedatahtml0 = [];
		let rexuedatahtml1 = [];
		let rexuedatahtml2 = [];
		let rexuedatahtml3 = [];
    let rexuedatahtml4 = [];
    let gaoxiaodatahtml0 = [];
		let gaoxiaodatahtml1 = [];
		let gaoxiaodatahtml2 = [];
		let gaoxiaodatahtml3 = [];
    let gaoxiaodatahtml4 = [];
    let kongbudatahtml0 = [];
		let kongbudatahtml1 = [];
		let kongbudatahtml2 = [];
		let kongbudatahtml3 = [];
    let kongbudatahtml4 = [];
    let zhentandatahtml0 = [];
		let zhentandatahtml1 = [];
		let zhentandatahtml2 = [];
		let zhentandatahtml3 = [];
    let zhentandatahtml4 = [];
    let allyuepiaodatahtml0 = [];
    let allyuepiaodatahtml1 = [];
    let allyuepiaodatahtml2 = [];
    let allyuepiaodatahtml3 = [];
    let allyuepiaodatahtml4 = [];
    let allyuepiaodatahtml5 = [];
    let allrenqidatahtml0 = [];
    let allrenqidatahtml1 = [];
    let allrenqidatahtml2 = [];
    let allchangxiaodatahtml0 = [];
    let allchangxiaodatahtml1 = [];
    let allchangxiaodatahtml2 = [];
    let allshangshengdatahtml0 = [];

		this.state.list.map((item, index) => {
			if ( index < 3) {
				listhtml.push(										
					<li className="big no1" key={index}>
						<div className="rank-vip-people clearfix">
							<a className="rank-img ui-left" title={ item.title }>
								<img src={ item.img } width="89" height="89" alt={ item.title } />
							</a>
							<div className="rank-people-text">
								<a className="name " title={ item.title }> { item.title }</a>
									<p className="rank-people-p">累计投放：<span className="ft-month">{ item.num }</span></p>
							</div>
						</div>
					</li>
				)
			} else {
				listhtml.push(
					<li className="small" key={index}>
						<span className="small-no4 small-no">&nbsp;</span>
						<div className="rank-vip-people clearfix">
							<a className="rank-img ui-left" title={ item.title }>
							<img src={ item.img } width="50" height="50" alt={ item.title } />
							</a>
							<div className="rank-people-text">
								<a className="name " title={ item.title }>{ item.title }</a>
								<p className="rank-people-p">累计投放：<span className="ft-month">{ item.num }</span></p>
							</div>
						</div>
					</li>
				)
			}	
		})
				
		//月票
		this.state.rankdata0.map((item, index) => {
			rankdatahtml0.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
    } )	
		this.state.rankdata1.map((item, index) => {
			rankdatahtml1.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		} )
		this.state.rankdata2.map((item, index) => {
		rankdatahtml2.push(										
			<li className="pt-none" key={index}>
				<em className="ui-border-em ">{ item.ranknum }</em>
				<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
			</li>
			)
			})
		this.state.rankdata3.map((item, index) => {
			rankdatahtml3.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		} )
		this.state.rankdata4.map((item, index) => {
			rankdatahtml4.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		} )
		
	//人气 	
		this.state.renqidata0.map((item, index) => {
			renqidatahtml0.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		})
		this.state.renqidata1.map((item, index) => {
			renqidatahtml1.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		})
		this.state.renqidata2.map((item, index) => {
			renqidatahtml2.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		})
		this.state.renqidata3.map((item, index) => {
			renqidatahtml3.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		})
		this.state.renqidata4.map((item, index) => {
			renqidatahtml4.push(										
				<li className="pt-none" key={index}>
					<em className="ui-border-em ">{ item.ranknum }</em>
					<a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
				</li>
			)
		})
		
	//畅销	
  this.state.changxiaodata0.map((item, index) => {
    changxiaodatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.changxiaodata1.map((item, index) => {
    changxiaodatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.changxiaodata2.map((item, index) => {
    changxiaodatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.changxiaodata3.map((item, index) => {
    changxiaodatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.changxiaodata4.map((item, index) => {
    changxiaodatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
    
  //上升	
  this.state.shangshengdata0.map((item, index) => {
    shangshengdatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shangshengdata1.map((item, index) => {
    shangshengdatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shangshengdata2.map((item, index) => {
    shangshengdatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shangshengdata3.map((item, index) => {
    shangshengdatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shangshengdata4.map((item, index) => {
    shangshengdatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  
  
  //分类少年漫画	
  this.state.shaoniandata0.map((item, index) => {
    shaoniandatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaoniandata1.map((item, index) => {
    shaoniandatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaoniandata2.map((item, index) => {
    shaoniandatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaoniandata3.map((item, index) => {
    shaoniandatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaoniandata4.map((item, index) => {
    shaoniandatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })

  //分类少女漫画	
  this.state.shaonvdata0.map((item, index) => {
    shaonvdatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaonvdata1.map((item, index) => {
    shaonvdatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaonvdata2.map((item, index) => {
    shaonvdatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaonvdata3.map((item, index) => {
    shaonvdatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.shaonvdata4.map((item, index) => {
    shaonvdatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })

   //分类热血漫画	
   this.state.rexuedata0.map((item, index) => {
    rexuedatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.rexuedata1.map((item, index) => {
    rexuedatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.rexuedata2.map((item, index) => {
    rexuedatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.rexuedata3.map((item, index) => {
    rexuedatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.rexuedata4.map((item, index) => {
    rexuedatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })

   //分类少女漫画	
   this.state.gaoxiaodata0.map((item, index) => {
    gaoxiaodatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.gaoxiaodata1.map((item, index) => {
    gaoxiaodatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.gaoxiaodata2.map((item, index) => {
    gaoxiaodatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.gaoxiaodata3.map((item, index) => {
    gaoxiaodatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.gaoxiaodata4.map((item, index) => {
    gaoxiaodatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })

   //分类恐怖漫画	
   this.state.kongbudata0.map((item, index) => {
    kongbudatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.kongbudata1.map((item, index) => {
    kongbudatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.kongbudata2.map((item, index) => {
    kongbudatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.kongbudata3.map((item, index) => {
    kongbudatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.kongbudata4.map((item, index) => {
    kongbudatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })

   //分类侦探漫画	
   this.state.zhentandata0.map((item, index) => {
    zhentandatahtml0.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.zhentandata1.map((item, index) => {
    zhentandatahtml1.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.zhentandata2.map((item, index) => {
    zhentandatahtml2.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.zhentandata3.map((item, index) => {
    zhentandatahtml3.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })
  this.state.zhentandata4.map((item, index) => {
    zhentandatahtml4.push(										
      <li className="pt-none" key={index}>
        <em className="ui-border-em ">{ item.ranknum }</em>
        <a href="/Comic/ComicInfo/id/638790" title={ item.title }>{ item.title }</a>
      </li>
    )
  })

  
  // 全部榜单
  this.state.allyuepiaodata0.map((item, index) => {
    allyuepiaodatahtml0.push(										
      <li className="" key={index}>
        <sub className="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a className="mod-rank-name ui-left" title={ item.title } href="/Comic/ComicInfo/id/638790">{ item.title }</a>
        <b className="mod-rank-money ui-right">{ item.money }</b>
        <span className="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allyuepiaodata1.map((item, index) => {
    allyuepiaodatahtml1.push(										
      <li className="" key={index}>
        <sub className="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a className="mod-rank-name ui-left" title={ item.title } href="/Comic/ComicInfo/id/638790">{ item.title }</a>
        <b className="mod-rank-money ui-right">{ item.money }</b>
        <span className="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allyuepiaodata2.map((item, index) => {
    allyuepiaodatahtml2.push(										
      <li className="" key={index}>
        <sub className="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a className="mod-rank-name ui-left" title={ item.title } href="/Comic/ComicInfo/id/638790">{ item.title }</a>
        <b className="mod-rank-money ui-right">{ item.money }</b>
        <span className="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allyuepiaodata3.map((item, index) => {
    allyuepiaodatahtml3.push(										
      <li className="" key={index}>
        <sub className="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a className="mod-rank-name ui-left" title={ item.title } href="/Comic/ComicInfo/id/638790">{ item.title }</a>
        <b className="mod-rank-money ui-right">{ item.money }</b>
        <span className="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allyuepiaodata4.map((item, index) => {
    allyuepiaodatahtml4.push(										
      <li className="" key={index}>
        <sub className="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a className="mod-rank-name ui-left" title={ item.title } href="/Comic/ComicInfo/id/638790">{ item.title }</a>
        <b className="mod-rank-money ui-right">{ item.money }</b>
        <span className="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allyuepiaodata5.map((item, index) => {
    allyuepiaodatahtml5.push(										
      <li className="" key={index}>
        <sub className="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a className="mod-rank-name ui-left" title={ item.title } href="/Comic/ComicInfo/id/638790">{ item.title }</a>
        <b className="mod-rank-money ui-right">{ item.money }</b>
        <span className="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
 
  this.state.allrenqidata0.map((item, index) => {
    allrenqidatahtml0.push(										
      <li class=""  key={index}>
        <sub class="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a target="_blank" class="mod-rank-name ui-left" title={ item.title } href="/Comic/comicInfo/id/551072">{ item.title }</a>
        <sup class="ui-rank-trend-up"></sup>
        <span class="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allrenqidata1.map((item, index) => {
    allrenqidatahtml1.push(										
      <li class=""  key={index}>
        <sub class="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a target="_blank" class="mod-rank-name ui-left" title={ item.title } href="/Comic/comicInfo/id/551072">{ item.title }</a>
        <sup class="ui-rank-trend-up"></sup>
        <span class="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allrenqidata2.map((item, index) => {
    allrenqidatahtml2.push(										
      <li class=""  key={index}>
        <sub class="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a target="_blank" class="mod-rank-name ui-left" title={ item.title } href="/Comic/comicInfo/id/551072">{ item.title }</a>
        <sup class="ui-rank-trend-up"></sup>
        <span class="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  
  this.state.allchangxiaodata0.map((item, index) => {
    allchangxiaodatahtml0.push(										
      <li class=""  key={index}>
        <sub class="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a target="_blank" class="mod-rank-name ui-left" title={ item.title } href="/Comic/comicInfo/id/551072">{ item.title }</a>
        <sup class="ui-rank-trend-up"></sup>
        <span class="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allchangxiaodata1.map((item, index) => {
    allchangxiaodatahtml1.push(										
      <li class=""  key={index}>
        <sub class="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a target="_blank" class="mod-rank-name ui-left" title={ item.title } href="/Comic/comicInfo/id/551072">{ item.title }</a>
        <sup class="ui-rank-trend-up"></sup>
        <span class="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  this.state.allchangxiaodata2.map((item, index) => {
    allchangxiaodatahtml2.push(										
      <li class=""  key={index}>
        <sub class="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a target="_blank" class="mod-rank-name ui-left" title={ item.title } href="/Comic/comicInfo/id/551072">{ item.title }</a>
        <sup class="ui-rank-trend-up"></sup>
        <span class="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })

  this.state.allshangshengdata0.map((item, index) => {
    allshangshengdatahtml0.push(										
      <li class=""  key={index}>
        <sub class="mod-rank-keep ui-left">{ item.ranknum }</sub>
        <a target="_blank" class="mod-rank-name ui-left" title={ item.title } href="/Comic/comicInfo/id/551072">{ item.title }</a>
        <sup class="ui-rank-trend-up"></sup>
        <span class="mod-rank-num ui-right">{ item.hotnum }</span>
      </li>
    )
  })
  
  

    return (
      <div className="wrap">
        <Header hnum='7' pagename={this.state.pagename}>
        </Header>
        <div className="mod-rank-wrap clearfix">
          <div className="mod-rank-menu ui-left">
            <h2 className="ui-rank-tit">排行榜</h2>
            <div className="mod-rank-tab clearfix">
              <a href="/Rank/comicRank" title="全站" className="no1 active">全站</a>
              <a href="/Rank/comicRank/vip/2" title="付费" className="">付费</a>
            </div>
            <div className="mod-rank-tab-wrap">
              <div className="mod-rank-menu-tabcont">
                <span className="ui-rank-ft-tit"><span>作品榜</span></span>
                <ul className="mod-rank-menu-list">
                  <li onClick={this.changerank.bind(this,0)}><a  title="全部榜单" className={this.state.showranknum === 0 ? 'fwb' : ''}>全部榜单</a></li>
                  <li onClick={this.changerank.bind(this,1)}><a  title="月票榜" className={this.state.showranknum === 1 ? 'fwb' : ''}>月票榜</a></li>
                  <li onClick={this.changerank.bind(this,2)}><a  title="人气总榜" className={this.state.showranknum === 2 ? 'fwb' : ''}>人气总榜</a></li>
                  <li onClick={this.changerank.bind(this,3)}><a title="畅销榜" className={this.state.showranknum === 3 ? 'fwb' : ''}>畅销榜</a></li>
                  <li onClick={this.changerank.bind(this,4)}><a title="上升最快榜" className={this.state.showranknum === 4? 'fwb' : ''}>上升最快榜</a></li>
                  <li className="last">
                    <span className="ui-rank-ft-xone">分类榜</span>
                    <div className="ui-rank-sub-list">
                      <p onClick={this.changerank.bind(this,5)} className={this.state.showranknum === 5 ? 'fwb' : ''}>
                        <a  title="少年漫画榜" className="">少年漫画榜</a>
                      </p>
                      <p onClick={this.changerank.bind(this,6)} className={this.state.showranknum === 6 ? 'fwb' : ''}>
                        <a  title="少女漫画榜" className="">少女漫画榜</a>
                      </p>
                      <p onClick={this.changerank.bind(this,7)} className={this.state.showranknum === 7 ? 'fwb' : ''}>
                        <a  title="热血·冒险榜" className="">热血·冒险榜</a>
                      </p>
                      <p onClick={this.changerank.bind(this,8)} className={this.state.showranknum === 8 ? 'fwb' : ''}>
                        <a  title="搞笑·四格榜" className="">搞笑·四格榜</a>
                      </p>
                      <p onClick={this.changerank.bind(this,9)} className={this.state.showranknum === 9 ? 'fwb' : ''}>
                        <a  title="恐怖·灵异榜" className="">恐怖·灵异榜</a>
                      </p>
                      <p onClick={this.changerank.bind(this,10)} className={this.state.showranknum === 10 ? 'fwb' : ''}>
                        <a  title="侦探·推理榜" className="">侦探·推理榜</a>
                      </p>
                    </div>
                  </li>
                </ul>
                <span className="ui-rank-ft-tit"><span>用户榜</span></span>
                <ul className="mod-rank-menu-list">
                  <li onClick={this.changerank.bind(this,11)}><a  title="月票贡献榜" className={this.state.showranknum === 11 ? 'fwb' : ''}>月票贡献榜</a></li>
                </ul>
              </div>
            </div>
          </div>
    {/* 全部榜单 */}
    <div className="ran-wrapp" style={this.state.showranknum === 0?{display:'block'} : {display:'none'} }>
      <div className="ran-main-top ran-rank-month ui-mb40 clearfix">
        <div className="ran-rank-month-tit clearfix">
          <a href="/Rank/comicRank/type/mt">
            <h3 className="ran-rank-title ui-left">月票榜</h3>
          </a>
          <span className="ran-rank-month-txt ui-left" id="month-ticket-state-date">2019.03.04-2019.03.10  统计进行中...</span>
          <h4 id="month_ticket_rank" className="ran-rank-handle tabs-handle ui-right">
            <a className={this.state.num0 === 0 ? 'active' : ''} onClick={this.weekAllyuepiaochage.bind(this,0)}>当周</a>
          </h4>
          <a className="btn-rank-zx" target="_blank" href="/Rule">折现规则</a>
        </div>
          <div className="rank-box1" style={{height: "645px"}}>
          <div className="mod-rank-subtit clearfix">
            <ul className="mod-rank-sublist">
              <li className="li_1"><b>作品</b><strong>月票数</strong><em>折现（元）</em></li>
              <li className="li_2"><b>作品</b><strong>月票数</strong><em>折现（元）</em></li>
              <li className="li-3"><b>作品</b><strong>月票数</strong><em>折现（元）</em></li>
            </ul>
          </div>
          <div id="month_ticket_rank_content" className="ran-top-month mod-rank-wr">
            <div className="mod-rank-month-wr tabs-panel clearfix " style={{height: "525px"}}>
              <ol className=" mod-rank-list mod-rank-month-list" style={{height: '599px'}}>
                { allyuepiaodatahtml0 }
              </ol>
              <ol className=" mod-rank-list mod-rank-month-list" style={{height: '599px'}}>
              { allyuepiaodatahtml1 }
              </ol>
              <ol className=" mod-rank-list mod-rank-month-list" style={{height: '599px'}}>
              { allyuepiaodatahtml2 }
              </ol>
            </div>
          </div>
        </div>
      </div>
           </div>
    {/* 月票榜 */}
    <div className="rank-right ui-right" style={this.state.showranknum === 1?{display:'block'} : {display:'none'} } >
              <div className="rank-sub-list">
              <div className="ran-rank-tit clearfix">
              <h3 className="ran-rank-title ui-left">月票榜</h3>
              <span id="month-ticket-state-date" className="ran-rank-month-txt ui-left">2019.03.04-2019.03.10  统计进行中...</span>
              <h4 id="month_all_rank" className="ran-rank-handle ui-right ">
              <a className={this.state.weeknum === 0 ? 'active' : ''} onClick={this.weekchage.bind(this,0)}>当周</a>
              <a className={this.state.weeknum === 1 ? 'active' : ''} onClick={this.weekchage.bind(this,1)}>上周</a>
              </h4>
            </div>
            <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { rankdatahtml0 }
              </ul> 
              <ul className="rank-ul">
                { rankdatahtml1 }
              </ul> 
              <ul className="rank-ul">
                { rankdatahtml2 }
              </ul>  
              <ul className="rank-ul">
                { rankdatahtml3 }
              </ul> 
                <ul className="rank-ul">
                { rankdatahtml4 }
                </ul> 
            </div>
            <div className="rank-list-wrap clearfix ui-dn" style={{display:'none'}}>
              <ul className="rank-ul">
              <li className="pt-none">
                <em className="ui-border-em ">1</em>
                <a href="/Comic/ComicInfo/id/523194" title="灵契">灵契</a>
              </li>
              </ul>
              <ul className="rank-ul">
              <li className="pt-none">
                <em className="ui-border-em ">1</em>
                <a href="/Comic/ComicInfo/id/523194" title="灵契">灵契</a>
              </li>
              </ul>
              <ul className="rank-ul">
              <li className="pt-none">
                <em className="ui-border-em ">1</em>
                <a href="/Comic/ComicInfo/id/523194" title="灵契">灵契</a>
              </li>
              </ul>
              <ul className="rank-ul">
              <li className="pt-none">
                <em className="ui-border-em ">1</em>
                <a href="/Comic/ComicInfo/id/523194" title="灵契">灵契</a>
              </li>
              </ul>
              <ul className="rank-ul">
              <li className="pt-none">
                <em className="ui-border-em ">1</em>
                <a href="/Comic/ComicInfo/id/523194" title="灵契">灵契</a>
              </li>
              </ul>
            </div>
            </div>
          </div>
          </div>
    {/* 人气*/}
    <div className="rank-right ui-right" style={this.state.showranknum === 2?{display:'block'} : {display:'none'} } >
          <div className="rank-sub-list">
            <div className="ran-rank-tit clearfix">
              <h3 className="ran-rank-title ui-left">人气总榜</h3>
              <span id="month-ticket-state-date" className="ran-rank-month-txt ui-left">2019.03.04-2019.03.10  统计进行中...</span>
              <h4 id="month_all_rank" className="ran-rank-handle ui-right ">
              <a className={this.state.weeknum0 === 0 ? 'active' : ''} onClick={this.weekRenqichage.bind(this,0)}>日</a>
              <a className={this.state.weeknum0 === 1 ? 'active' : ''} onClick={this.weekRenqichage.bind(this,1)}>周</a>
              <a className={this.state.weeknum0 === 2 ? 'active' : ''} onClick={this.weekRenqichage.bind(this,2)}>月</a>
              </h4>
            </div>
            <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { renqidatahtml0 }
              </ul>
              <ul className="rank-ul">
              { renqidatahtml1 }

              </ul>
              <ul className="rank-ul">
              { renqidatahtml2 }

              </ul>
              <ul className="rank-ul">
              { renqidatahtml3 }

              </ul>
              <ul className="rank-ul">
              { renqidatahtml4 }

              </ul>           
            </div>
            <div className="rank-list-wrap clearfix ui-dn" style={{display:'none'}}>     			
            </div>
            </div>
          </div>
          </div>
       
     {/* 畅销*/}
    <div className="rank-right ui-right" style={this.state.showranknum === 3?{display:'block'} : {display:'none'} } >
     	<div className="rank-sub-list">
     		<div className="ran-rank-tit clearfix">
     			<h3 className="ran-rank-title ui-left">畅销榜</h3>
     			<h4 id="month_all_rank" className="ran-rank-handle ui-right ">
     			<a className={this.state.weeknum1 === 0 ? 'active' : ''} onClick={this.weekChangxiaochage.bind(this,0)}>日</a>
     			<a className={this.state.weeknum1 === 1 ? 'active' : ''} onClick={this.weekChangxiaochage.bind(this,1)}>周</a>
     			<a className={this.state.weeknum1 === 2 ? 'active' : ''} onClick={this.weekChangxiaochage.bind(this,2)}>月</a>
     			</h4>
     		</div>
     		<div className="rank-tabcon">
     		<div className="rank-list-wrap clearfix ">
     			<ul className="rank-ul">
						{ changxiaodatahtml0 }
					</ul>
					<ul className="rank-ul">
					{ changxiaodatahtml1 }

					</ul>
					<ul className="rank-ul">
					{ changxiaodatahtml2 }

					</ul>
					<ul className="rank-ul">
					{ changxiaodatahtml3 }

					</ul>
					<ul className="rank-ul">
					{ changxiaodatahtml4 }

					</ul>           
     		</div>
     		<div className="rank-list-wrap clearfix ui-dn" style={{display:'none'}}>     			
     		</div>
     		</div>
     	</div>
     	</div>
     
     {/* 上升*/}
    <div className="rank-right ui-right" style={this.state.showranknum === 4?{display:'block'} : {display:'none'} } >
     	<div className="rank-sub-list">
     		<div className="ran-rank-tit clearfix">
     			<h3 className="ran-rank-title ui-left">上升最快榜</h3>
     			<h4 id="month_all_rank" className="ran-rank-handle ui-right ">
     			<a className={this.state.weeknum2 === 0 ? 'active' : ''} onClick={this.weekShangshengchage.bind(this,0)}>日</a>
     			<a className={this.state.weeknum2 === 1 ? 'active' : ''} onClick={this.weekShangshengchage.bind(this,1)}>周</a>
     			<a className={this.state.weeknum2 === 2 ? 'active' : ''} onClick={this.weekShangshengchage.bind(this,2)}>月</a>
     			</h4>
     		</div>
     		<div className="rank-tabcon">
     		<div className="rank-list-wrap clearfix ">
     			<ul className="rank-ul">
						{ shangshengdatahtml0 }
					</ul>
					<ul className="rank-ul">
					{ shangshengdatahtml1 }

					</ul>
					<ul className="rank-ul">
					{ shangshengdatahtml2 }

					</ul>
					<ul className="rank-ul">
					{ shangshengdatahtml3 }

					</ul>
					<ul className="rank-ul">
					{ shangshengdatahtml4 }

					</ul>           
     		</div>
     		<div className="rank-list-wrap clearfix ui-dn" style={{display:'none'}}>     			
     		</div>
     		</div>
     	</div>
     	</div>
     
   
   {/* 分类 */}
      {/* 少年漫画榜 */}
      <div className= "rank-right ui-right" style={this.state.showranknum === 5?{display:'block'} : {display:'none'} } >
        <div className="rank-sub-list">
          <div class="ran-rank-tit clearfix">
                    <h3 class="ran-rank-title ui-left">
                        少年漫画榜                    </h3>
                    <span id="month-ticket-state-date" class="ran-rank-month-txt ui-left"></span>
                    <h4 id="month_all_rank" class="ran-rank-handle ui-right ">
                      <a className={this.state.weeknum3 === 0 ? 'active' : ''} onClick={this.weekShaonianchage.bind(this,0)}>人气周榜</a>
                      <a  className={this.state.weeknum3 === 1 ? 'active' : ''} onClick={this.weekShaonianchage.bind(this,1)}>评分周榜</a>
                       <a  className={this.state.weeknum3 === 2 ? 'active' : ''} onClick={this.weekShaonianchage.bind(this,2)}>收藏周榜</a>
                        <a  className={this.state.weeknum3 === 3 ? 'active' : ''} onClick={this.weekShaonianchage.bind(this,3)}>红票周榜</a>
                        <a className={this.state.weeknum3 === 4 ? 'active' : ''} onClick={this.weekShaonianchage.bind(this,4)}>月票排行</a>
                   </h4>
                </div>
          <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { shaoniandatahtml0 }
              </ul>
              <ul className="rank-ul">
                { shaoniandatahtml1 }
              </ul>
              <ul className="rank-ul">
                { shaoniandatahtml2 }
              </ul>
              <ul className="rank-ul">
                { shaoniandatahtml3 }
              </ul>
            <ul className="rank-ul">
                { shaoniandatahtml4 }
              </ul>
          </div>
        </div>
      </div>
   </div>


 {/* 少女漫画榜 */}
 <div className= "rank-right ui-right" style={this.state.showranknum === 6?{display:'block'} : {display:'none'} } >
        <div className="rank-sub-list">
          <div class="ran-rank-tit clearfix">
                    <h3 class="ran-rank-title ui-left">
                        少女漫画榜                    </h3>
                    <span id="month-ticket-state-date" class="ran-rank-month-txt ui-left"></span>
                    <h4 id="month_all_rank" class="ran-rank-handle ui-right ">
                      <a className={this.state.weeknum4 === 0 ? 'active' : ''} onClick={this.weekShaonvchage.bind(this,0)}>人气周榜</a>
                      <a  className={this.state.weeknum4 === 1 ? 'active' : ''} onClick={this.weekShaonvchage.bind(this,1)}>评分周榜</a>
                       <a  className={this.state.weeknum4 === 2 ? 'active' : ''} onClick={this.weekShaonvchage.bind(this,2)}>收藏周榜</a>
                        <a  className={this.state.weeknum4 === 3 ? 'active' : ''} onClick={this.weekShaonvchage.bind(this,3)}>红票周榜</a>
                        <a className={this.state.weeknum4 === 4 ? 'active' : ''} onClick={this.weekShaonvchage.bind(this,4)}>月票排行</a>
                   </h4>
                </div>
          <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { shaonvdatahtml0 }
              </ul>
              <ul className="rank-ul">
                { shaonvdatahtml1 }
              </ul>
              <ul className="rank-ul">
                { shaonvdatahtml2 }
              </ul>
              <ul className="rank-ul">
                { shaonvdatahtml3 }
              </ul>
            <ul className="rank-ul">
                { shaonvdatahtml4 }
              </ul>
          </div>
        </div>
      </div>
   </div>


{/* 热血漫画榜 */}
 <div className= "rank-right ui-right" style={this.state.showranknum === 7?{display:'block'} : {display:'none'} }>
        <div className="rank-sub-list">
          <div class="ran-rank-tit clearfix">
                    <h3 class="ran-rank-title ui-left">
                        热血漫画榜                    </h3>
                    <span id="month-ticket-state-date" class="ran-rank-month-txt ui-left"></span>
                    <h4 id="month_all_rank" class="ran-rank-handle ui-right ">
                      <a className={this.state.weeknum5 === 0 ? 'active' : ''} onClick={this.weekRexuechage.bind(this,0)}>人气周榜</a>
                      <a  className={this.state.weeknum5 === 1 ? 'active' : ''} onClick={this.weekRexuechage.bind(this,1)}>评分周榜</a>
                       <a  className={this.state.weeknum5 === 2 ? 'active' : ''} onClick={this.weekRexuechage.bind(this,2)}>收藏周榜</a>
                        <a  className={this.state.weeknum5 === 3 ? 'active' : ''} onClick={this.weekRexuechage.bind(this,3)}>红票周榜</a>
                        <a className={this.state.weeknum5 === 4 ? 'active' : ''} onClick={this.weekRexuechage.bind(this,4)}>月票排行</a>
                   </h4>
                </div>
          <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { rexuedatahtml0 }
              </ul>
              <ul className="rank-ul">
                { rexuedatahtml1 }
              </ul>
              <ul className="rank-ul">
                { rexuedatahtml2 }
              </ul>
              <ul className="rank-ul">
                { rexuedatahtml3 }
              </ul>
            <ul className="rank-ul">
                { rexuedatahtml4 }
              </ul>
          </div>
        </div>
      </div>
   </div>

{/* 搞笑漫画榜 */}
 <div className= "rank-right ui-right" style={this.state.showranknum === 8?{display:'block'} : {display:'none'} }>
        <div className="rank-sub-list">
          <div class="ran-rank-tit clearfix">
                    <h3 class="ran-rank-title ui-left">
                        搞笑漫画榜                    </h3>
                    <span id="month-ticket-state-date" class="ran-rank-month-txt ui-left"></span>
                    <h4 id="month_all_rank" class="ran-rank-handle ui-right ">
                      <a className={this.state.weeknum6 === 0 ? 'active' : ''} onClick={this.weekGaoxiaochage.bind(this,0)}>人气周榜</a>
                      <a  className={this.state.weeknum6 === 1 ? 'active' : ''} onClick={this.weekGaoxiaochage.bind(this,1)}>评分周榜</a>
                       <a  className={this.state.weeknum6 === 2 ? 'active' : ''} onClick={this.weekGaoxiaochage.bind(this,2)}>收藏周榜</a>
                        <a  className={this.state.weeknum6 === 3 ? 'active' : ''} onClick={this.weekGaoxiaochage.bind(this,3)}>红票周榜</a>
                        <a className={this.state.weeknum6 === 4 ? 'active' : ''} onClick={this.weekGaoxiaochage.bind(this,4)}>月票排行</a>
                   </h4>
                </div>
          <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { gaoxiaodatahtml0 }
              </ul>
              <ul className="rank-ul">
                { gaoxiaodatahtml1 }
              </ul>
              <ul className="rank-ul">
                { gaoxiaodatahtml2 }
              </ul>
              <ul className="rank-ul">
                { gaoxiaodatahtml3 }
              </ul>
            <ul className="rank-ul">
                { gaoxiaodatahtml4 }
              </ul>
          </div>
        </div>
      </div>
   </div>

{/* 恐怖漫画榜 */}
 <div className= "rank-right ui-right" style={this.state.showranknum === 9?{display:'block'} : {display:'none'} }>
        <div className="rank-sub-list">
          <div class="ran-rank-tit clearfix">
                    <h3 class="ran-rank-title ui-left">
                        恐怖漫画榜                    </h3>
                    <span id="month-ticket-state-date" class="ran-rank-month-txt ui-left"></span>
                    <h4 id="month_all_rank" class="ran-rank-handle ui-right ">
                      <a className={this.state.weeknum7 === 0 ? 'active' : ''} onClick={this.weekKongbuchage.bind(this,0)}>人气周榜</a>
                      <a  className={this.state.weeknum7 === 1 ? 'active' : ''} onClick={this.weekKongbuchage.bind(this,1)}>评分周榜</a>
                       <a  className={this.state.weeknum7 === 2 ? 'active' : ''} onClick={this.weekKongbuchage.bind(this,2)}>收藏周榜</a>
                        <a  className={this.state.weeknum7 === 3 ? 'active' : ''} onClick={this.weekKongbuchage.bind(this,3)}>红票周榜</a>
                        <a className={this.state.weeknum7 === 4 ? 'active' : ''} onClick={this.weekKongbuchage.bind(this,4)}>月票排行</a>
                   </h4>
                </div>
          <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { kongbudatahtml0 }
              </ul>
              <ul className="rank-ul">
                { kongbudatahtml1 }
              </ul>
              <ul className="rank-ul">
                { kongbudatahtml2 }
              </ul>
              <ul className="rank-ul">
                { kongbudatahtml3 }
              </ul>
            <ul className="rank-ul">
                { kongbudatahtml4 }
              </ul>
          </div>
        </div>
      </div>
   </div>

{/* 侦探漫画榜 */}
 <div className= "rank-right ui-right" style={this.state.showranknum === 10?{display:'block'} : {display:'none'} }>
        <div className="rank-sub-list">
          <div class="ran-rank-tit clearfix">
                    <h3 class="ran-rank-title ui-left">
                        侦探漫画榜                    </h3>
                    <span id="month-ticket-state-date" class="ran-rank-month-txt ui-left"></span>
                    <h4 id="month_all_rank" class="ran-rank-handle ui-right ">
                      <a className={this.state.weeknum8 === 0 ? 'active' : ''} onClick={this.weekZhentanchage.bind(this,0)}>人气周榜</a>
                      <a  className={this.state.weeknum8 === 1 ? 'active' : ''} onClick={this.weekZhentanchage.bind(this,1)}>评分周榜</a>
                       <a  className={this.state.weeknum8 === 2 ? 'active' : ''} onClick={this.weekZhentanchage.bind(this,2)}>收藏周榜</a>
                        <a  className={this.state.weeknum8 === 3 ? 'active' : ''} onClick={this.weekZhentanchage.bind(this,3)}>红票周榜</a>
                        <a className={this.state.weeknum8 === 4 ? 'active' : ''} onClick={this.weekZhentanchage.bind(this,4)}>月票排行</a>
                   </h4>
                </div>
          <div className="rank-tabcon">
            <div className="rank-list-wrap clearfix ">
              <ul className="rank-ul">
                { zhentandatahtml0 }
              </ul>
              <ul className="rank-ul">
                { zhentandatahtml1 }
              </ul>
              <ul className="rank-ul">
                { zhentandatahtml2 }
              </ul>
              <ul className="rank-ul">
                { zhentandatahtml3 }
              </ul>
            <ul className="rank-ul">
                { zhentandatahtml4 }
              </ul>
          </div>
        </div>
      </div>
   </div>


   {/* 月票贡献榜 */}
    <div className="rank-right ui-right" style={this.state.showranknum === 11?{display:'block'} : {display:'none'} }>
     	{/* <div className="rank-month-xone">
     		<div className="rank-month-top">
     			<h3 className="ran-rank-title">月票贡献榜TOP10</h3>
     		</div>
     		<div classNameName="rank-month-hao">
     						<ul classNameName="rank-month-hao-list clearfix">
     						{ listhtml }
     					</ul>
     					</div>
     	</div> */}
     	<div className="rank-month-all">
     		<div className="rank-month-top">
     			<h3 className="ran-rank-title ui-left">月票贡献榜11-100</h3>
     			<h4 id="month_all_rank" className="ran-rank-handle ran-rank-handle-all  ui-right">
     			<a href="javascript:void(0);" className="active">
     				11—55
     			</a>
     			<a className="" href="javascript:void(0);">
     				56—100
     			</a>
     			</h4>
     		</div>
     		<div className="rank-tabcon">
     			<div className="rank-all-content clearfix">
     			<div className="rank-all-mod">
     				<div className="rank-all-top clearfix">
							<span className="no1">排名</span>
							<span className="no2">昵称</span>
							<span className="no3">累计投放（月票）</span>
						</div>
						<div className="rank-all-list">
							<ul className="rank-all-ul">
							<li>
								<em>11</em>
								<a className="" title="白衣">白衣</a>
									<span className="ft-all-month">11,111</span>
									<span className="ui-rank-trend-keep"></span>
								</li>
     					<li>
     					<em>12</em>
     													<a className="" title="慕风思月">慕风思月</a>
     													<span className="ft-all-month">10,591</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     											<li>
     												<em>13</em>
     												<a className="" title="菠萝味红头模">菠萝味红头模</a>
     												<span className="ft-all-month">10,067</span>
     												<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     													<em>14</em>
     													<a className="" title="水星">水星</a>
     													<span className="ft-all-month">9,509</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     												<em>15</em>
     												<a className="" title="一边">一边</a>
     												<span className="ft-all-month">8,877</span>
     												<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     												<em>16</em>
     												<a className="" title="零˛†">零˛†</a>
     												<span className="ft-all-month">8,400</span>
     												<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     												<em>17</em>
     												<a className="" title="IKUN">IKUN</a>
     												<span className="ft-all-month">7,998</span>
     												<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     												<em>18</em>
     												<a className="" title="じ、君莫笑ら">じ、君莫笑ら</a>
     												<span className="ft-all-month">7,793</span>
     												<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     													<em>19</em>
     													<a className="" title=".">.</a>
     													<span className="ft-all-month">7,670</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     													<em>20</em>
     													<a className="" title="閒人勿進">閒人勿進</a>
     													<span className="ft-all-month">7,630</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     													<em>21</em>
     													<a className="" title="Hutchin">Hutchin</a>
     													<span className="ft-all-month">7,341</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     													<em>22</em>
     													<a className="" title="Nala">Nala</a>
     													<span className="ft-all-month">7,282</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     					<li>
     													<em>23</em>
     													<a className="" title="煮不在糊">煮不在糊</a>
     													<span className="ft-all-month">7,212</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     											<li>
     													<em>24</em>
     													<a className="" title="乱世煮酒论天下">乱世煮酒论天下</a>
     													<span className="ft-all-month">6,962</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     											<li>
     													<em>25</em>
     													<a className="" title="Cc">Cc</a>
     													<span className="ft-all-month">6,607</span>
     													<span className="ui-rank-trend-keep"></span>
     											</li>
     				</ul>
     				</div>
     			</div>
     			<div className="rank-all-mod">
     									<div className="rank-all-top clearfix">
     											<span className="no1">排名</span>
     											<span className="no2">昵称</span>
     					<span className="no3">累计投放（月票）</span>
     				</div>
     				<div className="rank-all-list">
     				<ul className="rank-all-ul">
     				<li>
     											<em>26</em>
     											<a className="" title="兰斯洛">兰斯洛</a>
     											<span className="ft-all-month">6,150</span>
     											<span className="ui-rank-trend-keep"></span>
     										</li>
     				<li>
     												<em>27</em>
     												<a className="" title="BIAW·LDER">BIAW·LD</a>
     												<span className="ft-all-month">6,057</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>28</em>
     												<a className="" title="Mesets Devil">Mesets </a>
     												<span className="ft-all-month">6,050</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>29</em>
     												<a className="" title="寒孤曦">寒孤曦</a>
     												<span className="ft-all-month">6,020</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>30</em>
     												<a className="" title="年轻就该奋斗">年轻就该奋斗</a>
     												<span className="ft-all-month">5,968</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>31</em>
     												<a className="" title="晨曦微凌">晨曦微凌</a>
     												<span className="ft-all-month">5,657</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>32</em>
     												<a className="" title="旋涡鸣人">旋涡鸣人</a>
     												<span className="ft-all-month">5,633</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>33</em>
     												<a className="" title="暗夜公爵">暗夜公爵</a>
     												<span className="ft-all-month">5,600</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>34</em>
     												<a className="" title="元染zz">元染zz</a>
     												<span className="ft-all-month">5,496</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>35</em>
     												<a className="" title="晴云">晴云</a>
     												<span className="ft-all-month">5,469</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>36</em>
     												<a className="" title="秋风万里">秋风万里</a>
     												<span className="ft-all-month">5,408</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>37</em>
     												<a className="" title="二营长">二营长</a>
     												<span className="ft-all-month">5,397</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>38</em>
     												<a className="" title="王司徒后援会会长">王司徒后援会会</a>
     												<span className="ft-all-month">5,228</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>39</em>
     												<a className="" title="kalan">kalan</a>
     												<span className="ft-all-month">5,224</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     										<li>
     												<em>40</em>
     												<a className="" title="上善紫灵">上善紫灵</a>
     												<span className="ft-all-month">4,845</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     				</ul>
     				</div>
     			</div>
     			<div className="rank-all-mod last">
     			<div className="rank-all-top clearfix">
     									<span className="no1">排名</span>
     									<span className="no2">昵称</span>
     				<span className="no3">累计投放（月票）</span>
     			</div>
     			<div className="rank-all-list">
     				<ul className="rank-all-ul">
     				<li>
     												<em>41</em>
     												<a className="" title="’凹呦..">’凹呦..</a>
     												<span className="ft-all-month">4,825</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>42</em>
     												<a className="" title="cdreamear">cdreame</a>
     												<span className="ft-all-month">4,784</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>43</em>
     												<a className="" title="豌豆">豌豆</a>
     												<span className="ft-all-month">4,695</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>44</em>
     												<a className="" title="芊云上">芊云上</a>
     												<span className="ft-all-month">4,683</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>45</em>
     												<a className="" title="zoe">zoe</a>
     												<span className="ft-all-month">4,629</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>46</em>
     												<a className="" title="藤原拓嗨">藤原拓嗨</a>
     												<span className="ft-all-month">4,623</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>47</em>
     												<a className="" title="‭‭">‭‭</a>
     												<span className="ft-all-month">4,500</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>48</em>
     												<a className="" title="小豆芽">小豆芽</a>
     												<span className="ft-all-month">4,470</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>49</em>
     												<a className="" title="廖东光">廖东光</a>
     												<span className="ft-all-month">4,434</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>50</em>
     												<a className="" title="我家小婴">我家小婴</a>
     												<span className="ft-all-month">4,405</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>51</em>
     												<a className="" title="贩梦">贩梦</a>
     												<span className="ft-all-month">4,400</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>52</em>
     												<a className="" title="刀客">刀客</a>
     												<span className="ft-all-month">4,200</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>53</em>
     												<a className="" title="挽歌">挽歌</a>
     												<span className="ft-all-month">4,188</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>54</em>
     												<a className="" title="佛系选手">佛系选手</a>
     												<span className="ft-all-month">4,032</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
     																												<li>
     												<em>55</em>
     												<a className="" title="宇智波鼬">宇智波鼬</a>
     												<span className="ft-all-month">3,938</span>
     												<span className="ui-rank-trend-keep"></span>
     										</li>
                      </ul>
                    </div>
                  </div>
                    </div>
                </div>
            </div>

         </div>
    </div>
  </div>
    )
  }
}

export default Com
