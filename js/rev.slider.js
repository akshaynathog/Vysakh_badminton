

var dzrevapi;
var dzQuery =jQuery;
function dz_rev_slider_1(){
	
	if(dzQuery("#rev_slider_486_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_486_1");
		}else{
			dzrevapi = dzQuery("#rev_slider_486_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
                                keyboardNavigation: "on",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "horizontal",
                                    drag_block_vertical: false
                                },
                                arrows: {
                                    style: "metis",
                                    enable: true,
                                    hide_onmobile: false,
                                    hide_onleave: false,
                                    tmp: '',
                                    left: {
                                        h_align: "left",
                                        v_align: "center",
                                        h_offset: 10,
                                        v_offset: 0
                                    },
                                    right: {
                                        h_align: "right",
                                        v_align: "center",
                                        h_offset: 10,
                                        v_offset: 0
                                    }
                                },
                                bullets: {
                                    enable: true,
                                    hide_onmobile: false,
                                    style: "metis",
                                    hide_onleave: false,
                                    direction: "horizontal",
                                    h_align: "center",
                                    v_align: "bottom",
                                    h_offset: 20,
                                    v_offset: 30,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                                }
                            },
				
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1240,1024,778,480],
				gridheight:[800,800,800	,600],
				lazyType:"none",
				parallax: {
					type:"scroll",
					origo:"enterpoint",
					speed:400,
					levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
					type:"scroll",
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
}