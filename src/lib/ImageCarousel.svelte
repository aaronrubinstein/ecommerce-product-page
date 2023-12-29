<script>
    import emblaCarouselSvelte from 'embla-carousel-svelte';

    let emblaApi;
    let selectedImage;

    const onInit = event => {
        emblaApi = event.detail;
        selectedImage = emblaApi.selectedScrollSnap();
        emblaApi.on('select', onSelect);
    }

    const onSelect = (emblaApi, eventName) => {
        selectedImage = emblaApi.selectedScrollSnap();
    }

    const scrollToImage = imgIndex => {
        emblaApi.scrollTo(imgIndex);
    }

</script>

<div class="embla">
    <div class="embla-viewport" use:emblaCarouselSvelte on:emblaInit={onInit}>
        <div class="embla-container">
            <img class="embla-slide" src="images/image-product-1.jpg" alt="Sneakers">
            <img class="embla-slide" src="images/image-product-2.jpg" alt="Sneakers">
            <img class="embla-slide" src="images/image-product-3.jpg" alt="Sneakers">
            <img class="embla-slide" src="images/image-product-4.jpg" alt="Sneakers">
        </div>
    </div>
    <svg class="zoom-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5 26.25L16.625 18.375C16 18.875 15.2812 19.2708 14.4688 19.5625C13.6562 19.8542 12.7917 20 11.875 20C9.60417 20 7.68229 19.2135 6.10938 17.6406C4.53646 16.0677 3.75 14.1458 3.75 11.875C3.75 9.60417 4.53646 7.68229 6.10938 6.10938C7.68229 4.53646 9.60417 3.75 11.875 3.75C14.1458 3.75 16.0677 4.53646 17.6406 6.10938C19.2135 7.68229 20 9.60417 20 11.875C20 12.7917 19.8542 13.6562 19.5625 14.4688C19.2708 15.2812 18.875 16 18.375 16.625L26.25 24.5L24.5 26.25ZM11.875 17.5C13.4375 17.5 14.7656 16.9531 15.8594 15.8594C16.9531 14.7656 17.5 13.4375 17.5 11.875C17.5 10.3125 16.9531 8.98438 15.8594 7.89062C14.7656 6.79688 13.4375 6.25 11.875 6.25C10.3125 6.25 8.98438 6.79688 7.89062 7.89062C6.79688 8.98438 6.25 10.3125 6.25 11.875C6.25 13.4375 6.79688 14.7656 7.89062 15.8594C8.98438 16.9531 10.3125 17.5 11.875 17.5ZM10.625 15.625V13.125H8.125V10.625H10.625V8.125H13.125V10.625H15.625V13.125H13.125V15.625H10.625Z" fill="currentColor"/></svg>
    <div class="thumbs">
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

    .embla-viewport {
        height: 445px;
        overflow: hidden;
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

    .zoom-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        color: var(--discount-badge-bg);
        cursor: pointer;
        visibility: hidden;
    }

    .embla-viewport:hover + .zoom-icon, 
    .zoom-icon:hover {
        visibility: visible;
    }

    .zoom-icon:hover {
        color: var(--white);
    }

    .thumbs {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
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
</style>