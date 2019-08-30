
<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<template>
  <div class="user-profile" v-if="user.name">
    <el-card style="width: 50vw;" :body-style="{ padding: '0px', display: 'flex' }">
      <img :src="user.avatar_url" alt="" class="user-profile__avatar" />
      <div style="padding: 25px;">
        <span class="user-profile__name">{{ user.name }}</span>
        <p class="user-profile__location">{{ user.location }}</p>
      </div>
      <div class="user-profile__bio" style="padding: 2rem;">
        {{ user.bio }}
      </div>
    </el-card>
  </div>
</template>

<style>
  .user-profile {
    padding: 1em;
    display: flex;
    justify-content: center;
  }

  .user-profile__avatar {
    width: 100px;
    margin: 25px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .user-profile__name {
    font-size: 1.5em;
  }

  .user-profile__location {
    color: #666;
  }
</style>