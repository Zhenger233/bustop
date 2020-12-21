<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-menu-item index="1">
          <template slot="title"><i class="el-icon-search"></i>线路查询</template>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>公交线路发车表</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">116</el-menu-item>
            <el-menu-item index="2-2">396</el-menu-item>
            <el-menu-item index="2-3">96</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3">
          <template slot="title"><i class="el-icon-s-flag"></i>站点周边搜索</template>
        </el-menu-item>
      </el-menu>
    </el-aside>




    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-button type="primary" @click="submitForm('ruleForm')">线路全览</el-button>
        <el-button type="primary" @click="FeedbackForm('ruleForm')">联系我们</el-button>

        <el-col :span="50">
          <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-button type="primary" @click="userForm('ruleForm')">用户信息</el-button>
          </div>
        </el-col>
      </el-header>


      <el-main>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="search-box">
          <el-form-item label="" prop="region1">
            <el-select v-model="value1" multiple placeholder="请选择起点">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select
              v-model="value2"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择终点">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

</el-form-item>

          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>





<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '龙湖时代天街'
      }, {
        value: '选项2',
        label: '犀浦快铁'
      }, {
        value: '选项3',
        label: '天润路'
      }, {
        value: '选项4',
        label: '合信路'
      }, {
        value: '选项5',
        label: '锦城学院'
      }],
      value1: [],
      value2: [],
      imgUrl:'',
      ruleForm: {
        pass: ''
      },
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/alllines');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    userForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/user');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    FeedbackForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/about');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>








<style>
.search-box{
  width:800px;
  margin-left:150px;
  border:1px solid #DCDFE6;
  padding:40px;
  border-radius:10px;
  box-shadow:0 0 30px #DCDFE6
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}


</style>
