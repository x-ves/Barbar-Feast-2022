<template>
        <base-card class="filter">
        <h3>Filter Bands</h3>
        <section class="filter--options">
            <span class="filter--option">
                <input type="checkbox" id="punk" checked @change="setFilter">
                <label for="punk">Punk</label>
            </span>
            <span class="filter--option">
                <input type="checkbox" id="metal" checked @change="setFilter">
                <label for="metal">Metal</label>
            </span>
            <span class="filter--option">
                <input type="checkbox" id="rock" checked @change="setFilter">
                <label for="rock">Rock</label>
            </span>
        </section>
    </base-card>
</template>

<script>
export default {
    emits: ["change-filter"],
    data() {
        return {
            filters: {
                punk: true,
                metal: true,
                rock: true
            }
        }
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit("change-filter", updatedFilters);
        }
    }
}
</script>

<style lang="scss" scoped>

    @media only screen and (min-width: 768px) {}


    @media only screen and (min-width: 1024px) {
        .filter {
            display: flex;
            flex-direction: column;
            align-items: center;

            &--options {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
</style>