<template>
  <div class="diquba">
    <div class="diqu_koubei">
      <div class="kou">
        <router-link to="/four">&lt;我的</router-link>
        
      </div>
    </div>
    <hr>
    <div class="diqu">
    <mt-index-list :show-indicator="false">
      <mt-index-section index="A">
        <router-link to="/four"><mt-cell title="Aaron" ></mt-cell></router-link>
        <router-link to="/four"><mt-cell title="Alden"></mt-cell></router-link>
        <router-link to="/four"><mt-cell title="Austin"></mt-cell></router-link>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Cack"></mt-cell>
        <mt-cell title="Cane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="D">
        <mt-cell title="Dack"></mt-cell>
        <mt-cell title="Dane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="E">
        <mt-cell title="Eack"></mt-cell>
        <mt-cell title="Eane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="F">
        <mt-cell title="Fack"></mt-cell>
        <mt-cell title="Fane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="G">
        <mt-cell title="Gack"></mt-cell>
        <mt-cell title="Gane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="H">
        <mt-cell title="Hack"></mt-cell>
        <mt-cell title="Hane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="I">
        <mt-cell title="Iack"></mt-cell>
        <mt-cell title="Iane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="J">
        <mt-cell title="Jack"></mt-cell>
        <mt-cell title="Jane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="K">
        <mt-cell title="Kack"></mt-cell>
        <mt-cell title="Kane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="L">
        <mt-cell title="Lack"></mt-cell>
        <mt-cell title="Lane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="M">
        <mt-cell title="Mack"></mt-cell>
        <mt-cell title="Mane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="N">
        <mt-cell title="Nack"></mt-cell>
        <mt-cell title="Nane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="O">
        <mt-cell title="Oack"></mt-cell>
        <mt-cell title="Oane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="P">
        <mt-cell title="Pack"></mt-cell>
        <mt-cell title="Pane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Q">
        <mt-cell title="Qack"></mt-cell>
        <mt-cell title="Qane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="R">
        <mt-cell title="Rack"></mt-cell>
        <mt-cell title="Rane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="S">
        <mt-cell title="Sack"></mt-cell>
        <mt-cell title="Sane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="T">
        <mt-cell title="Tack"></mt-cell>
        <mt-cell title="Tane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="U">
        <mt-cell title="Uack"></mt-cell>
        <mt-cell title="Uane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="V">
        <mt-cell title="Vack"></mt-cell>
        <mt-cell title="Vane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="W">
        <mt-cell title="Wack"></mt-cell>
        <mt-cell title="Wane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="X">
        <mt-cell title="Sack"></mt-cell>
        <mt-cell title="Sane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Y">
        <mt-cell title="Yack"></mt-cell>
        <mt-cell title="Yane"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
    </div>
  </div>
</template>
<script>
export default {
        data(){
                return {

                }
        }
}
</script>
<style lang="scss" scoped>
.diquba{
        margin: 0;
        padding: 0;
        .kou{
        line-height: 40px;
        padding-left: 10px;
        margin-top: 7px;
        display: flex;
        top: 0;
}
}
</style>
