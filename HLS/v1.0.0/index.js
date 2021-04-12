

const videoMap = new Map();
function initScript() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/hls.js/latest/hls.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
}

function ckplayer({
    container = selector, //容器id或者className
    video: url, // 视频地址https://tx1.yunchuanglive.com/live/SSAA-066187-ADCBA.m3u8
} = {}) {

    // 创建video标签
    let containerEl = document.querySelector(container),
        videoId = container.replace('#', '') + getRandom(),
        videoHtml = `
    <video id="${videoId}" autoplay preload controls style="width:100%;height:100%;"></video>
    `;
    containerEl.innerHTML = videoHtml;
    ckplayRecycle();
    // 创建hls
    let videoEl = document.getElementById(videoId);
    function createHls() {
        let hls = new Hls();
        hls.loadSource(url), hls.attachMedia(videoEl), hls.on(Hls.Events.MANIFEST_PARSED, () => {
            videoEl.play();
        }), hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                switch (data.type) {
                    // 网络错误导致的错误，据观察这种类型的错，占比最高
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        // 500 400 404都进入这里
                        console.log('第一个')
                        // 根据自己业务（心跳/错误次数 需要加载还是重新请求，这里只给出简单的，加载情况作为示例）
                        hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.log('第二个')
                        // 多媒体错误
                        hls.recoverMediaError();
                        break;
                    default:
                        console.log('第三个')
                        // hls.destroy();
                        // createHls();
                        break;
                }
            }
        })
        return hls;
    }
    let hls = createHls();

    // 添加播放列表
    ckplayPaylist(hls, videoId)
}
// 获取随机数
function getRandom() {
    return Date.now() + 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
}


/**
 * 视频回收
 * 回收机制：
 * 如果视频标签不存在了，那么就回收
 */
function ckplayRecycle() {
    for (let [hls, id] of videoMap) {
        if (!document.getElementById(id)) {
            hls.destroy();
            videoMap.delete(hls);
            console.info(id, '视频已销毁')
        }
    }
}
// ckplayPaylist
function ckplayPaylist(hls, id) {
    videoMap.set(hls, id);
}

// 页面之前全部回收
window.onbeforeunload = function () {
    for (let [hls, id] in videoMap) hls.destroy();
    videoMap.clear();
    console.info('视频已全部销毁')
}

initScript();


// 需求
/*
    1. 播放多视频

    2. 播放视频

    2. 销毁视频

    3. 暂停视频

    4. 重启视频


*/


