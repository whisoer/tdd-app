
<script>
export default {
  name: 'UserSearchForm',

  data() {
    return {
      username: ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="$emit('submitted', username)" style="display: flex; justify-content: center;">
    <el-input v-model="username" class="search-form__input" placeholder="Pesquise o usuário" style="width: 50vw;">
      <el-button class="search-form__button" native-type="submit" slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </form>
</template>
