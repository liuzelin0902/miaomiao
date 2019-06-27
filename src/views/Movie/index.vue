<template>
    <div>
        <Header title="华谊电影"/>
            <el-row>
                <el-col :span="4">
                    <div @click="say">
                    <router-link tag="div" to="/movie/city">
                    <span>大连</span><i class="el-icon-caret-bottom"></i>
                    </router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div @click="say('now')">
                    <router-link tag="div" to="/movie/nowPlaying">
                    <span :class="idx=='now'?'activated':''">正在热映</span>
                    </router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div @click="say('soon')">
                    <router-link tag="div" to="/movie/comingSoon">
                    <span :class="idx=='soon'?'activated':''">即将上映</span>
                    </router-link>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div @click="say">
                    <router-link tag="div" to="/movie/search">
                    <svg class="icon1">
                        <use xlink:href="#el-miaomiao-uisousuo">
                        </use>
                    </svg>
                    </router-link>
                    </div>
                </el-col>
            </el-row>
            <keep-alive>
                <router-view/>
            </keep-alive>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    name : 'Movie',
    components : {
        Header,
        TabBar
    },
    data(){
        return {
            idx : 'now'
        }
    },
    methods: {
        say(message) {
            this.idx = message; 
        }
  }
}
</script>

<style scoped>
.icon1{
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
  overflow: hidden;
}

.el-col{
    text-align: center;
    margin-top: 5px;
}

.el-row{
    border-bottom: solid #ece6e6;
}
.activated{
    border-bottom: 5px solid #f56c6c;
    padding-bottom: 4px;
    font-weight: bold;
    font-size: 18px;
}
</style>
