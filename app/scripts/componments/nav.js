/*global define*/

/*
 * componments/nav
 *
 * 页面导航栏
 */

define([
    'jquery'
], function($) {
    'use strict';

    return function() {
        var slider = $('.header-wrap nav li:nth-child(4)'),
            sliderLeft = slider[0].offsetLeft,
            // secNav = $('.second-nav p'),
            linkIndex = [32, 190, 345];

        $('.header-wrap nav a').hover(function() {
            var currentLink = $(this).parent('li').index();

            slider
                .stop()
                .animate({'left': linkIndex[currentLink]}, 300);
        }, function() {
            slider
                .stop()
                .animate({'left': sliderLeft}, 300);
        });
    };
});
