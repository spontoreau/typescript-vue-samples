<template>
  <div>
    <div class="row pt-4">
      <EmployeeCard />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EmployeeCard from '@/components/EmployeeCard.vue';

@Component({
  components: {
    EmployeeCard,
  }
})
export default class Home extends Vue {}
</script>
