<script>
    export let qty = 0;

    const increaseQty = () => {
        qty += 1;
    }

    const decreaseQty = () => {
        if (qty === 0) return;
        qty -= 1;
    }
</script>

<div class="container">
    <button on:click={decreaseQty} type="button" aria-label="Decrease quantity">
        <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="currentColor" fill-rule="nonzero" xlink:href="#a"/></svg>
    </button>
    <div class="quantity">
        {qty}
    </div>
    <button on:click={increaseQty} type="button" aria-label="Increase quantity">
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="currentColor" fill-rule="nonzero" xlink:href="#b"/></svg>
    </button>
</div>

<style>

    .container {
        flex: 0 1 157px;
        height: 56px;
        display: flex;
        align-items: center;
        background: var(--qty-selector-bg);
        border-radius: 10px;
    }

    button {
        width: 44px;
        height: 100%;
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    .quantity {
        flex: 1 1;
        font-size: 16px;
        font-weight: 700;
        color: var(--text-dark);
        text-align: center;
        line-height: 56px;
    }

    svg {
        color: var(--orange)
    }

    button:hover > svg {
        color: var(--orange-hover);
    }

    @media (max-width: 915px) {
        .container {
            flex: auto;
        }
    }

</style>