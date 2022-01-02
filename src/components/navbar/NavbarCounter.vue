<template>
    <span id="navbarCounter">{{ $t("nav.gates") }}: {{ displayDaysLeft }} päeva</span>
</template>

<script>
export default {
    data() {
        return {
            displayDaysLeft: 0
        }
    },
    computed: {
        _seconds: () => 1000,
        _minutes() {
        return this._seconds * 60;
        },
        _hours() {
        return this._minutes * 60;
        },
        _days() {
        return this._hours * 24;
        }
    },
    mounted() {
        this.showRemainingTime();
    },
    methods: {
        formatNum: num => (num < 10 ? "0" + num : num),
        showRemainingTime() {
        const now = new Date();
        const deadline = new Date("July 7 2022 18:00:00 GMT+0300");
        const difference = deadline.getTime() - now.getTime();

        if (difference < 0) {
          return;
        }

        const days = Math.floor(difference / this._days);

        this.displayDaysLeft = this.formatNum(days);
        }
    }
}
</script>