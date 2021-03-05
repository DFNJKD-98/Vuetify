<template>
  <div class="guide">
      <v-form lazy-validation class="form" ref="form">
        <v-text-field color="yellow lighten-2" clearable label="Input Account" v-model="account"/>
        <v-text-field color="yellow lighten-2" clearable label="Input PassWord" v-model="password" type="password"/>
        <v-btn dark depressed color="yellow lighten-2" outlined class="loginIn" @click="loginIn">Login In</v-btn>
      </v-form>
  </div>
</template>

<script>
export default {
    name: 'guide',
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      showTip(message, duration, type){
        this.$message({
          message,
          duration,
          type
        });
      },
      showN(message){
        this.$notify({
          message,
          customClass: 'dftip'
        });
      },
      loginIn(){
        if(this.account === 'DFNJKD98' && this.password === 'dfnjkd98'){
          this.$emit('success');
        }
        else{
          this.showTip('登录失败！', 1000, 'error');
        }
      },
      noShowHistory(){
        const inputList = document.getElementsByTagName('input');
        for(let i=0;i<inputList.length;i++){
          inputList[i].setAttribute("autocomplete", "off");
        }
      }
    },
    created(){
      setTimeout(this.noShowHistory, 200);
    }
}
</script>

<style scoped>

</style>

<style>
.guide{
  height: 100%;
  display: grid;
  grid-template-rows: 500px;
  grid-template-columns: 360px;
  place-items: center;
  place-content: center;
}
.form{
  width: 360px;
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 8px;
  border: 1px solid #FBC02D;
}
.form .loginIn{
  display: block;
  margin: 14px auto;
}
.dftip{
  height: 40px;
}
</style>