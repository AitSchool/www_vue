import router from '@/router';
import axios from 'axios';
import storage from '@/utils/storage.js';
import API from '@/config/api.js';

router.beforeEach((to, from, next) => {
    let path   = to.path;

    // Github 登录
    if(path === API.GithubCallbackURL ){
        let code = to.query.code;
        console.log(code)
        axios.post(API.login, {
            name: 'github',
            code
        })
        .then(function (response) {
            let token = response.data.token;
            storage.set('token',token)
            // next('/')
            window.location.href = "/"
        })
        .catch(function (error) {
            console.log(error)
            next('/')
        });

    }else{
        next()
    }
});

