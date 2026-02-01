//引入路由
import { createRouter ,createWebHistory} from "vue-router";
//引入组件
import home from "@/pages/home.vue";
import news from "@/pages/news.vue";
import about from "@/pages/about.vue";
import detail from "@/pages/detail.vue";
//创建路由器

const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                path:"/home",
                component:home
            },
            {
                name:"xinwen",
                path:"/news",
                component:news,
                //嵌套路由
                children:[
                    {
                        name:"det",
                        path:"detail",
                        component:detail,
                        //第一种方式
                        //props:true
                        //第二种方式
                        props(route){
                            //return route.query
                            return route.query
                        }
                    }
                ]
            },
            {
                path:"/about",
                component:about
            },
            {
                path:"/",
                redirect:"/home"
            }
        ]
    }
)

export default router