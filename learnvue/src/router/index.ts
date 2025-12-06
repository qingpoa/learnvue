//引入路由
import { createRouter ,createWebHistory} from "vue-router";
//引入组件
import home from "@/pages/home.vue";
import news from "@/pages/news.vue";
import about from "@/pages/about.vue";
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
                component:news
            },
            {
                path:"/about",
                component:about
            }
        ]
    }
)

export default router