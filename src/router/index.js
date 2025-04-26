import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import News from '../pages/News.vue';
import NotFound from '../pages/NotFound.vue';
import Article from '../pages/Article.vue';
import User from '../pages/user/User.vue';
import HengBan from '../pages/user/HengBan.vue';
import ShuBan from '../pages/user/ShuBan.vue';
import ShopMain from '../pages/shop/ShopMain.vue';
import ShopTop from '../pages/shop/ShopTop.vue';
import ShopFooter from '../pages/shop/ShopFooter.vue';
import TodoList from '../pages/todoList/TodoList.vue';
// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { name: 'news', path: '/news/:id', component: News },
  // 正则设置，id必须为数字
  { path: '/article/:id(\\d+)', component: Article },
  // 可重复参数返回id数组，+表示1+，*表示0+
  // { path: '/article/:id+', component: Article },
  // { path: '/article/:id*', component: Article },
  // 可选参数，可有可无，但不能重复
  // { path: '/article/:id?', component: Article },
  {
    path: '/user',
    component: User,
    redirect: '/user/hengban', //重定向时，注意加上父路径
    children: [
      {
        path: 'hengban',
        component: HengBan
      },
      {
        path: 'shuban',
        component: ShuBan
        // 新增
      }
    ]
  },
  {
    path: '/todolist',
    component: TodoList
  },
  {
    path: '/shop',
    alias: '/mjqshop', //别名，可以为数组指定多个别名，（不会改名，重定向会改名）
    // 进入当前页面时才会执行
    beforeEnter: (to, from, next) => {
      // ...
      console.log('进入shop');
      next();
    },
    components: {
      default: ShopMain,
      shopTop: ShopTop,
      shopFooter: ShopFooter
    }
  },
  {
    path: '/mall',
    // 路由重定向
    redirect: '/shop'
  },
  // 正则设置，其他路由指向404页面
  { path: '/:path(.*)', component: NotFound }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // 哈希模式
  // history: createWebHashHistory(),
  // history模式，没有#号
  // "mjq"：baseurl
  history: createWebHistory('mjq'), //匹配路由模式
  // routes，未必填项
  routes, // short for `routes: routes`
  // pathToRegexpOptions选项移除
  strict: true, //末尾斜杠是否精确匹配 (default: false)
  sensitive: true //大小写敏感 (default: false)

  // 记录路由页面滚动位置
  // scrollBehavior(to, from, savedPosition) {
  //   // {x:10,y:10},now:{left:10,top:10}
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { top: 0 };
  //   }
  // }
});

// 动态添加路由
router.addRoute({
  path: '/notice',
  name: 'notice',
  component: () => import('../pages/Notice.vue')
});
// 添加指定路由的子路由
router.addRoute('notice', {
  path: '/notice/son',
  name: 'son',
  component: () => import('../pages/NoticeSon.vue')
});

// 全局前置守卫，任何路由跳转都会经过这个函数
router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  // return true;
  // console.log('kkk');
  next();
});

/* 
isReady()代替onReady()
router.push()
// before
router.onReady(onSuccess,onError)
// now
router.isReady().then(onSuceess).catch(onError)

现在keep-alive和transition必须用在router-view内部
//before
     <keep-alive>
        <router-view></router-view>
     </keep-alive>
// now
     <router-view v-solt="{component}">
        <keep-alive>
          <component :is="component"></component>
        </keep-alive>
     </router-view>

mixins中的路由守卫将忽略
match方法被移除，使用resolve代替
移除router.getMatched.Components()
使用router.currentRoute.value.matched

包括首屏在内的所有导航均为异步、
app.use(router)
router.isReady().then(()=>app.mount("#app")) //用于首屏动画

route的parent属性被移除
现在获取：const.parent=this.$route.matched[this.$route.matched.length-2]
    
使用history.state
// 之前
history.pushState(myState,'',url)
// 现在
router.push(url)
history.replaceState({...history.state,...myState},'')
// 之前
history.replaceState({},'',url)
// 现在
history.replaceState(history.state,'',url)

// 现在
跳转不存在命名路由报错
// 之前
返回根路径，或出现白板

缺少必填项会抛出异常
命名路由如果path为空的时候不再追加/
副作用：给设置了重定向redirect选项的子路由带来副作用
[
    {
    path: '/user',
    component: User,
    redirect: '/user/hengban', //重定向时，注意加上父路径
    children: [
      {
        path: 'hengban',
        component: HengBan
      },
      {
        path: 'shuban',
        component: ShuBan
        // 新增
      }
    ]
  },
]

$route属性编码行为
parmes/query/hash
- path/fullpath不再做解码
- hash会被解码
- push、resolve和replace、字符串参数，或者对象参数path属性必须解码
- params / 会被解码
- query中+不处理，stringifyQuery来处理

*/

export default router;
