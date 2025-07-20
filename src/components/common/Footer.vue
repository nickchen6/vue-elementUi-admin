<template>
    <div style="padding: 15px" >
        <el-row   type="flex" justify="center">
            <div  >
                <h1>{{lang.homepage.contact}} </h1>
            </div>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top: 20px">
            <el-col :span="17">
                <el-card  style="padding: 10px;border-radius: 30px;" >
                    <el-form label-width="160px"  style="margin-top: 20px"  model="left">
                        <el-form-item :label="lang.homepage.address" >
                            <template #label>
                                <img src="static/img/picture/location.png"  style="width: 20px; height: 20px; object-fit: cover;">
                                {{lang.homepage.address}}
                            </template>
                            <span style="font-size: 20px;">
                                山东省德州市庆云县渤海路街道迪趣华府17-2号商铺2楼
                            </span>
                        </el-form-item>
                        <el-form-item :label="lang.homepage.phone">
                            <template #label>
                                <img src="static/img/picture/phone.png"  style="width: 20px; height: 20px; object-fit: cover;">
                                {{lang.homepage.phone}}
                            </template>
                            <span style="font-size: 20px">
                                13988888888
                            </span>
                        </el-form-item>
                        <el-form-item :label="lang.homepage.email">
                            <template #label>
                                <img src="static/img/picture/email.png"  style="width: 20px; height: 20px; object-fit: cover;">
                                {{lang.homepage.email}}
                            </template>
                            <span style="font-size: 20px">
                                youweb@qq.com
                            </span>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>
<script>
    import langpack from '../../lang/index.js';
    export default {
        created(){
        },
        data() {
            return {
            }
        },
        computed:{
            onRoutes(){
                console.log(this.$route.path);
                return this.$route.path;
            },
            lang(){
                return langpack[this.language]
            },
            language(){
                return this.$store.state.language;
            },
        },
        methods:{
            switchzh(){
                this.$store.commit('switchzh');
            },
            switchen(){
                this.$store.commit('switchen');
            },
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
        }
    }
</script>
<style scoped>
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-form-item__label {
    text-align: left !important;
    justify-content: flex-start !important; /* 如果 label 是 flex 布局 */
}
</style>
