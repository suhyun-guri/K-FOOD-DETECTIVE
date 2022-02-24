// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
// dynamic export로 컴포넌트 쉽게 불러오기
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = req(key).default
})