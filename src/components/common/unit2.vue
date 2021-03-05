<template>
  <div class="unit">
    <a :href="link" target="_blank">
        <div class="img-box">
            <img :src="src">
        </div>
        <div class="content-box">
            <p>{{content}}</p>
        </div>
    </a>
  </div>
</template>

<script>
export default {
    name: 'unit2',
    props: {
        src: String,
        content: String,
        link: String
    }
}
</script>

<style scoped>
.unit{
    width: 90%;
    height: 46px;
    max-width: 400px;
    border-radius: 4px;
    box-shadow:
            inset 0 0 0 transparent,
            inset 0 0 0 transparent,
            2px 2px 12px rgba(46, 20, 55, 0.49),
            -2px -2px 12px rgba(46, 20, 55, 0.49);
    transition: all .2s ease-out;
}
.unit:hover{
    box-shadow:
            inset 2px 2px 14px rgba(46, 20, 55, 0.49),
            inset -2px -2px 14px rgba(46, 20, 55, 0.49);
}
.unit:hover .content-box p{
    color: #FFD54F;
}
.unit a{
    text-decoration: none;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 46px;
    gap: 0 10px;
}
.img-box{
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #2E1437;
}
.img-box img{
    width: 22px;
    height: 22px;
    border-radius: 6px;
}
.content-box p{
    color: black;
    line-height: 23px;
    font-size: 13px;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>