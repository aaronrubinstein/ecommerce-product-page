<script>
    import { fade, slide } from "svelte/transition";
</script>

<div class="background" transition:fade={{ duration: 500 }}>
    <div class="drawer" transition:slide={{ duration: 500, axis: 'x' }}>
        <button on:click type="button" aria-label="Close navigation menu">
            <img src="images/icon-close.svg" alt="Close icon">
        </button>
        <ul class="nav-links">
            <li><span>Collections</span></li>
            <li><span>Men</span></li>
            <li><span>Women</span></li>
            <li><span>About</span></li>
            <li><span>Contact</span></li>
        </ul> 
    </div>
</div>

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: hsla(0, 0%, 0%, 0.75);
        z-index: 2;
    }

    .drawer {
        width: 250px;
        height: 100dvh;
        background: var(--white);
    }

    button {
        cursor: pointer;
    }

    img {
        width: 13.435px;
        height: 13.435px;
        margin-top: 24.78px;
        margin-left: 25.28px;
    }

    ul {
        list-style-type: none;
        margin-top: 53.78px;
        margin-left: 25px;
    }

    li {
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
        color: var(--text-dark);
        margin-bottom: 20px;
        cursor: pointer;
    }
    
</style>