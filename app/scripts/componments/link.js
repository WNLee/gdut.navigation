/*global define*/

/*
 * componments/link
 *
 * 导航链接
 */

define([
    'jquery'
], function($) {
    'use strict';

    return function(selector) {
        var that = this;

        this.$el = $(selector);
        this.linkWidth = 140;

        // 鼠标 over 时添加 link-hover 属性
        // 同时把其他 link-hover 属性清除
        this.$el.bind('mouseover', function() {
            $(this)
                .parents('p')
                .addClass('link-hover')
                .siblings()
                .removeClass('link-hover');
        });

        // 链接过长时滚动显示
        this.$el.hover(function() {
            var offWidth = $(this).width();

            if (offWidth > that.linkWidth) {
                $(this)
                    .stop()
                    .animate({'left': that.linkWidth - offWidth}, 1000);
            }
        }, function() {
            var offWidth = $(this).width();

            if (offWidth > that.linkWidth) {
                $(this)
                    .stop()
                    .animate({'left': 0}, 1000);
            }
        });
    };
});
