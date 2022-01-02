<template>
    <section class="notFound">
        <h1>ERROR 404</h1>
        <p>Page not Found!</p>
        <router-link to="/">Return</router-link>
    </section>
</template>

<style lang="scss" scoped>
    .notFound {
        display: flex;
        flex-direction: column;
        margin: 5rem auto;

        h1 {
            font-size: $heading-font-size;
            margin: 0.5rem;
        }

        p {
            margin: 0.25rem;
        }

        a {
            color: $main-text-color;
            text-transform: uppercase;
        }
    }
</style>