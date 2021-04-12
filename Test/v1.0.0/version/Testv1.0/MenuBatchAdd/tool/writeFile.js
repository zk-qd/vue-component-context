
'use strict'


const fs = require('fs'),
    path = require('path'),
    chalk = require('chalk');

const menu_dir = path.join(__dirname, "menu"), // 菜单数据存放目录
    vue_dir = path.join(__dirname, "vue"), // 文件存放目录
    permi_dir = path.join(__dirname, 'permi'); // 权限存放目录

const config = {
    vue: '.vue',
    js: '.js',
    encode: 'utf-8',
    main: '/index',

}

/**
 * 生成规则：
 * 1. main为true这是主文件，主文件必须要放在第一个
 * 2. 只有是主文件才会生成主目录，index.vue文件，permi文件
 * 3. 只有unify为true才会生成 unify文件
 * 4. 按钮生成权限代码
 *  */
function generatorFile(paths, { type, main, unify }) {
    try {
        switch (type) {
            case 0:
                fs.mkdirSync(path.join(vue_dir, paths.join('/'))); // 生成vue
                fs.mkdirSync(path.join(permi_dir, paths.join('/'))); // 生成permi
                return;
            case 1:
                fs.mkdirSync(path.join(vue_dir, paths.join('/'))); // 生成vue
                fs.mkdirSync(path.join(permi_dir, paths.join('/'))); // 生成permi
                writePermiIndexData(paths);
                return;
            case 2:
                if (main) {
                    // 生成目录
                    fs.mkdirSync(path.join(vue_dir, paths.join('/'))); // 生成vue
                    // 生成index
                    fs.writeFileSync(path.join(vue_dir, paths.join('/') + config.main + config.vue)); // 生成vue
                    // 主文件才会生成permi
                    fs.writeFileSync(path.join(permi_dir, paths.join('/')) + config.js, `export const ${paths.slice(-1)[0]} = {}`, config.encode); // 生成permi
                    writePermiIndexData(paths);
                } else {
                    // insert find update
                    writeUnifyFile(paths);
                }
                if (unify) {
                    // unufy为true 才会生成
                    fs.writeFileSync(path.join(vue_dir, paths.join('/') + '/unify' + config.vue)); // 生成unify
                }
                return;
            case 3:
                // 写入菜单权限
                writePermiData(paths)
                return;
        }
    } catch (error) {
        console.log(chalk.red('目录或文件创建失败', error));
    }
}
/**
 * 写入菜单数据
 *  */
function writeMenuData(data) {
    try {
        data.forEach(item => {
            fs.writeFile(path.join(menu_dir, item.path + '.json'), JSON.stringify(data), config.encode, err => {
                if (err) console.log(chalk.red(item.path, '写入失败', err))
                else console.log(chalk.green(item.path, '写入成功'))
            })
        });
    } catch (err) {
        console.log(chalk.red('writeMenuData', err))
    }
}


/**
 * 写入权限文件
 *  */
function writePermiData(paths) {
    try {
        let realPaths = paths.slice(0, -1), // 实际路径数组
            filepath = path.join(permi_dir, realPaths.join('/')) + config.js, // 文件路径
            content = fs.readFileSync(filepath, config.encode), // 原内容
            pattern = /(?<=\{)([^]*)(?=\})/, // 匹配模式
            currentContent = '\r\n' + paths.slice(-1)[0] + ':["' + paths.join(':') + '"],\r\n';
        fs.writeFileSync(filepath, content.replace(pattern, content.match(pattern)[1] + currentContent), config.encode);
    } catch (err) {
        console.log(chalk.red('writePermiData', err))
    }
};
/**
 * 写入权限index文件
 *  */
function writePermiIndexData(paths) {
    try {
        let realPaths = paths.slice(0, -1), // 实际路径数组
            currentPath = paths.slice(-1)[0],
            filepath = path.join(permi_dir, realPaths.join('/')) + config.main + config.js, // 文件路径
            currentContent = 'export * as ' + currentPath + ' from "./' + currentPath + '"\r\n';
        fs.appendFileSync(filepath, currentContent, config.encode);
    } catch (err) {
        console.log(chalk.red('writePermiIndexData', err))
    }

};

/**
 * 生成insert update find
 *  */
function writeUnifyFile(paths) {
    paths = [...paths.slice(0, -1), ...paths.slice(-1)[0].split('/')];
    let currentContent = `
<template>
    <unify type="${paths.slice(-1)[0]}" />
</template>
<script>
import unify from "./unify";
export default {
    name: "${paths.join('_')}",
    components: { unify },
    data() {
        return {};
    },
    created() {}
};
</script>
<style lang="less" scoped></style>
`
    fs.writeFileSync(path.join(vue_dir, paths.join('/') + config.vue), currentContent); // 生成vue
}


module.exports = {
    generatorFile,
    writeMenuData,
}