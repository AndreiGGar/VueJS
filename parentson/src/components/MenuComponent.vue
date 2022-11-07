<template>
  <div>
    <ul style="display: inline; padding: 0">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/comics">Comics</router-link>
      </li>
      <li>
        <router-link to="/sports">Sports</router-link>
      </li>
      <li>
        <router-link to="/double/">Double</router-link>
      </li>
      <li>
        <router-link to="/double/67">Double 67</router-link>
      </li>
      <li>
        <router-link to="/double/43">Double 43</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MenuComponent',
}
</script>
<style>

</style>