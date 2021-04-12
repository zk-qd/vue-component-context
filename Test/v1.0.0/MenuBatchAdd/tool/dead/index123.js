
'use strict'

// tips: type并不是代指那一层目录或菜单   一级目录固定使用 type = 0 二级以及以下目录使用 type = 1  所有级别菜单使用 type = 2
/*
create: 创建文件 或者 创建文件同时也写入了内容
write：仅仅是写入内容
rest: 其他
any: 任何
indexJs: index.js
....

createIndexJs： write,创建文件和内容 IndexJs表示index.js


总体布局：

1. createListAndIndex方法创建所有目录 以及所有的index（除了最后一层目录下的index），

适用： 多层目录如['rent/company']，1，2，3,4级菜单
type 0 1 2都用该方法创建 并且他们都可以有多层目录
- 一级菜单： 如首页
- 二级菜单： 如数据交换平台
- 三级菜单： 最普遍
- 四级菜单： 也可以
- 三级菜单下面还有子菜单但是不显示仍然作为三级菜单，也能实现目录文件创建
- 


2. type = 2 并且 main为true(表示主文件) 创建最后一层目录下的 所有 index文件
3. type = 2 创建 unify和 insert,find,update 文件
4. type = 3 由于只有主文件才有type等于3的有children，因此不需要做额外判断，主文件下的按钮写入permi的内容 
5. 做了安全策略，防止目录创建多次或者文件重复写入多次（最后一层的index.js文件） 




*/


const fs = require('fs'),
    path = require('path'),
    chalk = require('chalk');

const menu_dir = path.join(__dirname, "menu"), // 菜单数据存放目录
    vue_dir = path.join(__dirname, "vue"), // 文件存放目录
    permi_dir = path.join(__dirname, 'permi'), // 权限存放目录
    rule_dir = path.join(__dirname, 'rule'); // 校验规则存放目录

const config = {
    vue: '.vue',
    js: '.js',
    encode: 'utf-8',
    main: '/index',
    unify: '/unify',
    common: '"@/utils/rules/common";'

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
                createListAndIndex(paths, type);
                return;
            case 1:
                createListAndIndex(paths, type);
                return;
            case 2:
                if (main) {
                    createListAndIndex(paths, type);
                    // 最后一层下的 index.vue
                    createIndexVue(paths);
                    // 写入最后一层下的 rule的 index.js
                    createRuleJs(paths);
                    // 最后一层下的  permi的 index.js
                    createPermiJs(paths);
                } else {
                    // 创建 insert find update 文件
                    createRestVue(paths.join('/').split('/'));
                }
                if (unify) {
                    // unify为true 才会生成   创建 unify.vue文件
                    createUnifyVue(paths);
                }
                return;
            case 3:
                // 写入菜单权限
                writePermiJs(paths);
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
    let filename = data[0].path.split('/')[0]; // path: industry or exchange/manage/source
    fs.writeFile(path.join(menu_dir, filename + '.json'), JSON.stringify(data), config.encode, err => {
        if (err) console.log(chalk.red(filename, '写入失败', err))
        else console.log(chalk.green(filename, '写入成功'))
    })
}


/* 

思路：
1. type为 0 1 2 使用该方法
2. 该方法创建所有的目录以及所有的index文件,但不包含 最后一层目录下的index.js index.vue
3. 只有type为0并且创建第一个目录的时候不创建index，因为目录要先创建
4. 如果type为2，那么最后一层目录同级的文件index内容不一样
5. 目录和index同级创建的，并不是同时创建目录以及目录下的index

参数：
paths: 各层级的目录 
第一层 paths = [industry] or ['exchange/manage/source']  type = 0 
第二层 paths = [industry,basic] or ['exchange/manage/source','list']  type = 1
第三层 paths = [industry,basic,'rent/company'] or ['exchange/manage/source','list', 'xxx']  type = 2
type: 0 or 1 or 2

tips: type = 0 是第一层 type = 1 不一定是第二层 也可能是第三层 如果是四级菜单的话 三级目录也是使用type = 1

*/
function createListAndIndex(paths, type) {
    let beforePaths = (paths.length == 1 ? [] : paths.slice(0, -1)).join('/'),
        currentPaths = paths.slice(-1)[0].split('/'),
        currentPathsLength = currentPaths.length;
    currentPaths.forEach((item, index) => {
        let path_list = beforePaths + '/' + currentPaths.slice(0, index + 1).join('/');
        createAnyList(path.join(vue_dir, path_list)); // 生成vue目录
        createAnyList(path.join(permi_dir, path_list)); // 生成permi目录
        createAnyList(path.join(rule_dir, path_list)); // 生成rule目录

        // type = 0 index = 0就不做任何事
        if (index !== 0 || type !== 0) {
            let path_permi_index = path.join(permi_dir, path_list.replace(item, '') + config.main + config.js),
                path_rule_index = path.join(rule_dir, path_list.replace(item, '') + config.main + config.js),
                last = (index === currentPathsLength - 1 && type === 2), // 最后一层目录平级的index.js文件的内容
                writeContent = getIndexJsContent(item, last);
            createIndexJs(path_permi_index, item, writeContent);
            createIndexJs(path_rule_index, item, writeContent);
        }

    })

}

