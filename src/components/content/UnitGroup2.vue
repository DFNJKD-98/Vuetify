<template>
  <div class="group">
      <div class="group-title">
        <h3 :id="group['id']">{{group['title']}}</h3>
      </div>
      <div class="units">
          <unit-2 v-for="(card,index) in group['data']" :key="index" :src="card.image" :content="card.para" :link="card.link"/>
      </div>
  </div>
</template>

<script>
import unit2 from '@/components/common/unit2.vue';
export default {
    name: 'UnitGroup2',
    components: {
        unit2
    },
    props: {
        group: Object
    }
}
</script>

<style scoped>
@media (min-width: 1038px) {
    .units{
        grid-template-columns: repeat(auto-fill, 26%);
        grid-auto-columns: 26%;
    }
}
@media (max-width: 1038px){
    .units{
        grid-template-columns: repeat(auto-fill, 330px);
        grid-auto-columns: 330px;
    }
}
.group{
    padding-bottom: 20px;
}
.group-title{
    margin: 10px auto 20px;
    padding: 14px 10% 4px;
    width: 40%;
    min-width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-bottom: 2px solid #2E1437;
}
.units{
    display: grid;
    gap: 10px;
    place-content: center center;
    place-items: center center;
}
</style>