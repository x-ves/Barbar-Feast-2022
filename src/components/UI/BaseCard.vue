<template>
    <section class="baseCard">
        <slot></slot>
    </section>
</template>

<style lang="scss" scoped>
.baseCard {
    background-color: $secondary-background-color;
    box-shadow: 0px 0px 15px 3px $box-shadow-color;
    min-width: 18rem;
}
</style>