<template functional>
  <span class="badge" :style="{ color: props.team.textColor, backgroundColor: props.team.tagColor }">
    {{ props.team.name }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/store/modules/employee/retrieve/types/team';

export default Vue.extend<Team>({
  functional: true,
});
</script>
