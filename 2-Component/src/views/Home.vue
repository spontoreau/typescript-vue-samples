<template>
  <div>
    <div class="row pt-4">
      <div class="card-columns">
        <EmployeeCard 
          v-for="e in employees"
          :key="e.id"
          :employee="e"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EmployeeCard, { Employee } from '@/components/EmployeeCard.vue';

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

</script>

