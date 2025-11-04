// Lightweight debounce to avoid thrashing on rapid route changes
window.__debounce = window.__debounce || function (fn, wait) {
  var timeoutId;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){ fn.apply(context, args); }, wait);
  };
};

// Idempotent initializer
window.initCarousels = window.__debounce(function () {
if (typeof Swiper === "undefined") { return; }
if ($(".tf-sw-slideshow").length > 0) {
    var tfSwSlideshow = $(".tf-sw-slideshow");
    var preview = tfSwSlideshow.data("preview");
    var tablet = tfSwSlideshow.data("tablet");
    var mobile = tfSwSlideshow.data("mobile");
    var spacing = tfSwSlideshow.data("space");
    var spacingMb = tfSwSlideshow.data("space-mb");
    var loop = tfSwSlideshow.data("loop");
    var play = tfSwSlideshow.data("auto-play");
    var centered = tfSwSlideshow.data("centered");
    var effect = tfSwSlideshow.data("effect");
    var speed =
        tfSwSlideshow.data("speed") !== undefined
            ? tfSwSlideshow.data("speed")
            : 1000;
    var swiperSlider = {
        autoplay: play
            ? {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }
            : false,
        slidesPerView: mobile,
        loop: loop,
        spaceBetween: spacingMb,
        speed: speed,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".sw-pagination-slider",
            clickable: true,
        },
        navigation: {
            clickable: true,
            nextEl: ".navigation-next-slider",
            prevEl: ".navigation-prev-slider",
        },
        centeredSlides: false,
        breakpoints: {
            768: {
                slidesPerView: tablet,
                spaceBetween: spacing,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: preview,
                spaceBetween: spacing,
                centeredSlides: centered,
            },
        },
    };
    if (effect === "fade") {
        swiperSlider.effect = "fade";
        swiperSlider.fadeEffect = {
            crossFade: true,
        };
    }
    var swiper = new Swiper(".tf-sw-slideshow", swiperSlider);
}

if ($(".tf-swiper").length > 0) {
    $(".tf-swiper").each(function () {
        var config = $(this).data("swiper");
        // Ensure config is an object (it could be a JSON string in data attr)
        if (typeof config === 'string') {
            try { config = JSON.parse(config); } catch(e) { config = {}; }
        }
        if (this.swiper) {
            try { this.swiper.destroy(true, true); } catch(e) {}
        }
        // Defensive defaults to reduce breakage
        config = config || {};
        if (typeof config.observeParents === 'undefined') config.observeParents = true;
        if (typeof config.observer === 'undefined') config.observer = true;
        new Swiper(this, config);
    });
}

if ($(".flat-thumbs-tes").length > 0) {
    var spaceThumbLg = $(".tf-thumb-tes").data("space-lg");
    var spaceThumb = $(".tf-thumb-tes").data("space");
    var spaceTesLg = $(".tf-tes-main").data("space-lg");
    var spaceTes = $(".tf-tes-main").data("space");
    var effect = $(".flat-thumbs-tes").data("effect") || "slide";
    const swThumb = new Swiper(".tf-thumb-tes", {
        speed: 800,
        spaceBetween: spaceThumb,
        effect: effect,
        fadeEffect: effect === "fade" ? { crossFade: true } : undefined,
        breakpoints: {
            768: {
                spaceBetween: spaceThumbLg,
            },
        },
    });
    const swTesMain = new Swiper(".tf-tes-main", {
        speed: 800,
        navigation: {
            nextEl: ".nav-next-tes",
            prevEl: ".nav-prev-tes",
        },
        effect: effect,
        fadeEffect: effect === "fade" ? { crossFade: true } : undefined,
        pagination: {
            el: ".sw-pagination-tes",
            clickable: true,
        },
        spaceBetween: spaceTes,
        breakpoints: {
            768: {
                spaceBetween: spaceTesLg,
            },
        },
    });

    swThumb.controller.control = swTesMain;
    swTesMain.controller.control = swThumb;
}
}, 50);

// Auto-init on first load after scripts mount
if (typeof window !== "undefined") {
  // Function to check and initialize carousels
  function checkAndInit() {
    if (typeof Swiper !== "undefined") {
      window.initCarousels();
    } else {
      // If Swiper is not loaded yet (lazy loading), wait and retry
      setTimeout(checkAndInit, 100);
    }
  }
  
  if (document.readyState === "complete" || document.readyState === "interactive") {
    checkAndInit();
  } else {
    document.addEventListener("DOMContentLoaded", checkAndInit);
  }
  
  // Also listen for when Swiper loads (for lazy loading scenarios)
  // This ensures carousels initialize even if Swiper loads after DOM is ready
  var swiperCheckInterval = setInterval(function() {
    if (typeof Swiper !== "undefined") {
      window.initCarousels();
      clearInterval(swiperCheckInterval);
    }
  }, 200);
  
  // Stop checking after 10 seconds to avoid infinite polling
  setTimeout(function() {
    clearInterval(swiperCheckInterval);
  }, 10000);
}
