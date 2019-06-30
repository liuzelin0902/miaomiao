<template>
    <div class="maxDiv">
        <div class="content">
            <div class="mainCity">
                <div v-for="item in hotList" :key="item.id" class="tag"><el-tag type="info">{{item.nm}}</el-tag></div>

        <!--  <el-row>
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
            </el-row>-->
            </div>
            <div ref="city_sort">
                <div v-for="item in cityList" :key="item.index">
                    <h2>{{item.index}}</h2>
                    <div>
                        <p v-for="itemList in item.list" :key="itemList.id">{{itemList.nm}}<el-divider></el-divider></p>
                    </div>
                </div>
            <!--  <div>
                    <h2>A</h2>
                    <div>
                        <p>北京</p><el-divider></el-divider>
                        <p>安庆</p><el-divider></el-divider>
                        <p>安阳</p><el-divider></el-divider>
                        <p>北京</p><el-divider></el-divider>
                        <p>安庆</p><el-divider></el-divider>
                        <p>安阳</p>
                    </div>
                </div> -->
            </div>
        </div>
        <div>
            <ul>
                <li v-for="(item,index) in cityList" :key="item.index" @click="handleToIndex(index)">{{item.index}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : "City",
    data(){
        return{
            cityList : [],
            hotList : []
        }
    },
    mounted(){
        this.axios.get('/api/cityList').then((res)=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                var cities = res.data.data.cities;
                var {cityList, hotList} = this.formatCityList(cities);
                this.cityList = cityList;
                this.hotList = hotList;
            }
        });
    },
    methods : {
        formatCityList(cities){
            var cityList = [];
            var hotList = [];

            for(var i=0;i<cities.length;i++){
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){
                    cityList.push({index : firstLetter, list : [{nm : cities[i].nm, id : cities[i].id}]});
                }else{
                    for(var j=0;j<cityList.length;j++){
                        if(cityList[j].index === firstLetter){
                            cityList[j].list.push({nm:cities[i].nm, id:cities[i].id})
                        }
                    }
                }

                if(cities[i].isHot === 1){
                    hotList.push({nm:cities[i].nm, id:cities[i].id});
                }
            }

            cityList.sort((n1,n2)=>{
                if((n1.index < n2.index)){
                    return -1;
                }
            })

            function toCom(firstLetter){
                for(var i=0;i<cityList.length;i++){
                    if(cityList[i].index === firstLetter){
                        return false;
                    }
                }
                return true;
            }

            return {
                cityList,
                hotList
            }
        },
        handleToIndex(index){
            var h2 = this.$refs.city_sort.getElementsByTagName('h2');
            console.log(h2[index].offsetTop);
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop-100;
        }
    }
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
.tag{
    display: inline-block;
    margin-left: 30px;
    margin-top: 10px;
}
li{
    display: block;
}
ul{
    padding-left: 5px;
}
.maxDiv{
    display: flex;
}
</style>
