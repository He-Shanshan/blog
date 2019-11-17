<template>
  <div class="features">
    <div class="feature" >
      <div class="part1"><h2 >自学相关</h2></div>  
      <span>看技术书籍相关知识点，一些薄弱点的自主补充，感兴趣的知识点等</span>  
    </div>
    <div class="feature">
      <div class="part2"><h2>工作相关</h2></div>  
      <span>工作中用到的技术点，以及遇到的坑，相关解决办法等</span>
    </div>
    <div class="feature">
      <div class="part3"><h2>语言相关</h2></div>
      <span>用来记录日常看到的英文新闻有趣的知识点，以及动漫中日语相关的内容</span>
    </div>
    <div class="feature">
      <div class="part4"><h2>其他</h2></div>   
      <span>包括网络，算法，数据结构等相关内容</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'OtherComponent',
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    },
    methods:{
    }
  }
</script>
<style  scoped>
.features{
  border-top: 1px solid #eaecef;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: start;
    align-items: flex-start;
    align-content: stretch;
    -webkit-box-pack: justify;
    justify-content: space-between;
    
}
.feature {
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-basis: 24%;
    max-width: 24%;
}
span {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.part1 ::before {
    height: 2rem;
    min-width: 2rem;
    vertical-align: middle;
    display: inline-block;
    content: '';
    background: url('../public/img/学习.png') no-repeat;
    background-size: 100%;
}
h2{
  font-size: 1.5rem;
}
.part2 ::before {
    height: 2rem;
    min-width: 2rem;
    vertical-align: middle;
    display: inline-block;
    content: '';
    background: url('../public/img/工作台.png') no-repeat;
    background-size: 100%;
}
.part3 ::before {
    height: 2rem;
    min-width: 2rem;
    vertical-align: middle;
    display: inline-block;
    content: '';
    background: url('../public/img/语言.png') no-repeat;
    background-size: 100%;
}
.part4 ::before {
    height: 2rem;
    min-width: 2rem;
    vertical-align: middle;
    display: inline-block;
    content: '';
    background: url('../public/img/其他.png') no-repeat;
    background-size: 100%;
}

</style>

