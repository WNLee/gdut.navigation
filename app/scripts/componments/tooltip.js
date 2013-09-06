/*global define*/

/*
 * componments/tooltip
 *
 * 链接分类
 */

define([
    'jquery',
    'underscore',
    // TODO
    // 链接列表从 JSON 获取
    'data/links',
    'componments/link'
], function($, _, links, Link) {
    'use strict';


    return function(tooltips, linkList) {
        var that = this;

        this.$tooltips = $(tooltips);
        this.$linkList = $(linkList);
        this.template = _.template(
                '<p><span>' +
                    '<a href=<%= hr %> title=<%= disc %> class="text">' +
                        '<%= name %>' +
                    '</a>' +
                '</span></p>'
        );

        // 点击标签的时候显示链接列表
        this.$tooltips.click(function(e) {
            var html = '';

            e.preventDefault();

            links[$(this).attr('data-type')].forEach(function(link) {
                html += that.template(link);
            });

            that.$linkList
                .empty()
                .html(html);
            // TODO 整合链接动画操作到 tooltip 中
            new Link('.text');
        });
    };
});
