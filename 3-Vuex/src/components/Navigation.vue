<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Mister Anderson Corporation
    </a>
    <form class="form-inline">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="search">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search">
      </div>
    </form>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {}
</script>