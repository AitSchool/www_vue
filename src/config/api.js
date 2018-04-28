const HOST = 'https://api.aitschool.com'

const API = {
    login: HOST + '/auth/oauth2',
    userInfo: HOST + '/auth/user',
    GithubCallbackURL: '/login/oauth/callback/github',
    plan: HOST + '/course/plans',
    course: HOST + '/course/courses',
    section: HOST + '/course/sections',
    homework: HOST + '/course/homeworks',
    task: HOST + '/course/tasks',
    graduation: HOST + '/course/graduation_projects',
    blog: HOST + '/blog',
}

export default API