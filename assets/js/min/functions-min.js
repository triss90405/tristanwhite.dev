var responsiveNav=function(){$(".toggle-menu").on("click",function(){$("#navigation").toggleClass("nav-active"),$(this).toggleClass("cross"),$(this).toggleClass("toggle-menu-active")}),$("#navigation nav a").on("click",function(){$("#navigation").toggleClass("nav-active"),$(".toggle-menu").removeClass("toggle-menu-active")}),$(window).resize(function(){var e=$(this).width();e>992&&($("#navigation").removeClass("nav-active"),$(".toggle-menu").removeClass("cross"),$(".toggle-menu").removeClass("toggle-menu-active"))})},modal=function(){var e=$(".work-item"),o=$(".modal"),n=$(".close"),t=$("body"),s=27;e.on("click",function(e){e.preventDefault(),$(this).next(o).toggleClass("open"),t.css("overflow","hidden")}),n.on("click",function(e){e.preventDefault(),$(this).parent(o).removeClass("open"),t.css("overflow","scroll")}),$(document).keyup(function(e){e.keyCode==s&&(o.removeClass("open"),t.css("overflow","scroll"))})};$(document).ready(function(){responsiveNav(),modal()});