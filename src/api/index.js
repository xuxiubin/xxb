let baseUrl = '/wei'

process.env.NODE_ENV === 'development' ? baseUrl = '/wei' : baseUrl = 'http://101.132.193.122:3000'

export default baseUrl