//引入路由
import { createRouter ,createWebHistory} from "vue-router";
//引入组件
import home from "@/components/home.vue";
import news from "@/components/news.vue";
import about from "@/components/about.vue";
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