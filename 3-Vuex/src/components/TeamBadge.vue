<template>
  <span class="badge" :style="{ color: team.textColor, backgroundColor: team.tagColor }">
    {{ team.name }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Team } from '@/store/modules/employee/retrieve/types/team';

@Component
export default class TeamBadge extends Vue {
  @Prop() team!: Team;
}
</script>
