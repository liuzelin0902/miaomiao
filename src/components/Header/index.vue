<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
        title : {
            type : String,
            default : '喵喵电影'
        }
    }
}
</script>

<style scoped>
    h1{
        text-align: center;
        background-color: #2c7d7d;
        margin-top: 0px;
        margin-bottom: 0px;
        padding-top: 10px;
        border-bottom-width: 10px;
        padding-bottom: 10px;

    }
</style>
