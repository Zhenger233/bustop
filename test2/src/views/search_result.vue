<template>

  <el-container>
    <el-header style="margin-left:70px; font-size:40px">
      <span>公交线路详情</span>
    </el-header>

    <el-main>
      <el-card class="box-card">



        <div  class="text item" v-for = "line in item">
          {{line}}
        </div>

      </el-card>
    </el-main>
  </el-container>
</template>


<script>

const axios=require('axios');
export default {

  data() {return{
    todos:null,
    item: [],
    apiUrl: 'http://139.155.249.72:2333/api/search?start=',
    startStation:'',
    endStation:''

  }},
  created() {

    this.getParams(),
      console.log('\ncreate:',this.apiUrl);

    axios.get(this.apiUrl).then(res=>{console.log('\nres:',res,'\n');this.item=res.data;}).catch(err=>{console.log(err)});
  },

  methods :{getParams(){
      // 取到路由带过来的参数
      const routerParams = this.$route.query;
      console.log('\nsrparams:',routerParams.start,routerParams.end,'\n');
      this.startStation=routerParams.start;
      this.endStation=routerParams.end;
      // 将数据放在当前组件的数据内
      this.apiUrl=this.apiUrl+routerParams.start+'&end='+routerParams.end;
    }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>


<style scoped>
login-title{
  text-align:center;
}
</style>

