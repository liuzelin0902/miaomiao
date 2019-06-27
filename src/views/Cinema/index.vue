<template>
    <div>
        <Header title="博纳影院"/>
        <el-row>
            <el-col :span="8">
                <div>
                <span>全城</span><i class="el-icon-caret-bottom"></i>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                <span>品牌</span><i class="el-icon-caret-bottom"></i>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                <span>特色</span><i class="el-icon-caret-bottom"></i>
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
    name : 'Cinema',
    components : {
        Header,
        TabBar
    }
}
</script>

<style scoped>
.el-col{
    text-align: center;
    margin-top: 5px;
}

.el-row{
    border-bottom: solid #ece6e6;
    padding-bottom: 5px;
}
</style>
