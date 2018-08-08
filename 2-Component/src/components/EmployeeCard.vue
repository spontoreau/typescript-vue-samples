<template>
  <div class="card pb-2">
    <img class="card-img-top" :src="pictureUrl()" alt="Card image cap">
    <div class="card-body">
      <div>
        <label class="card-text">
          <i class="fas fa-user-circle"></i>
          {{ fullName }}
        </label>
      </div>
      <div>
        <label class="card-text">
          <i class="fas fa-phone"></i>
          {{ phone }}
        </label>
      </div>
      <div>
        <label class="card-text">
          <i class="far fa-calendar"></i>
          {{ formattedDate() }}
        </label>
      </div>
      <div class="pt-4">
        <span class="badge float-left" style="backgroundColor: #0984e3; color: #FFFFFF;">Executive</span>
        <a class="float-right" :href="mailTo()">
          <i class="far fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
// @ts-ignore
import moment from 'moment';

@Component
export default class EmployeeCard extends Vue {
  @Prop()
  fullName!: string;

  @Prop()
  hiredDate!: string;

  @Prop()
  phone!: string;

  @Prop()
  picture!: string;

  @Prop()
  email!: string;

  formattedDate() {
    return moment(this.hiredDate).format('MMM Do YY');
  }

  pictureUrl() {
    return `${ process.env.VUE_APP_PICTURE_URL }${this.picture}`;
  }

  mailTo() {
    return `mailto:${this.email}`;
  }
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


