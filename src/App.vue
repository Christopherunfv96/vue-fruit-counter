<template>
  <div class="container">
    <Header></Header>
    <List></List>
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";

export default {
  name: 'App',
  components: {
    Header,
    List
  }
}
</script>


