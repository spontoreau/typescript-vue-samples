<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Mister Anderson Corporation
    </a>
    <div class="form-inline">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="filter">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <input @input="filter($event.target.value)" type="text" class="form-control" placeholder="Filter" aria-label="Filter" aria-describedby="filter">
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class Navigation extends Vue {
  @Action('filter', { namespace: 'retrieveEmployee'})
  filter!: (value: string) => void;
}
</script>