<template>
    <section class="baseCard">
        <slot></slot>
    </section>
</template>

<style lang="scss" scoped>
.baseCard {
    background-color: $secondary-background-color;
    box-shadow: 0px 0px 15px 3px gray;
    min-width: 18rem;
    max-width: 30rem;
    margin: 1rem;
    padding: 1rem;
}
</style>