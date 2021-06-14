<template>
  <div class="container">
    <div class="row">
 <div class="col-md-6">
      {{career.title}}

 </div>
   
   <div class="col-md-6 text-right">
        <!-- <n-link :to="{name:'career-detail'}" class="apply">Apply Now</n-link> -->
        <router-link :to="`/career-detail/${career.id}`" class="apply">Apply Now</router-link>
 </div>
   
 
  </div>
  </div>
</template>

<script>
export default {
     props: ['career'],
 
}
</script>

<style>

</style>