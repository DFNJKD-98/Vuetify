<template>
  <v-app>

    <v-app-bar app color="#cc2b5e" dense hide-on-scroll>
      <v-app-bar-nav-icon @click="showMessage" class="tabBar-icon">
        <v-icon color="blue-grey darken-2">mdi-home</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title shrink-on-scroll class="text-white tabBar-title">DFNJKD98书签管理</v-app-bar-title>

      <v-divider vertical class="mx-4 divider"/>
      <div class="menu-box">
        <v-btn depressed text plain :to="{name: 'guide'}">Guide</v-btn>
        <v-btn depressed text plain :to="{name: 'bookMark'}" :disabled="loginIn">BookMark</v-btn>
        <v-btn depressed text plain :to="{name: 'bookMark2'}" :disabled="loginIn">BookMark2</v-btn>
      </div>
      <div class="more">
        <v-icon color="black" @click="drawer = !drawer">mdi-table-of-contents</v-icon>
      </div>

    </v-app-bar>

    <v-main class="content">
       <router-view name="guide" @success="loginInSuccess"/>
       <router-view name="bookMark"/>
       <router-view name="bookMark2"/>
    </v-main>

    <v-footer app color="#753a88" padless>
      <v-row no-gutters class="footer-copy text-white">
        <v-col class="text-center" md="6" offset-md="3">
          CopyRight @ DFNJKD98
        </v-col>
        <v-col md="3" class="top-bottom">
          <v-btn color="orange" depressed text plain @click="$vuetify.goTo(0,options)">TOP</v-btn>
          <v-btn color="orange" depressed text plain @click="$vuetify.goTo(5555,options)">BOTTOM</v-btn>
        </v-col>
      </v-row>
    </v-footer>

    <v-navigation-drawer class="light-blue darken-2" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>DFNJKD98</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item><v-btn depressed text plain :to="{name: 'guide'}">Guide</v-btn></v-list-item>
        <v-list-item><v-btn depressed text plain :to="{name: 'bookMark'}">BookMark</v-btn></v-list-item>
        <v-list-item><v-btn depressed text plain :to="{name: 'bookMark2'}">BookMark2</v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>

export default {
    name: 'index',
    data(){
      return{
        options: {
          duration: 1000,
          offset: 0,
          easing: 'easeInOutCubic',
        },
        tips: [],
        drawer: null,
        loginIn: true
      }
    },
    methods: {
      croute(name){
        this.$router.push({name});
      },
      showNotify(message, duration){
        this.$notify({
          message,
          duration
        })
      },
      showMessage(){
        this.$message.warning('还没有做好返回首页功能');
      },
      loginInSuccess(){
        this.$message.success({
          message: '登录成功！',
          duration: 800
        })
        setTimeout(() => {
          this.loginIn = false;
        }, 800)
        this.$router.push('/bookMark');
      }
    }
}
</script>

<style scoped>
  @media (min-width: 550px) {
    .more{
      display: none;
    }
  }
  @media (max-width: 767px) {
    .tabBar-title{
      display: none;
    }
  }
  @media (max-width: 550px) {
    .divider, .menu-box{
      display: none;
    }
    .more{
      display: block;
      position: fixed;
      top: 11px;
      right: 20px;
    }
  }
  .content{
    background: linear-gradient(to top, #753a88, #cc2b5e);
  }
  .footer-copy{
    height:100%;
    line-height:40px;
  }
  .top-bottom{
    display: flex;
    flex-direction: row-reverse;
  }
  .text-white{
    color: white;
  }
</style>