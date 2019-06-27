<template>
    <div class="content">
        <el-input placeholder="请输入账号" clearable></el-input>
        <el-input placeholder="请输入密码" show-password clearable></el-input>
        <div class="but">
            <el-button type="success" round>立即登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'login'
}
</script>

<style scoped>
.content{
    height: 593px;
}
.el-input{
    margin-top: 5px;
}
.but{
    margin-top: 10px;
    text-align: center;
}
</style>
