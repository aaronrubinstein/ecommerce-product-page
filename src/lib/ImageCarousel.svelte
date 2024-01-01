<script>
    import { createEventDispatcher } from 'svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte';

    export let lightbox = false;
    
    let emblaApi;
    let selectedImage;

    const dispatch = createEventDispatcher();

    const onInit = event => {
        emblaApi = event.detail;
        selectedImage = emblaApi.selectedScrollSnap();
        emblaApi.on('select', onSelect);
    }

    const onSelect = (emblaApi, eventName) => {
        selectedImage = emblaApi.selectedScrollSnap();
    }

    const scrollToImage = imgIndex => emblaApi.scrollTo(imgIndex);
    const scrollPrev = () => emblaApi.scrollPrev();
    const scrollNext = () => emblaApi.scrollNext();
</script>

<div class="embla" class:lightbox>
    {#if lightbox}
        <button on:click={() => dispatch('lightbox-close')} class="close-lightbox-btn" type="button" aria-label="Close image lightbox">
            <svg class="close-lightbox-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z" fill="currentColor"/></svg>              
        </button>
    {/if}
    <div class="embla-viewport" class:lightbox use:emblaCarouselSvelte on:emblaInit={onInit}>
        <div class="embla-container">
            <img class="embla-slide" src="images/image-product-1.jpg" alt="Sneakers">
            <img class="embla-slide" src="images/image-product-2.jpg" alt="Sneakers">
            <img class="embla-slide" src="images/image-product-3.jpg" alt="Sneakers">
            <img class="embla-slide" src="images/image-product-4.jpg" alt="Sneakers">
        </div>
    </div>
    {#if !lightbox}
        <button on:click={() => dispatch('lightbox-open')} class="zoom-btn" type="button" aria-label="Open image lightbox">
            <svg class="zoom-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5 26.25L16.625 18.375C16 18.875 15.2812 19.2708 14.4688 19.5625C13.6562 19.8542 12.7917 20 11.875 20C9.60417 20 7.68229 19.2135 6.10938 17.6406C4.53646 16.0677 3.75 14.1458 3.75 11.875C3.75 9.60417 4.53646 7.68229 6.10938 6.10938C7.68229 4.53646 9.60417 3.75 11.875 3.75C14.1458 3.75 16.0677 4.53646 17.6406 6.10938C19.2135 7.68229 20 9.60417 20 11.875C20 12.7917 19.8542 13.6562 19.5625 14.4688C19.2708 15.2812 18.875 16 18.375 16.625L26.25 24.5L24.5 26.25ZM11.875 17.5C13.4375 17.5 14.7656 16.9531 15.8594 15.8594C16.9531 14.7656 17.5 13.4375 17.5 11.875C17.5 10.3125 16.9531 8.98438 15.8594 7.89062C14.7656 6.79688 13.4375 6.25 11.875 6.25C10.3125 6.25 8.98438 6.79688 7.89062 7.89062C6.79688 8.98438 6.25 10.3125 6.25 11.875C6.25 13.4375 6.79688 14.7656 7.89062 15.8594C8.98438 16.9531 10.3125 17.5 11.875 17.5ZM10.625 15.625V13.125H8.125V10.625H10.625V8.125H13.125V10.625H15.625V13.125H13.125V15.625H10.625Z" fill="currentColor"/></svg>
        </button>
    {/if}
    <button on:click={scrollPrev} class:lightbox class="scroll-prev-btn" type="button" aria-label="Previous image">
        <img class="arrow left-arrow" src="images/icon-previous.svg" alt="Left arrow">
    </button>
    <button on:click={scrollNext} class:lightbox class="scroll-next-btn" type="button" aria-label="Next image">
        <img class="arrow right-arrow" src="images/icon-next.svg" alt="Right arrow">
    </button>
    <div class="thumbs" class:lightbox>
        {#each [1, 2, 3, 4] as thumb}
            <label class:selected={selectedImage === (thumb - 1)}>
                <input 
                    type="radio"
                    name="thumbnail"
                    value={thumb - 1}
                    bind:group={selectedImage}
                    on:input={() => scrollToImage(thumb - 1)}
                    aria-label={`Product thumbnail ${thumb}`} >
                <img 
                    class="thumb-img" 
                    src={`images/image-product-${thumb}-thumbnail.jpg`} 
                    alt={`Product thumbnail ${thumb}`} >
            </label>
        {/each}
    </div>
</div>

<style>
    .embla {
        width: 445px;
        position: relative;
    }

    .embla.lightbox {
        width: 550px;
    }

    .close-lightbox-btn {
        display: block;
        cursor: pointer;
        margin-bottom: 20px;
        margin-left: auto;
    }

    .close-lightbox-icon {
        color: var(--white);
    }

    .close-lightbox-btn:hover > .close-lightbox-icon {
        color: var(--orange);
    }

    .embla-viewport {
        height: 445px;
        overflow: hidden;
    }

    .embla-viewport.lightbox {
        height: 550px;
    }

    .embla-container {
        display: flex;
        gap: 30px;
    }

    .embla-slide {
        flex: 0 0 100%;
        min-width: 0;
        border-radius: 15px;
    }

    .zoom-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        visibility: hidden;
    }
    
    .zoom-icon {
        color: var(--discount-badge-bg);
    }

    .embla-viewport:hover + .zoom-btn, 
    .zoom-btn:hover {
        visibility: visible;
    }

    .zoom-btn:hover > .zoom-icon {
        color: var(--white);
    }

    .scroll-prev-btn,
    .scroll-next-btn {
        display: none;
    }

    .scroll-prev-btn.lightbox,
    .scroll-next-btn.lightbox {
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background-color: var(--white);
        top: 41.4%;
        cursor: pointer;
        display: grid;
        place-items: center;
        opacity: .9;
    }

    .scroll-prev-btn.lightbox {
        left: -20px;
    }

    .scroll-next-btn.lightbox {
        right: -20px;
    }

    .arrow {
        height: 14px;
        width: 9px;
    }

    .left-arrow {
        margin-right: 2px;
    }

    .right-arrow {
        margin-left: 2px;
    }

    .thumbs {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
    }

    .thumbs.lightbox {
        margin-top: 40px;
        padding: 0 52px;
    }

    label {
        border-radius: 10px;
        height: 88px;
        position: relative;
    }

    label.selected {
        box-shadow: 0 0 0 2px var(--orange);
    }
    
    input[type="radio"] {
       appearance: none;
       position: absolute;
    }

    .thumb-img {
        width: 88px;
        height: 88px;
        border-radius: 10px;
        cursor: pointer;
    }

    .thumb-img:hover {
        opacity: 0.5;
    }

    label.selected .thumb-img {
        opacity: 0.5;
    }

    @media (max-width: 915px) {
		.embla {
            width: 100%;
        }

        .embla-viewport {
            height: auto;
        }

        .embla-slide {
            border-radius: 0px;
        }
        
        .zoom-btn,
        .thumbs {
            display: none;
        }

        .scroll-prev-btn,
        .scroll-next-btn {
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            background-color: var(--white);
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            display: grid;
            place-items: center;
            opacity: .9;
        }

        .scroll-prev-btn {
            left: 16px;
        }

        .scroll-next-btn {
            right: 16px;
        }

        .arrow {
            height: 14px;
            width: 9px;
        }

        .left-arrow {
            margin-right: 2px;
        }

        .right-arrow {
            margin-left: 2px;
        }
	}
    
</style>