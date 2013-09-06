/*global define*/

/*
 * componments/sideBar
 *
 * 页面边栏
 */

define([
    'jquery'
], function($) {
    'use strict';

    return function(selector) {
        var that = this;

        this.$el = $(selector);
        this.$el.hover(function() {
            that.$el.stop().animate({'right': 0}, 500);
        }, function() {
            that.$el.stop().animate({'right': -180}, 500);
        });
    };
});
