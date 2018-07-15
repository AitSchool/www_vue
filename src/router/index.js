import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index/index'
import PlanPage from '@/pages/plan/index'
import BlogPage from '@/pages/blog/index'
import CoursePage from '@/pages/course/index'
import SectionPage from '@/pages/section/index'
import HomeworkPage from '@/pages/homework/index'
import GraduationPage from '@/pages/graduation/index'
import TaskPage from '@/pages/task/index'
import LoginPage from '@/pages/login/index'
import NotFoundPage from '@/pages/common/404'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
        {
            path: '*',
            name: 'notfound_page',
            component: NotFoundPage
        },
        {
            path: '/login/oauth/callback/github',
            name: 'login_page',
            component: LoginPage
        },
        {
            path: '/',
            name: 'index_page',
            component: IndexPage
        },
        {
            path: '/plan/:id',
            name: 'plan_page',
            component: PlanPage
        },
        {
            path: '/course/:id',
            name: 'course_page',
            component: CoursePage
        },
        {
            path: '/course/:id/:chapter/:section',
            name: 'section_page',
            component: SectionPage
        },
        {
            path: '/blog/:id',
            name: 'blog_page',
            component: BlogPage
        },
        {
            path: '/homework/:id',
            name: 'homework_page',
            component: HomeworkPage
        },
        {
            path: '/task/:id',
            name: 'task_page',
            component: TaskPage
        },
        {
            path: '/graduation/:id',
            name: 'graduation_page',
            component: GraduationPage
        },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
