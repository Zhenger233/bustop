<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-menu-item index="1">
          <template slot="title"><i class="el-icon-star-on"></i>常用线路</template>
        </el-menu-item>
        <el-menu-item index="2">
          <template slot="title"><i class="el-icon-s-flag"></i>常去站点</template>
        </el-menu-item>
      </el-menu>
    </el-aside>



    <el-main>
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-box">
      <el-form-item label="修改密码" prop="pass">
       <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
       <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

       <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
       </el-form-item>
     </el-form>
    </el-main>

    <el-footer>
      <el-table
        :data="tableData"
        class="table-box">
        <el-table-column
          prop="line"
          label="线路"
          width="180">
        </el-table-column>
        <el-table-column
          prop="start"
          label="起点"
          width="180">
        </el-table-column>
        <el-table-column
          prop="end"
          label="终点"
          width="180">
        </el-table-column>
        <el-table-column
          prop="timestart"
          label="发车时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="timeend"
          label="收班时间"
          width="180">
        </el-table-column>
      </el-table>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

.login-box{
  width:400px;
  display: inline-block;

}
login-title{
  text-align:center;
}

.el-aside {
  color: #333;
}

.table-box{
  margin-left:300px;
}
</style>
