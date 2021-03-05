<template>
  <div class="bookMark2">
      <unit-group-2 v-for="(group,index) in groupsList" :key="index" :group="group"/>
  </div>
</template>

<script>
import UnitGroup2 from '@/components/content/UnitGroup2.vue';
import {request} from "@/network/request.js";
export default {
    name: 'bookMark2',
    data(){
        return{
            groupsList: []
        }
    },
    components: {
        UnitGroup2
    },
    methods: {
        requestCardList(){
            request({
                url: '/sq5.json'
            }).then((result) => {
                this.groupsList = result['data']['groupsList'];
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    created(){
        this.requestCardList();
    }
}
</script>

<style scoped>

</style>