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
        <el-button type="primary" @click="gotolink" >{{line}}</el-button>
        <a class="orderBtn1 sIRicon2" href="javascript:void(0);" @click="toInfo(line)">{{line}}</a>
      </el-form-item>

    </el-form>
    </div>
    </el-main>
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
      gotolink(){

        //点击跳转至上次浏览页面
        // this.$router.go(-1)

        //指定跳转地址
        this.$router.replace('/line')
      },
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

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--   // // var validatePass = (rule, value, callback) => {-->
<!--   //    //if (value === '') {-->
<!--   //      callback(new Error('请输入密码'));-->
<!--   //    } else {-->
<!--   //      if (this.ruleForm.checkPass !== '') {-->
<!--   //        this.$refs.ruleForm.validateField('checkPass');-->
<!--   //      }-->
<!--   //      callback();-->
<!--   //    }-->
<!--   //  };-->

<!--    var vm = new Vue({-->
<!--      el: '#paper',-->
<!--      data: {-->
<!--        paperId: '',-->
<!--        paperlist: []-->
<!--      },-->
<!--      mounted:function() { //钩子函数-->
<!--        this.get();-->
<!--      },-->
<!--    })-->

<!--    return {-->
<!--      todos:[{text:1},{text:2},{text:3}],-->
<!--      imgUrl:'',-->
<!--      ruleForm: {-->
<!--        name: '',-->
<!--        delivery: false,-->
<!--        pass: '',-->
<!--        apiUrl: 'http://139.155.249.72:2333/api/lines/世纪城',-->
<!--        users: []-->
<!--      },-->
<!--      rules: {-->

<!--        pass: [-->
<!--          { required: true,validator: validatePass, trigger: 'blur' }-->
<!--        ]-->
<!--      }-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    submitForm(formName) {-->
<!--      this.$refs[formName].validate((valid) => {-->
<!--        if (valid) {-->

<!--          this.$router.push('/showline');-->
<!--        } else {-->
<!--          console.log('error submit!!');-->
<!--          return false;-->
<!--        }-->
<!--      });-->
<!--    },-->
<!--    get: function(){-->
<!--      this.$http.get('http://139.155.249.72:2333/api/lines/世纪城', {-->
<!--        paperId: this.paperId-->
<!--      }).then(-->
<!--        function(res){-->
<!--          this.paperlist = res.data;-->
<!--          console.log(this.paperlist);-->
<!--        },function(res){-->
<!--          console.log(res.status);-->
<!--        })-->
<!--    },-->

<!--    search: function(){-->
<!--      this.get();-->
<!--    }-->
<!--  },-->
<!--  created () {-->
<!--    this.$http.get(this.apiUrl).then((response) => {-->
<!--      console.log('\nres: ',response)-->
<!--    }, (error) => {-->
<!--      console.log('error:', error)-->
<!--    })-->
<!--  }-->
<!--}-->
<!--</script>-->

<style scoped>
login-title{
  text-align:center;
}
</style>
