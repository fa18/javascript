<template>
    <div class="userManager">
        <h1>User Manager</h1>
        <div class="list">
            <li v-for="(user,index) in users" :key="index">
                {{user}}
            </li>
        </div>
    </div>
</template>

<script>
export default {
  name: "userManager",
  props: {
      users: {type: Array, required: true}
  }
}
</script>
