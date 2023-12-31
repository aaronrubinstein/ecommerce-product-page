<script>
    import { cart } from "../stores";
	import Cart from "./Cart.svelte";
	import NavDrawer from "./NavDrawer.svelte";

	let navDrawerOpen = false;
	let cartOpen = false;

	const toggleCartOpen = () => cartOpen = !cartOpen;
	const toggleDrawerOpen = () => navDrawerOpen = !navDrawerOpen;
</script>

<nav>
	{#if navDrawerOpen}
		<NavDrawer on:click={toggleDrawerOpen} />
	{/if}
    <button on:click={toggleDrawerOpen} class="menu-btn" type="button" aria-label="Open/close menu">
		<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="currentColor" fill-rule="evenodd"/></svg>
	</button>
	<img class="logo-img" src="images/logo.svg" alt="Sneakers logo">
	<ul class="nav-links">
		<li><span>Collections</span></li>
		<li><span>Men</span></li>
		<li><span>Women</span></li>
		<li><span>About</span></li>
		<li><span>Contact</span></li>
	</ul> 
	<div class="cart-container">
		<div class="cart-btn-container">
			<button on:click={toggleCartOpen} class="cart-btn" type="button" aria-label="Open/close shopping cart">
				<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fill-rule="nonzero"/></svg>
			</button>
			{#if $cart.qty > 0}
				<button on:click={toggleCartOpen} class="cart-qty-badge" type="button" aria-label="Open/close shopping cart">
					{$cart.qty}
				</button>
			{/if}
		</div>
		{#if cartOpen}
			<Cart />
		{/if}
	</div>
	<img class="avatar" src="images/image-avatar.png" alt="User avatar">
</nav>

<style>
    nav {
		height: 113px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid var(--divider);
	}
	
	.menu-btn {
		width: 16px;
		height: 15px;
		margin-right: 16px;
		cursor: pointer;
		display: none;
	}

	.menu-btn svg {
		color: var(--text-light);
	}

	.menu-btn:hover svg {
		color: var(--text-dark);
	}

	.logo-img {
		margin-top: -2px;
	}

	.nav-links {
		list-style-type: none;
		display: flex;
		align-items: center;
		gap: 32px;
		margin-left: 56.5px;
		height: 100%;
	}

	.nav-links li {
		height: 100%;
		display: grid;
		place-items: center;
	}

	.nav-links li > span {
		font-size: 15px;
		font-weight: 400;
		line-height: 26px;
		cursor: pointer;
		color: var(--text-light);
	}

	.nav-links li > span:hover {
		color: var(--text-dark);
	}

	.nav-links li:has(span:hover) {
		box-shadow: inset 0px -4px 0px 0px var(--orange);
	}

	.cart-container {
		margin-left: auto;
		position: relative
	}
	
	.cart-btn-container {
		position: relative;
		display: grid;
		place-items: center;
	}

	.cart-qty-badge {
		position: absolute;
		top: -6px;
		left: 9px;
		height: 13px;
		width: 19px;
		background: var(--orange);
		border-radius: 6.5px;
		font-size: 10px;
		font-weight: 700;
		color: var(--white);
		display: grid;
		place-items: center;
		cursor: pointer;
	}

	.cart-btn {
		width: 22px;
		height: 20px;
		cursor: pointer;
	}

	.cart-btn svg {
		color: var(--text-light);
	}

	.cart-btn:hover svg {
		color: var(--text-dark);
	}

	.cart-btn:has(+ .cart-qty-badge:hover) svg {
		color: var(--text-dark);
	}

	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50px;
		margin-left: 46.18px;
		cursor: pointer;
	}

	.avatar:hover {
		box-shadow: 0 0 0 2px var(--orange);
	}

	@media (max-width: 915px) {
		nav {
			height: 68px;
		}
		
		.menu-btn {
			display: block;
			margin-left: 24px;
		}

		.nav-links {
			display: none;
		}

		.cart-container {
			position: static;
		}

		.avatar {
			height: 24px;
			width: 24px;
			margin-left: 22.18px;
			margin-right: 24px;
		}
	}

</style>