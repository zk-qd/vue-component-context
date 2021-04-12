// 附件上传混入
import { getToken } from "@/utils/auth";

export default {
    data() {
        return {
            observer: null,
            commandModel: null,
            dialogUrl: "",
            dialogVisible: false,
            // 为了获取操作dom不影响其他该组件
            randomClassName: $math.randomCoding(10),
            fileList: [
                /* {
                  name: "food.jpeg",
                  url:
                    "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                },
                {
                  name: "food2.jpeg",
                  url:
                    "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                } */
            ],
            //   percentage
            percentage: 0,

        };
    },
    methods: {
        /* 
          触发时机： 选择文件之后触发 
          触发条件：
          1. 上传后台成功或者失败
          2. 选择文件上传缓存时
          注意事项：
          1. 触发change事件不会触发remove事件，反之亦然
          2. fileList参数和fileList属性是不一样的，fileList参数包含所有文件（新添加的文件和原有的文件）,而fileList属性则是原有文件
          如果想要对应上，每次改变都需要将fileList参数赋值给fileList属性
          不管触发那个事件 都不会主动添加或者删除fileList,回调返回fileList参数会改变，但是fileList属性需要手动改变
          fileList属性改变后，通过属性绑定，也改变了fileList参数
          3. 如果选择文件直接上传，会触发两次change，第一次是上传缓存成功触发，返回本地的url，第二次上传后台成功触发，返回response，这里有个问题就是，他们的触发事件有一定的延迟，第二次change事件触发之前点击确认，那么给后台的就是本地的url：localhost，所以有时候就是明明上传了但是图片不能正常显示，解决办法，用进度条代替提示时候完成上传
        */
        handleChange(file, fileList) {
            this.fileList = [...fileList];
            this.observer.emit("togger", { length: this.fileList.length });
        },
        /*
          触发时机： 文件删除缓存之后触发 
          触发条件：
          1. 如果在before-upload没有通过，也会触发remove， 
          2. 直接点击删除触发 
          注意事项：
          1. 点击删除需要主动删除fileList中指定的数据
          2. 主动删除不会触发change事件
        */
        handleRemove(file) {
            // 根据索引删除对应文件
            let index = this.fileList.findIndex(item => item.uid === file.uid);
            this.fileList.splice(index, 1);
            this.observer.emit("togger", { length: this.fileList.length });
        },
        /* 
          触发时机： 选择文件时 
          触发条件：
          1. 选择文件上传缓存时如果文件个数超出，就会触发该方法
        */
        handleFileExceed(files, fileList) /* 文件超出限制钩子 */ {
            this.$message.warning("单次上传文件的个数不超过" + this.limit + "个");
        },
        // 上传给后台之前 1
        handleBeforeUpload(file) {
            // 判断文件的大小
            if (file.size > this.size) {
                this.$message.warning("文件大小超出");
                return false;
            }
        },


        // 文件上传后台过程处理 2
        handleFileUploadProgress(event, file, fileList) {
            this.percentage = file.percentage.toFixed(0) * 1;
        },
        // 文件上传后台成功之后处理
        /* 
        触发时机： 上传文件成功 
        触发条件：
        1. 上传文件成功
        注意事项：
        1. 上传文件成功后会触发change事件
        2. 不会删除成功的文件
        */
        handleFileSuccess(res, file, fileList) {
            this.percentage = 0;
            this.$message.success("上传成功");
        },

        // 文件上传后台失败
        /*
        触发时机： 上传文件失败 
        触发条件：
        1. 上传文件失败
        注意事项：
        1. 上传文件失败后会触发change事件，
        2. 会自动删除失败的文件
        */
        handleFileError() {
            this.percentage = 0;
            this.$message.error("上传失败");
        },
        // handleSubmit() {  // 使用了选中文件就提交，不需要使用这个了
        //   this.$refs.upload.submit();
        // },
        handlePictureCardPreview(file) {
            this.dialogUrl = file.url;
            this.dialogVisible = true;
            document.querySelectorAll('.el-dialog__wrapper').forEach(item => {
                item.style.zIndex = 10000;
            })
        },
        /* handleDownload(file) {
            console.log(file);
        } */
    },

    props: {
        ["file-text"]: {
            type: null,
            default: ""
        },
        // 驼峰命名，使用该属性可以用-分开
        className: {
            type: null,
            default: ""
        },
        accept: /* 文件类型 */ {
            // 仅仅只是选择文件时候，推荐选择一下格式，并不能强行限制该类型
            type: String,
            default: ".jpg, .jpeg, .png, .gif"
        },
        limit: {
            type: Number,
            default: 1
        },
        size: /* 文件大小限制 不超过2m */ {
            type: Number,
            default: 100 * 1024 * 1024
        },
        action: {
            type: String,
            default: "#"
        },
        list: {
            type: Array,
            default: () => []
        },
        disabled: {
            type: Boolean,
            default: false
        },
        /*
            人像面照片
            国徽面照片
          */
    },
    created() {
        this.$watch("list", {
            deep: true,
            immediate: false,
            handler(nData) {
                this.$set(this.$data, "fileList", [...nData]);
                // 初始化显示  注意时机，不然隐藏了preview
                this.observer.emit("togger", { length: this.fileList.length });
            }
        });
        this.observer = new $design.observer();
        this.observer.on("togger", e => {
            let { length } = e.params;
            if (length >= this.limit) {
                // 有文件
                this.commandModel.execute({
                    cmd: "have"
                });
            } else {
                // 没有文件
                this.commandModel.execute({
                    cmd: "none"
                });
            }
        });
    },
    mounted() {
        let uploadContainer = document.querySelector("." + this.randomClassName);
        let preview = uploadContainer.querySelector(
            ".el-upload-list.el-upload-list--picture-card"
        ),
            add = uploadContainer.querySelector(".el-upload.el-upload--picture-card");
        this.commandModel = new $design.command({
            none() { // 显示添加文件操作
                preview && (preview.style.display = "none");
                add && (add.style.display = "inline-block");
            },
            have() { // 隐藏添加文操作
                add && (add.style.display = "none");
                preview && (preview.style.display = "inline");
            }
        });
    },
    computed: {
        requestHeaders() {
            return { token: getToken(), /* ...this.headers */ };
        }
    }

}