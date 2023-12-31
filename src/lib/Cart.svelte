<script>
    import { cart } from "../stores";

    const clearQty = () => {
        $cart.qty = 0;
    }
</script>

<div class="card">
    <div class="header">
        <h3>Cart</h3>
    </div>
    <div class="content">
        {#if $cart.qty === 0}
            <p>Your cart is empty.</p>
        {:else}
            <div class="cart-item">
                <img class="item-thumbnail" src="images/image-product-1-thumbnail.jpg" alt="Sneakers">
                <div class="item-info">
                    <div class="item-description">
                        {$cart.item}
                    </div>
                    <div class="item-price-qty">
                        {$cart.price} x {$cart.qty} <span>${$cart.total.toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                    </div>
                </div>
                <button on:click={clearQty} class="delete-item" type="button" aria-label="Remove item from cart">
                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="c"/></defs><use fill="currentColor" fill-rule="nonzero" xlink:href="#c"/></svg>
                </button>
            </div>
            <button class="checkout-btn" type="button">Checkout</button>
        {/if}
    </div>
</div>

<style>
    .card {
        position: absolute;
        bottom: -286px;
        right: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 360px;
        background: var(--white);
        border-radius: 10px;
        box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.50);
        cursor: default;
    }

    .header {
        height: 67px;
        padding-top: 24px;
        padding-left: 24px;
        border-bottom: 1px solid var(--divider);
    }

    h3 {
        font-size: 16px;
        font-weight: 700;
        color: var(--text-dark);
        text-align: left;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 24px;
        height: 188px;
        padding: 24px 24px 32px 24px;
    }

    p {
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        color: var(--text-light);
        margin: auto 0;
        text-align: center;
    }

    .cart-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .item-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        margin-right: 16px;
    }

    .item-description,
    .item-price-qty {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: var(--text-light);
        text-align: left;
    }

    .item-price-qty > span {
        font-weight: 700;
        color: var(--text-dark);
        margin-left: 6px;
    }

    .delete-item {
        margin-left: auto;
        cursor: pointer;
    }

    .delete-item > svg {
        color: var(--delete-icon);
    }

    .delete-item:hover > svg {
        color: var(--text-dark);
    }

    .checkout-btn {
        height: 56px;
        background: var(--orange);
        border-radius: 10px;
        font-size: 16px;
        font-weight: 700;
        color: var(--white);
        cursor: pointer;
    }

    .checkout-btn:hover {
        background: var(--orange-hover);
    }

    @media (max-width: 1300px) {
        .card {
            left: auto;
            right: -95px;
            transform: none;
        }
    }

    @media (max-width: 915px) {
        .card {
            position: absolute;
            top: 76px;
            left: 50%;
            transform: translateX(-50%);
            bottom: initial;
            z-index: 1;   
        }
    }

</style>