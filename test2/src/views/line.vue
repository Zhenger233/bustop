<template>

  <el-container>
    <el-header style="margin-left:70px; font-size:40px">
      <span>线路详情查询</span>
    </el-header>

    <el-main>
<!--      <div>-->
<!--        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :label-position="labelPosition" label-width="100px" class="login-box" v-for = "line in item">-->
<!--          <el-form-item label="">-->
<!--            <el-button type="primary" @click="submitForm('ruleForm')">{{line}}</el-button>-->
<!--            <a class="orderBtn1 sIRicon2" href="javascript:void(0);" @click="toInfo(line)">{{line}}</a>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--      </div>-->
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
    apiUrl: 'http://139.155.249.72:2333/api/line/',

  }},
  created() {

    this.getParams(),
    console.log('\ncreated.\n');
    // this.$http.get(this.apiUrl).then((response) => {
    //   console.log('\nres: ', response);
    //   this.item = response
    //   this.todos=response
    // }, (error) => {
    //   console.log('error:', error)
    // })
    axios.get(this.apiUrl).then(res=>{console.log('\nres:',res,'\n');this.item=res.data;}).catch(err=>{console.log(err)});
  },

  methods :{getParams(){
      // 取到路由带过来的参数
      const routerParams = this.$route.query.id
      // 将数据放在当前组件的数据内
      this.apiUrl+=routerParams;
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
