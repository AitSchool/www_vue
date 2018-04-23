const HOST = 'http://api.aitschool.com'

const API = {
    login: HOST + '/auth/oauth2',
    userInfo: HOST + '/auth/user',
    GithubCallbackURL: '/login/oauth/callback/github',
    plan: HOST + '/course/plans',
    course: HOST + '/course/courses',
    section: HOST + '/course/sections',
    homework: HOST + '/course/homeworks',
    blog: HOST + '/blog'
}

export default API