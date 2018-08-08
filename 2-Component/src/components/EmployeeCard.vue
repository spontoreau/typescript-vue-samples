<template>
  <div class="card">
    <img class="card-img-top" src="http://localhost:3000/images/m1.png" alt="Card image cap">
    <div class="card-body">
      <div>
        <label class="card-text">
          <i class="fas fa-user-circle"></i>
          Thomas A. Anderson
        </label>
      </div>
      <div>
        <label class="card-text">
          <i class="fas fa-phone"></i>
          646-226-1860
        </label>
      </div>
      <div>
        <label class="card-text">
          <i class="far fa-calendar"></i>
          Aug 8th 18
        </label>
      </div>
    </div>
    <div class="card-footer">
      <span class="badge float-left" style="backgroundColor: #0984e3; color: #FFFFFF;">Executive</span>
      <a href="mailto:homas.anderson@misterandersoncorporation.com">
        <i class="far fa-envelope float-right"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class EmployeeCard extends Vue {

}
</script>

<style lang="scss" scoped>
a {
  color: #2d3436;
}

a :hover {
  color: #b2bec3;
}
</style>


