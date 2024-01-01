<script>
	import NavBar from "./lib/NavBar.svelte";
	import ImageCarousel from "./lib/ImageCarousel.svelte";
	import QtySelector from "./lib/QtySelector.svelte";
	import { cart } from "./stores";
	
	let qty = 0;
	let lightbox = false;
	
	const addToCart = () => {
		if (qty === 0) return;
		$cart.qty = qty;
		$cart.total = qty * 125;
	}

</script>

{#if lightbox}
<div class="lightbox-background">
		<ImageCarousel {lightbox} on:lightbox-close={() => lightbox = false} />
	</div>
{/if}

<NavBar />

<main>
	<ImageCarousel on:lightbox-open={() => lightbox = true} />
	<article>
		<div class="brand-name">Sneaker Company</div>
		<h1>Fall Limited Edition Sneakers</h1>
		<p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
		<div class="price-container">
			<div class="current-price-container">
				<span class="current-price">$125.00</span>
				<span class="discount-badge">50%</span>
			</div>
			<span class="previous-price">$250.00</span>
		</div>
		<div class="button-container">
			<QtySelector bind:qty={qty}/>
			<button on:click={addToCart} class="add-to-cart-btn" type="button">
				<img class="cart-icon" src="images/icon-cart.svg" alt="Cart icon">
				Add to cart
			</button>
		</div>
	</article>
</main>

<style>

	.lightbox-background {
		position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: hsla(0, 0%, 0%, 0.75);
        z-index: 3;
		display: grid;
		place-items: center;
	}

	main {
		margin: 90px 47px 0 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 125px;
	}

	.brand-name {
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--orange);
	}

	h1 {
		font-size: 44px;
		font-weight: 700;
		line-height: 48px;
		color: var(--text-dark);
		margin: 27px 0 32px 0;
	}

	p {
		font-size: 16px;
		font-weight: 400;
		line-height: 26px;
		color: var(--text-light);
		margin-bottom: 28px;
	}

	.price-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.current-price-container {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.current-price {
		font-size: 28px;
		font-weight: 700;
		color: var(--text-dark);
	}

	.discount-badge {
		width: 51px;
		height: 27px;
		border-radius: 6px;
		background: var(--discount-badge-bg);
		font-size: 16px;
		font-weight: 700;
		line-height: 27px;
		color: var(--orange);
		text-align: center;
	}

	.previous-price {
		font-size: 16px;
		font-weight: 700;
		line-height: 26px;
		color: var(--text-extra-light);
		text-decoration-line: line-through;
	}

	.button-container {
		margin-top: 32px;
		display: flex;
		gap: 16px;
	}

	.add-to-cart-btn {
		flex: 1 2 272px;
		height: 56px;
		border-radius: 10px;
		background-color: var(--orange);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15.54px;
		font-size: 16px;
		font-weight: 700;
		color: var(--white);
		cursor: pointer;
	}

	.add-to-cart-btn:hover {
		background-color: var(--orange-hover);
	}

	.cart-icon {
		width: 17.5px;
		height: 16px;
	}

	@media (max-width: 980px) {
		main {
			gap: 60px;
		}
	}

	@media (max-width: 915px) {
		main {
			margin: 0;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 24px;
		}

		article {
			padding: 0 24px;
		}

		.brand-name {
			font-size: 12px;
			letter-spacing: 1.846px;
		}

		h1 {
			font-size: 28px;
			line-height: 32px;
			margin: 19px 0 15px 0;
		}

		p {
			font-size: 15px;
			line-height: 25px;
		}

		.price-container {
			flex-direction: row;
			align-items: center;
			gap: 0;
		}

		.previous-price {
			margin-left: auto;
		}

		.button-container {
			margin-top: 26px;
			flex-direction: column;
		}

		.add-to-cart-btn {
			flex: auto;
			height: 56px;
			margin-bottom: 50px;
		}

	}

</style>