<template>
    <div class="content">
        <div class="mainCity">
        <el-row>
            <el-col :span="6">
                <el-tag type="info">北京</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">上海</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">深圳</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">广州</el-tag>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-tag type="info">杭州</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">武汉</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">成都</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">重庆</el-tag>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-tag type="info">西安</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">郑州</el-tag>
            </el-col>
            <el-col :span="6">
                <el-tag type="info">苏州</el-tag>
            </el-col>
            <el-col :span="6">
            </el-col>
        </el-row>
        </div>
        <div>
            <div>
                <h2>A</h2>
                <div>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p><el-divider></el-divider>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p>
                </div>
            </div>
            <div>
                <h2>B</h2>
                <div>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p><el-divider></el-divider>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p>
                </div>
            </div>
            <div>
                <h2>C</h2>
                <div>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p><el-divider></el-divider>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p>
                </div>
            </div>
            <div>
                <h2>D</h2>
                <div>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p><el-divider></el-divider>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p>
                </div>
            </div>
            <div>
                <h2>E</h2>
                <div>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p><el-divider></el-divider>
                    <p>北京</p><el-divider></el-divider>
                    <p>安庆</p><el-divider></el-divider>
                    <p>安阳</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "City"
}
</script>

<style scoped>
.content{
    background-color: blanchedalmond;
    height: 558px;
    overflow: auto;
}
.el-col{
    text-align: center;
}
.el-row{
    margin-top: 10px;
}
.el-tag{
    color: #000000;
    padding-right: 25px;
    padding-left: 25px;
}
h2{
    background-color: #c5e8b5;
    padding-left: 10px;
    margin-bottom: 0px;
    margin-top: 0px;
}
p{
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 10px;
}
.mainCity{
    margin-bottom: 10px;
}
.el-divider{
    margin: 0px auto;
}
</style>
