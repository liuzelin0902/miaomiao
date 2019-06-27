<template>
    <div class="content">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>

<script>
export default {
    name : "Search"
}
</script>

<style scoped>
.content{
    height: 558px;
    overflow: auto;
}
</style>
