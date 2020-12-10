export const SVG_ADDRESS = '//at.alicdn.com/t/font_2218079_l3xh6ulcqd.js';
// add script
function addSvgScript() {
    if (!document.getElementsByClassName('svgScript')[0]) {
        let script = document.createElement('script');
        script.defer = true;
        script.src = SVG_ADDRESS;
        script.type = 'text/javascript';
        script.className = 'svgScript';
        script.onerror = (e) => console.error('字体图标加载失败');
        document.head.appendChild(script);
    }
}
addSvgScript();

