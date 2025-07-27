<template>
    <div >

        <v-footer></v-footer>
    </div>
</template>

<script>

    import vFooter from "../common/Footer.vue";
    export default {
        components:{vFooter},
        created(){
            var a = window.location.hash.replace('#/','');
        },
        data() {
            return {

            }
        },
        methods: {
        }
    }
</script>
<style scoped>

</style>
