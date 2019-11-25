import axios from 'axios'
const get = ({
  url,
  params,
  that
}) => {
  return axios({
    url,
    params,
    cancelToken: new axios.CancelToken(function executor(c) { // 设置 cancel token
      if(that){
        that.source = c;
      } 
    })
  })
  .then((result) => {
    return result
  })
  .catch((err) => {
      return err.message
  })
}
export default {
  get
}