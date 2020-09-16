<template>

    <div class="employes-list">
        <div class="container">
            <div class="row">
                <EmployesItem v-for="(item, index) in employes">

                    <img slot="img" :src="item.photo">
                    {{item.name}}
                    <router-link slot="link" tag="a" :to="'/employes/' + index" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">+</i></router-link>
                    <template slot="description">{{item.description}}</template>

                </EmployesItem>
            </div>
        </div>

    </div>

</template>

<script>

    import EmployesItem from "../components/EmployesItem";
    import employes from "../data/employes";

    export default {
        name: "Employes",
        data: () => ({
            employes: { 0 : ''}
        }),
        async created() {

            this.employes = employes
        },
        components: {
            EmployesItem
        }
    }
</script>

<style scoped>

</style>
