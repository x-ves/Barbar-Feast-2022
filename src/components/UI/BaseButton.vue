<template>
    <a :href="urlTo" target="_blank" rel="noreferrer" class="baseButton"><slot></slot></a>
</template>

<script>
export default {
    props: ["urlTo"]
}
</script>

<style lang="scss" scoped>
.baseButton {
    color: $main-text-color;
    background: $barbar-red;
    border: none;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px;

    &:hover {
        background: rgba(220, 52, 19, 0.7);
        cursor: pointer;
    }
}
</style>