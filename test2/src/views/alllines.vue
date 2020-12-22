<template>

  <el-container>
    <el-header style="margin-left:70px; font-size:40px">
      <span>线路详情查询</span>
    </el-header>

    <el-main>
    <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :label-position="labelPosition" label-width="100px" class="login-box" v-for = "line in item">
      <el-form-item label="">
<!--        <el-button type="primary" @click="submitForm('ruleForm')">{{line}}</el-button>-->
<!--        <el-button type="primary" @click="gotolink" >{{line}}</el-button>-->
<!--        <a class="orderBtn1 sIRicon2" href="javascript:void(0);" @click="toInfo(line)">{{line}}</a>-->
        <el-button class="orderBtn1 sIRicon2" href="javascript:void(0);" @click="toInfo(line)">{{line}}</el-button>
      </el-form-item>
    </el-form>
    </div>
    </el-main>
    <div>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a
            href="http://139.155.249.72:2333/api/allbus"
            target="_blank"
          >
            当前公交运营情况
          </a>
        </li>
      </ul>
    </div>
  </el-container>
</template>


<script>
const axios=require('axios');
  export default {

    data() {


      return{
        imgUrl:'',

      todos:null,
      item: [],
      apiUrl: 'http://139.155.249.72:2333/api/lines/世纪城',
     }
    },
    created() {
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
    methods: {
      // gotolink(){
      //
      //   //点击跳转至上次浏览页面
      //   // this.$router.go(-1)
      //
      //   //指定跳转地址
      //   this.$router.replace(/139.155.249.72:2333/api/lines/世纪城)
      // },
      toInfo: function(id){
        this.$router.push({
          path: '/line',
          // name: 'mallList',
          query: {id:id}
        })
      }
      }
    }

</script>

<style scoped>
login-title{
  text-align:center;
}
</style>
