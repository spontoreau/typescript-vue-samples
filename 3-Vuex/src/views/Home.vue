<template>
  <div>
    <div class="row pt-4">
      <div class="card-columns">
        <EmployeeCard 
          v-for="e of employees"
          :key="e.id"
          :employee="e"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import EmployeeCard from '@/components/EmployeeCard.vue';
import { Employee } from '@/store/modules/employee/retrieve/types/employee';

@Component({
  components: {
    EmployeeCard,
  },
})
export default class Home extends Vue {
  @Getter('employees', { namespace: 'retrieveEmployee'})
  employees!: Employee[];

  @Action('retrieveAll', { namespace: 'retrieveEmployee'})
  retrieveAll!: () => Promise<void>;

  async mounted() {
    await this.retrieveAll();
  }
}

</script>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.card-columns {
  @include media-breakpoint-only(xl) {
    column-count: 4;
  }
  @include media-breakpoint-only(lg) {
    column-count: 3;
  }
  @include media-breakpoint-only(md) {
    column-count: 2;
  }
  @include media-breakpoint-only(sm) {
    column-count: 1;
  }
}
</style>
