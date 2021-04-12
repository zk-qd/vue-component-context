

/**  
* @param {Object} config
* @return {Promise} 返回的是一个promise pending  
*/
function ajax({
    url,
    method = 'get',
    params = null,
    data = null,
    async = true,
    responseType = 'json',
    headers = {},
    timeout = 0,
} = !function () { throw '请传入配置参数' }()) {

    return new Ajax_SimplePromise(function (resolve, reject) {
        const cxt = this;

        const xhr = new XMLHttpRequest();
        const config = {
            passive: false,
            once: false,
            capture: false,
        }
        const handle = {
            handleEvent(e) {
                switch (e.type) {
                    case 'loadstart':
                        this.loadstart(e);
                        break;
                    case 'load':
                        this.load(e);
                        break;
                    case 'loadend':
                        this.loadend(e);
                        break;
                    case 'error':
                        this.error(e);
                        break;
                    case 'timeout':
                        this.timeout(e);
                        break;
                    case 'abort':
                        this.abort(e);
                        break;
                    case 'progress':
                        this.progress(e);
                        break;
                }
            },
            loadstart(e) {

            },
            load(e) {
                //如果请求成功
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    resolve.call(cxt, e)

                }
            },
            loadend(e) {
            },
            error(e) {
                reject.call(cxt, e)
            },
            timeout(e) {
                reject.call(cxt, e)
            },
            abort(e) {
                reject.call(cxt, e)
            },
            progress(e) {
            },

        }
        // 同步请求不能设置超时时间
        xhr.timeout = timeout;
        xhr.addEventListener('loadstart', handle, config);
        xhr.addEventListener('load', handle, config);
        xhr.addEventListener('loadend', handle, config);
        xhr.addEventListener('error', handle, config);
        xhr.addEventListener('timeout', handle, config);
        xhr.addEventListener('abort', handle, config);
        xhr.addEventListener('progress', handle, config);

        concat(url);
        xhr.open(method, url, async);
        // 同步请求不能设置 响应类型
        async && (xhr.responseType = responseType);
        header();

        // 处理没网的状态
        try {
            xhr.send(data && JSON.parse(JSON.stringify(data)));
        } catch (e) {
            reject.call(cxt, e);
        }
        // query string parameters
        function concat(url) {
            var querystring = '';
            if (params) {
                for (let key in params) {
                    querystring += key + '=' + params[key];
                    querystring += '&';
                }
                // 去除末尾&
                if (querystring.match(/&$/g)) querystring = querystring.slice(0, querystring.length - 1);
                // 编码
                querystring = encodeURIComponent(querystring);
                // 连接
                url.indexOf('?') == -1 ? url += '?' + querystring : url += querystring;
            }
        }
        // adapter header
        function header() {
            if (data instanceof FormData)
                xhr.setRequestHeader('Content-Type', 'multipart/form-data');
            else
                xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    })
}
function Ajax_SimplePromise(execute) {
    this.status = 'pending';
    this.error = null;
    this.success = null;
    execute.call(this, this.resolve, this.reject);
}

Ajax_SimplePromise.prototype = {
    then(onFufilled) {
        if (this.success && onFufilled) {
            // 如果进入 那么就说明是同步执行
            onFufilled(this.success);
        } else {
            // 异步 
            this.onFufilled = onFufilled;
        }
        return this;
    },
    catch(onReject) {
        if (this.error && onReject) {
            // 同步状态
            onReject(this.error);
        } else {
            this.onReject = onReject;
        }
    },
    resolve(success) {
        if (this.status == 'pending') {
            this.status = 'fulfilled';
            if (this.onFufilled) {
                // 如果进入那么就说明这是异步
                this.rValue = this.onFufilled(success);
            } else {
                this.success = success;
            }
        }
    },
    reject(error) {
        if (this.status == 'pending') {
            this.status = 'rejected';
            if (this.onReject) {
                // 异步
                this.rValue = this.onReject(error);
            } else {
                this.error = error;
            }
        }
    }
}

export default ajax;


