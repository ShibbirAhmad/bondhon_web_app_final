<template>
    <div>
        <member-nav></member-nav>
    </div>

</template>

<script>
    Vue.component('member-nav', require('./Navbar.vue').default);
    export default {
        name: "Main.vue",
    }
</script>

