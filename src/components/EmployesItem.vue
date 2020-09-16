<template>

    <div class="col s12 m6">
        <div class="card">
            <div class="card-image">
                <slot name="img"></slot>
                <span class="card-title"><slot></slot></span>
                <slot name="link"></slot>

            </div>
            <div class="card-content">
                <p><slot name="description"></slot></p>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "EmployesItem",

    }
</script>

<style scoped>

</style>
