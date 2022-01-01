<template>
    <button><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
    color: $main-text-color;
    background: transparent;
    padding: 0.5rem;
    font-size: $main-font-size;
    border: 1px solid $main-text-color;

    &:hover {
        background: $main-background-color;
        cursor: pointer;
    }
}
</style>