<template>
  <div class="login">
     <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="ruleForm.phoneNumber" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            v-model="ruleForm.passWord"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Submit</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script setup lang="ts" >
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  phoneNumber: '',
  passWord: '',
})
const rules = reactive({
  phoneNumber: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

onMounted(() =>{
  window.localStorage.removeItem('token')
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      window.localStorage.setItem('token','dkfjkj')
      ElMessage.success('登录成功')
      router.push('/')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="less" scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url('public/login.webp');
  background-repeat: repeat;
  background-size: 100%;
  .demo-ruleForm{
    background-color: #fff;
    padding: 20px;
  }
}
</style>