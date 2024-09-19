<template>
  <div class="selector" data-type="radio">
    <div
      v-for="(item, itemIndex) in items"
      :key="'item-' + itemIndex"
      class="select-item"
      :class="{
        current:
          (internalTypeTerritoire === null && itemIndex === 0) ||
          (internalTypeTerritoire && internalTypeTerritoire.id === item.id),
      }"
      @click="selectRadio(item)"
    >
      <div class="ico"></div>
      <div class="label">
        <span class="no-tablette">{{ item.label }}</span>
        <span class="tablette-only">{{ item.short }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    internalTypeTerritoire: {
      type: Object,
      default: function () {
        return null
      },
    },
    items: {
      type: Array,
      default: function () {
        return []
      },
    },
    current: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  methods: {
    selectRadio(fItem) {
      this.$emit('selectRadio', fItem)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';
.selector {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
}
.select-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 17px 7px 9px;
  gap: 5px;
  background: $grey-25;
  border-radius: 20px;
  flex: none;
  order: 1;
  flex-grow: 1;
  cursor: pointer;
  @include transition((background-color), 0.3s, ease-out);
  &:hover {
    background-color: $white;
    .ico {
      background-color: $primary-B-100;
    }
  }
  .ico {
    width: 14px;
    height: 14px;
    background-color: $grey-100;
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 7px;
    @include transition((background-color), 0.3s, ease-out);
  }
  .label {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: $primary-B-75;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  &.current {
    background-color: $primary-B-100;
    .label {
      color: $white;
    }
    .ico {
      background-color: $white;
    }
  }
}
</style>
