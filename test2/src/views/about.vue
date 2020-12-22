<template>
  <div class="feedback-box">
    该公交车查询系统创于2020年12月，以郫都区电子科技大学清水河校区为中心，提供了其周围公交车的起点和终点，并且具备搜索周边地点的功能
   <el-input
    type="textarea"
    :rows="5"
    placeholder="我们期待您的意见和建议"
    v-model="textarea">
   </el-input>

    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-check"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>



<style scoped>
.feedback-box{
  line-height:100px;
  width:600px;
  border:1px solid #DCDFE6;
  padding:20px;
  border-radius:10px;
  box-shadow:0 0 30px #DCDFE6;
  background-Color: #8f9eca;
  display: inline-block;
}
</style>
