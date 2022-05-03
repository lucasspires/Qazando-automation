const home_page = require("../pages/home_page");
const { checkLoginSucess } = require("../pages/home_page");

Feature('login');

const {I, login_page} = inject()

Scenario('Login With Sucess', ({home_page}) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSucess()
});

Scenario('Login With error', ({login_page}) => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
});        

