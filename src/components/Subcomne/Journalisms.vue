<template>
    <div>
        <div v-for="item in List" :key="item.url">
            <img src="item.imgSrc.url">
            <div>
            <p>{{item.title}}</p>
            </div>
        </div>
        <div>
            <!-- <ul>
                <li></li>
            </ul> -->
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            List:[]
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
        this.$http.get('https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList').then(res=>{
            console.log(res)
            if(res.status==200){
                this.List=res.body.data.othersList
            }
            console.log(this.List)
        })
    }
    },
}
</script>

<style lang="scss" scoped>

</style>
