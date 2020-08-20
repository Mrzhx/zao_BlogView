import qs from 'qs'

class Fetch {
  constructor(config = {}) {
    this.config = {
      cache: 'no-cache', // * default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {},
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
      timeOut: 3000,
      BASE_URL: 'http://127.0.0.1:7001',
      ...config
    }
  }

  send({ url, params, method = "GET", headers }) {
    // 发送 ajax 请求
    const { BASE_URL } = this.config
    const ajax = new Promise((resolve) => {
      fetch(BASE_URL ? `${BASE_URL}/${url}` : url, {
        ...this.config,
        body: params,
        headers,
        method,
      }).then((response) => {
        return response.json()
      }).then((data) => {
        resolve(data)
      })
    })
    // 设置超时时间
    const time = new Promise((reject) => {
      console.log(this.config.timeOut)
      setTimeout(() => {
        reject('time out')
      }, this.config.timeOut);
    })
    return Promise.race([ajax, time])
  }

  // 封装请求
  get({ url, query, headers }) {
    return this.send({ url: `${url}?${qs.stringify(query)}`, headers, method: 'GET' })
  }

  post({ url, params, headers }) {
    return this.send({ url, params, headers, method: 'POST' })
  }
}

export const newFetch = new Fetch();

