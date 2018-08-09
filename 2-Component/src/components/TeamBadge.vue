<template>
  <span class="badge" :style="{ color: textColor, backgroundColor: tagColor }">
    {{ name }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class TeamBadge extends Vue {
  @Prop()
  name!: string;

  @Prop()
  tagColor!: string;

  @Prop()
  textColor!: string;
}
</script>

<style lang="scss" scoped>

</style>
