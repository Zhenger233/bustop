<template>
  <el-container>
    <el-header style="text-align: right; font-size:50px">
      <el-dropdown>
        <span class="el-dropdown-link">
    成都<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>成都</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
  <span class="el-dropdown-link">
    郫都区<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>郫都区</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>


    <el-main>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="search-box">
       <el-form-item label="选择当前地点" prop="region1">
          <el-select v-model="value" filterable placeholder="郫都区">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-button type="primary" icon="el-icon-search">搜索</el-button>

        <el-button type="primary" icon="el-icon-search">了解更多</el-button>
      </el-form>
    </el-main>
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
      value: ''
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #aeb7c4;
  color: #333333;
  text-align: center;
  line-height: 40px;
}


.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height:400px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #4069ff;
  font-size: 24px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.search-box{
  width:400px;
  margin:200px auto;
  border:1px solid #DCDFE6;
  padding:40px;
  border-radius:10px;
  box-shadow:0 0 30px #DCDFE6
}
</style>
