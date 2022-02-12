<template>
    <button><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
    color: $main-text-color;
    background: $barbar-red;
    padding: 0.5rem;
    font-size: $main-font-size;
    border: none;
    text-transform: uppercase;

    &:hover {
        background: rgba(220, 52, 19, 0.7);
        cursor: pointer;
    }
}
</style>