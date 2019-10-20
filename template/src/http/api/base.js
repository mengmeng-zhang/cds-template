import config from "@/utils/config"
// 统一处理接口基础url, 区分不通模式
const baseUrl = {
  development: {
    api: `${config.hostName.development}${config.interfaceBase}`
  },
  production: {
    api: `${config.hostName.production}${config.interfaceBase}`
  },
  debug: {
    api: `${config.hostName.debug}${config.interfaceBase}`
  }
}

let base

// 环境的切换
if (process.env.NODE_ENV == 'development') {
  base = baseUrl.development
} else if (process.env.NODE_ENV == 'debug') {
  base = baseUrl.debug
} else if (process.env.NODE_ENV == 'production') {
  base = baseUrl.production
}else{
  base = baseUrl.development
}

export default base