/* 
创建目录规则
如 创建 vue permi rule目录

参数：
path： 完整目录路径

tips: 安全策略，防止目录重复创建
*/
function createAnyList(path) {
    if (!fs.existsSync(path))
        fs.mkdirSync(path);
}





/**
 * 获取写入的内容   permi和rule的index的内容
 * 思路: 因为写入内容都是一样的，因此我想干脆也把它抽离了
 * 
 * 参数：
 * name： 需要引入的变量名称，但实际上也是一个目录名称或者文件名称
 * last: 是否是最后一个index的写入内容
 *
 *  */
function getIndexJsContent(name, last = false) {
    let writeContent;
    if (last) {
        writeContent = [
            'import {default as _' + name + '} from "./' + name + '"\r\n',
            'export const ' + name + ' = _' + name + '\r\n',
        ]
    } else {
        writeContent = [
            'import * as _' + name + ' from "./' + name + '"\r\n',
            'export const ' + name + ' = _' + name + '\r\n',
        ]
    }
    return writeContent.join('');
}

/* 
写入index.js的规则
如写入  permi 和 rule
思路：
1. 写入index的时候,如果已经存在index并且有重复内容那么就不写入内容了

参数：
path_index: index文件的完整路径 
name: 需要判断是否重复引入的变量名称
writeContent: 需要写入的内容
*/
function createIndexJs(path_index, name, writeContent) {
    if (!(fs.existsSync(path_index) && fs.readFileSync(path_index, config.encode).match(name))) {
        fs.appendFileSync(path_index, writeContent);
    }
}


/**
 * 创建permi.js
 * paths:  ['industry','basic','rent/company']
 *  */
function createPermiJs(paths) {
    fs.appendFileSync(path.join(permi_dir, paths.join('/'), config.main) + config.js, `export default {\r\n\r\n}`, config.encode); // 生成rule.js
}
/**
 * 写入rule.js
 * 参数：
 * paths:  ['industry','basic','rent/company']
 * 
 */
function createRuleJs(paths) {
    fs.appendFileSync(path.join(rule_dir, paths.join('/'), config.main) + config.js, [
        'import common from ' + config.common,
        'export default {\r\n\r\n};'
    ].join('\r\n')); // 生成rule js
}

/*
创建index.vue文件

思路:
1. 考虑到多层目录
2. 需要循环创建该层的目录
3. 最后一层再创建index.vue文件

参数：
paths:  ['industry','basic','rent/company'] 
*/
function createIndexVue(paths) {
    fs.writeFileSync(path.join(vue_dir, paths.join('/') + config.main + config.vue))
}


/* 
创建unify文件
参数：
paths:  ['industry','basic','rent/company']

tips: 多层目录 createIndexVue方法创建好了
*/
function createUnifyVue(paths) {
    fs.writeFileSync(path.join(vue_dir, paths.join('/') + config.unify + config.vue));
}

/**
 * 创建find,update,insert等文件和内容
 * 
 * 参数:
 * paths: 路径数组
 * paths: ['industry','basic','rent','company','insert'] or ['industry','basic','rent','company','update']
 *  */
function createRestVue(paths) {
    let writeContent = `
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
    fs.writeFileSync(path.join(vue_dir, paths.join('/') + config.vue), writeContent); // 生成vue
}


/**
 * 写入permi.js的内容
 * 
 * 参数
 * paths: ['industry','basic','rent/company','insert']
 * 
 *  */
function writePermiJs(paths) {
    let beforePaths = paths.slice(0, -1), // ['industry','basic','rent/company']
        name = paths.slice(-1)[0],//变量名称
        filepath = path.join(permi_dir, beforePaths.join('/'), config.main) + config.js, // permi文件的路径
        beforeContent = fs.readFileSync(filepath, config.encode), // 之前的内容
        pattern = /(?<=\{)([^]*)(?=\})/, // 取{}之间的内容
        writeContent = '\r\n' + name + ':["' + paths.join(':').replace(/\//g, ':') + '"],\r\n';

    fs.writeFileSync(filepath,
        beforeContent.replace(
            pattern,
            beforeContent.match(pattern)[1] + writeContent
        ),
        config.encode
    );
}

module.exports = {
    generatorFile,
    writeMenuData,
}







