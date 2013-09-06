/* Global require */
'use strict';

/* requirejs 配置 */
require.config({
    shim: {
        underscore: {
            exports: '_'
        }
    },
    // 第三方库位置指定
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore'
    }
});

require([
    'jquery',
    'componments/sideBar',
    'componments/nav',
    'componments/tooltip'
], function($, SideBar, Nav, Tooltip) {

    // 初始化页面
    new SideBar('#left-bar');
    new Nav();
    new Tooltip('.t', '.list');
});
