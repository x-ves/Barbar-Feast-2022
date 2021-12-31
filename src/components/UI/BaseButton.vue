<template>
    <button><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
    color: $main-text-color;
    background: $main-background-color;
    padding: 0.5rem;
    font-size: $heading-font-size;
    border: 1px solid $main-text-color;
}
</style>