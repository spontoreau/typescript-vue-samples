<template>
  <div>
    <div class="row pt-4">
      <div class="card-columns">
        <EmployeeCard 
          :fullName="'Thomas A. Anderson'"
          :phone="'646-226-1860'"
          :hiredDate="'1999-03-31T00:00:00Z'"
          :email="'thomas.anderson@misterandersoncorporation.com'"
          :picture="'m1.png'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EmployeeCard from '@/components/EmployeeCard.vue';

@Component({
  components: {
    EmployeeCard,
  },
})
export default class Home extends Vue {}
</script>
