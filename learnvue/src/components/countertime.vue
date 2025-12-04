<template>
    <div id = "counttime">
        <div class = "showtime">{{ formattime }}</div>
        <button @click="startcounter">开始</button>
        <button @click = "pause">暂停</button>
        <button @click = "clearcounter">清零</button>
    </div>
</template>

<script setup lang="ts">
    import{ref,computed} from "vue"
    let isrunning = false
    let time = ref(0)
    let timer : number = 0 //计时器
    function startcounter(){
        if(!isrunning){
            let starttime = Date.now() - time.value
    
            timer = setInterval(()=>{
                time.value = Date.now() - starttime
            },10)
            isrunning = true
        }
    }

    function pause(){
        clearInterval(timer)
        isrunning = false
    }

    function clearcounter(){
        time.value = 0
        isrunning = false
        clearInterval(timer)
    }

    let stime = computed(()=>{
        return Math.floor((time.value % 60000) / 1000)
    })

    let mintime = computed(()=>{
        return Math.floor((time.value % 3600000) / 60000)
    })

    let hourtime = computed(()=>{
        return Math.floor(time.value / 3600000)
    })

    let formattime = computed(() => {
        return String(hourtime.value).padStart(2,"0") +":" + String(mintime.value).padStart(2,"0")+":"+String(stime.value).padStart(2,"0")
    })
  



</script>

<style scoped>
    #counttime{
        background-color: aquamarine;
        height: 100px;
        font-size: 30px;
    }

    #counttime > button{
        height: 40px;
        margin-right: 5px;
        border-radius: 5px;
    }

</style>