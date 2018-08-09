<template>
  <div>
    <div class="row pt-4">
      <div class="card-columns">
        <EmployeeCard 
          v-for="e in employees"
          :key="e.id"
          :fullName="e.lastName"
          :phone="e.phone"
          :hiredDate="e.hiredDate"
          :email="e.email"
          :picture="e.picture"
          :team="e.team"
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
export default class Home extends Vue {
  employees: Employee[] = [];

  async mounted() {
    const response = await fetch(`${process.env.VUE_APP_API_URL}employee`);
    this.employees = await response.json();
  }
}

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hiredDate: string;
  picture: string;
  team: {
    name: string;
    backgroundColor: string;
    textColor: string;
  };
}
</script>
