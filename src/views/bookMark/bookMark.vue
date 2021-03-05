<template>
  <v-container>
      <unit-group v-for="(g,index) in group" :key="index" :group="g"/>
  </v-container>
</template>

<script>
import {request} from '@/network/request.js';
import UnitGroup from '../../components/content/UnitGroup.vue';

export default {
    name: 'bookMark',
    data(){
        return{
            group: []
        }
    },
    components: {
        UnitGroup
    },
    methods: {
        flush(){
            request({
                url: '/sq1.json'
            }).then((result) => {
                this.group = result['data']['groupsList'];
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    created(){
        this.flush();
    }
}
</script>

<style scoped>

</style>