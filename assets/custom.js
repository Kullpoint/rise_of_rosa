import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

const videoLogic = () => {
    const videoContainer = document.querySelector("[data-x-video-container]");
    const videoIframe = document.querySelector("[data-x-video]");
    const openVideoButton = document.querySelector("[data-video-button='open']");
    const closeVideoButton = document.querySelector("[data-video-button='close']");

    if (videoContainer) {
        initVideoIframeSize = () => {
            if (window.innerWidth <= 1007) {
                videoIframe.setAttribute("width", window.innerWidth);
                videoIframe.setAttribute("height", window.innerHeight);
            }
            else {
                videoIframe.setAttribute("width", (window.innerWidth * 0.8));
                videoIframe.setAttribute("height", (window.innerHeight * 0.8));
            }
        }

        initVideoIframeSize();

        window.addEventListener("resize", () => {
            initVideoIframeSize();
        });
        
        openVideoButton.addEventListener("click", () => {
            videoContainer.classList.remove("dn");
            setTimeout(() => {
                videoContainer.classList.add("active");
            }, 1);
            document.body.style.overflow = "hidden";
        });

        closeVideoButton.addEventListener("click", () => {
            videoContainer.classList.remove("active");
            setTimeout(() => {
                videoContainer.classList.add("dn");
            }, 300);
            document.body.style.overflow = "";
        });
    }
}

const productRecommendationsSlider = () => {
    //create product slider with slider settings (sliderSettings)
    new Swiper('#ProductRecommendationsSlider', {
        speed: 900,
        loop: false,
        allowTouchMove: true,
        spaceBetween: 30,

        breakpoints: {
            0: {
                slidesPerView: 2
            },
            1008: {
                slidesPerView: 4
            }
        },

        navigation: {
            nextEl: '.ProductRecommendationsSlider-next',
            prevEl: '.ProductRecommendationsSlider-prev',
        },
    });
}

const productRecentlySlider = () => {
    //create product slider with slider settings (sliderSettings)
    setTimeout(() => {
        new Swiper('#ProductRecentlySlider', {
            speed: 900,
            loop: false,
            allowTouchMove: true,
            spaceBetween: 30,
    
            breakpoints: {
                0: {
                    slidesPerView: 2
                },
                1008: {
                    slidesPerView: 4
                }
            },
    
            navigation: {
                nextEl: '.ProductRecentlySlider-next',
                prevEl: '.ProductRecentlySlider-prev',
            },
        });
    }, 500);

    const checkWindowSizeAndRemoveOrAddArrows = () => {
        const arrows = document.querySelectorAll("[data-ProductListWrapper-arrow]");
        const slides = document.querySelectorAll("[data-ProductListWrapper-slide]");

        if (arrows) {
            const hideArrows = () => {
                for (const arrow of arrows) {
                    arrow.classList.add("dn");
                }
            }

            const showArrows = () => {
                for (const arrow of arrows) {
                    arrow.classList.remove("dn");
                }
            }

            if (window.screen.width < 1008) {
                if (slides.length < 3) {
                    hideArrows();
                }
                else {
                    showArrows();
                }
            }
            else {
                if (slides.length < 5) {
                    hideArrows();
                }
                else {
                    showArrows();
                }
            }
        }
    }

    window.addEventListener("resize", () => {
        checkWindowSizeAndRemoveOrAddArrows();
    });

    checkWindowSizeAndRemoveOrAddArrows();
}

//async loading for not important JS files
// document.addEventListener("DOMContentLoaded", () => {
    videoLogic();
    productRecommendationsSlider();
    productRecentlySlider();
// });