//Carousel
$(document).ready(function(){

	$('#productos').owlCarousel({
            loop:true,
            autoplay: true,
            margin:10,
            nav:false,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },

                900:{
                    items:2
                },

                1200:{
                    items:2
                },

                1500:{
                    items:2
                }
            }
        })

        $('#sliderCatalogo').owlCarousel({
            loop:true,
            autoplay: true,
            margin:10,
            nav:false,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },

                900:{
                    items:2
                },

                1200:{
                    items:3
                },

                1500:{
                    items:3
                }
            }
        })

        $('#catalogoInd').owlCarousel({
            loop:true,
            autoplay: true,
            margin:10,
            nav:true,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },

                900:{
                    items:1
                },

                1200:{
                    items:1
                },

                1500:{
                    items:1
                }
            }
        })
});