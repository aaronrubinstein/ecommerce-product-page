<script>
    import { cart } from "../stores";
</script>

<div class="card">
    <div class="header">
        <h3>Cart</h3>
    </div>
    <div class="content">
        {#if $cart.qty === 0}
            <p>Your cart is empty.</p>
        {:else}
            <p>Cart qty: {$cart.qty}</p>
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
        justify-content: center;
        align-items: center;
        height: 188px;
    }

    p {
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        color: var(--text-light);
    }
</style>