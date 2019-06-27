<template>
    <footer id="footer">
        <el-row>
            <el-col :span="8">
                <router-link tag="div" to="/movie">
                <div>
                    <svg class="icon">
                        <use xlink:href="#el-miaomiao-uiiMoviedianying">
                        </use>
                    </svg>
                </div>
                <div>
                    <span>电影</span>
                </div>
               </router-link>
            </el-col>
               
            <el-col :span="8">
                <router-link tag="div" to="/cinema">
                <div>
                    <svg class="icon">
                        <use xlink:href="#el-miaomiao-ui-">
                        </use>
                    </svg>
                </div>
                <div>
                    <span>影院</span>
                </div>
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link tag="div" to="/mine">
                <div>
                    <svg class="icon">
                        <use xlink:href="#el-miaomiao-uiwode">
                        </use>
                    </svg>
                </div>
                <div>
                    <span>我的</span>
                </div>
                </router-link>
            </el-col>
        </el-row>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    text-align: center;
}

.el-row{
    border-top: solid #ece6e6;
    padding-top: 5px;
}

.el-col{
    min-height: 36px;
    border: 1px
}

.icon{
  width: 2em;
  height: 2em;
  fill: currentColor;
  overflow: hidden;
}

.router-link-active{
    color : #9b9acf;
}
    
</style>
