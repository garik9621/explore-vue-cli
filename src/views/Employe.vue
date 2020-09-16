<template>

    <div class="employe">

        <div class="container">

            <h1>{{item.name}}</h1>
            <img :src="item.photo" alt="" class="responsive-img">

        </div>

    </div>
    
</template>

<script>

    import employes from "../data/employes";

    export default {
        name: "Employe",
        data: () => ({
            item: {}
        }),
        created() {
            this.item = employes[Object.keys(employes).filter(data => data === this.$route.params.id)[0]];

            console.log(Object.keys(employes))
        }
    }
</script>

<style scoped>

</style>
