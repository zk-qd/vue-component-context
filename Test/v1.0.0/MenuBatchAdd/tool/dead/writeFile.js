
/**
 * 写入权限文件
 * paths: ['industry','basic','rent/company','insert']
 *  */
function writePermiData(paths) {
    try {
        let realPaths = paths.slice(0, -1), // 实际路径数组
            filepath = path.join(permi_dir, realPaths.join('/')) + config.js, // 文件路径
            content = fs.readFileSync(filepath, config.encode), // 原内容
            pattern = /(?<=\{)([^]*)(?=\})/, // 取{}之间的内容
            currentContent = '\r\n' + paths.slice(-1)[0] + ':["' + paths.join(':') + '"],\r\n';
        fs.writeFileSync(filepath, content.replace(pattern, content.match(pattern)[1] + currentContent), config.encode);
    } catch (err) {
        console.log(chalk.red('writePermiData', err))
    }
};
/**
 * 写入权限index文件及数据
 * todo: 为了避免写入重复引入，通过之前内容判断引入是否存在，存在则不写入
 * todo: 第一次读取需要先判断文件是否存在,存在才判断重复
 *  */
function writePermiIndexFileData(paths, last) {
    // 如 paths = [industry,basic]
    // 如 paths = [industry,basic,rent/company]
    try {
        let realPaths = paths.slice(0, -1), // 实际路径数组
            currentPath = paths.slice(-1)[0],
            filepath = path.join(permi_dir, realPaths.join('/')) + config.main + config.js; // 文件路径
        if (fs.existsSync(filepath)) {
            let beforeContent = fs.readFileSync(filepath, config.encode);
            if (beforeContent.match(new RegExp(currentPath))) return;
        }
        let currentContent;
        if (last) {// 最后一层
            currentContent = [
                'import {default as _' + currentPath + '} from "./' + currentPath + '"\r\n',
                'export const ' + currentPath + ' = _' + currentPath + '\r\n',
            ]
        } else {//目录层
            currentContent = [
                'import * as _' + currentPath + ' from "./' + currentPath + '"\r\n',
                'export const ' + currentPath + ' = _' + currentPath + '\r\n',
            ];
        }
        fs.appendFileSync(filepath, currentContent.join(""), config.encode);
    } catch (err) {
        console.log(chalk.red('writePermiIndexFileData', err))
    }

};
/**
 * 和permi设计思路一样
 *  */
function writeRuleIndexFileData(paths, last) {
    // 如 paths = [industry,basic]
    // 如 paths = [industry,basic,rent/company]
    try {
        let realPaths = paths.slice(0, -1), // 实际路径数组
            currentPath = paths.slice(-1)[0],
            filepath = path.join(rule_dir, realPaths.join('/')) + config.main + config.js; // 文件路径
        if (fs.existsSync(filepath)) {
            let beforeContent = fs.readFileSync(filepath, config.encode);
            if (beforeContent.match(new RegExp(currentPath))) return;
        }
        let currentContent;
        if (last) {// 最后一层
            currentContent = [
                'import {default as _' + currentPath + '} from "./' + currentPath + '"\r\n',
                'export const ' + currentPath + ' = _' + currentPath + '\r\n',
            ]
        } else {//目录层
            currentContent = [
                'import * as _' + currentPath + ' from "./' + currentPath + '"\r\n',
                'export const ' + currentPath + ' = _' + currentPath + '\r\n',
            ];
        }
        fs.appendFileSync(filepath, currentContent.join(""), config.encode);
    } catch (err) {
        console.log(chalk.red('writeRuleIndexFileData', err))
    }
};
/**
 * 写入菜单文件
 * tips: 有些三级菜单可能是 'rent/company' 'ucar/company',因为不能一次创建两层目录，所以要做下处理

 * todo：未考虑目录类型的多层级，一般而言是不会出现这种情况的
 * todo: 对于四级菜单这里也是支持的
 * todo: 由于多层目录可能会创建多次，因此需要判断目录是否存在
 * 
 *  */
function writeDirFile(paths) {

    try {
        let lastPaths = paths.slice(-1)[0].split('/'), // [ucar,company]  'ucar/company'
            beforePaths = paths.slice(0, -1); // [industry,basic]
        // 多层目录
        lastPaths.forEach((item, index, arr) => {
            let paths = [...beforePaths, ...arr.slice(0, index + 1)],
                last = index === arr.length - 1;
            // 生成vue目录 
            !fs.existsSync(path.join(vue_dir, paths.join('/'))) && fs.mkdirSync(path.join(vue_dir, paths.join('/')));
            // 最后一层
            if (last) {
                // 生成index.vue
                fs.writeFileSync(path.join(vue_dir, paths.join('/') + config.main + config.vue));
                // 生成permi.js
                fs.writeFileSync(path.join(permi_dir, paths.join('/')) + config.js, `export default {\r\n\r\n}`, config.encode); // 生成rule.js
                fs.writeFileSync(path.join(rule_dir, paths.join('/')) + config.js, [
                    'import common from ' + config.common,
                    'export default {\r\n\r\n};'
                ].join('\r\n')); // 生成rule js
            } else {
                // 生成permi目录
                !fs.existsSync(path.join(permi_dir, paths.join('/'))) && fs.mkdirSync(path.join(permi_dir, paths.join('/'))); // 生成permi 目录
                !fs.existsSync(path.join(rule_dir, paths.join('/'))) && fs.mkdirSync(path.join(rule_dir, paths.join('/'))); // 生成rule
            }
            // 每一层目录都会生成index.js
            writePermiIndexFileData(paths, last); // permi index.js
            writeRuleIndexFileData(paths, last); // permi index.js
        })
    } catch (err) {
        console.log(chalk.red('writeDirFile创建失败', err))
    }

}
