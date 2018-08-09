<template>
  <div class="card pb-2">
    <img class="card-img-top" :src="pictureUrl" alt="Card image">
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
          {{ employee.phone }}
        </label>
      </div>
      <div>
        <label class="card-text">
          <i class="far fa-calendar"></i>
          {{ formattedDate }}
        </label>
      </div>
      <div class="pt-4">
        <TeamBadge
          class="float-left"
          :team="employee.team"
        />
        <a class="float-right" :href="mailTo">
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

import TeamBadge, { Team } from '@/components/TeamBadge.vue';

@Component({
components: {
    TeamBadge,
  },
})
export default class EmployeeCard extends Vue {
  @Prop()
  employee!: Employee;

  get fullName() {
    return `${ this.employee.lastName } ${ this.employee.firstName }`;
  }

  get formattedDate() {
    return moment(this.employee.hiredDate).format('MMM Do YY');
  }

  get pictureUrl() {
    return `${ process.env.VUE_APP_PICTURE_URL }${this.employee.picture}`;
  }

  get mailTo() {
    return `mailto:${this.employee.email}`;
  }
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hiredDate: string;
  picture: string;
  team: Team;
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


