<template>
  <div>
    <h2>Home Page</h2>
      <div class="title">
        <div class="logo">
          <img src="../assets/logo.png"/>
        </div>
        <div class="tabs">
          <router-link to="menu">About Us</router-link>
          <router-link to="menu">Projects</router-link>
          <router-link to="menu">Our Businesses</router-link> 		
          <router-link to="menu">Contact</router-link>	
          <router-link to="menu">Careers</router-link>
        </div>
      </div>
      <div class="foots">
        <div class="left">
          <p class="title">Committed to Long-Term Value</p>
          <p>
            As an Asset Owner, we are invested in long-life, high-quality renewable energy generating assets and businesses across the globe.
          </p>
        </div>
        <div class="right">
          <img src="../assets/bg1.png" alt="">
        </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.title{
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .logo {
    img {
      width: 300px;
    }
  }
  .tabs{
    margin-left: 80px;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    a{
      flex-grow: 1;
      white-space:pre;
      display: inline-block;
      font-size: 20px;
      color: #000;
      padding: 15px;
      text-decoration:underline #aaabac solid;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
.foots {
  display: flex;
  flex-wrap: wrap-reverse;
  padding-bottom: 10px;
  .left{
    width: 550px;
    padding-right: 50px;
    .title{
      font-size: 35px;
      position: relative;
      color: #7e7e7e;
      &::before{
        content: '  ';
        width: 100px;
        height: 5px;
        background: #d86717;
        position: absolute;
        top: 80%;
        left: 5px;
      }
    }
    p{
      font-size: 18px;
      color: rgb(31, 78, 121);
    }
  }
  .right{
      flex-grow: 1;
      img{
        width: 100%;
      }
  }
}
</style>