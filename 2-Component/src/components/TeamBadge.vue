<template functional>
  <span class="badge" :style="{ color: props.team.textColor, backgroundColor: props.team.tagColor }">
    {{ props.team.name }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend<Team>({
  functional: true,
});

export interface Team {
  name: string;
  tagColor: string;
  textColor: string;
}
</script>
