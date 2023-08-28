<script lang="ts">
    import { observerAction } from '$lib/actions/interectionObserver';
	import cat1 from '$lib/images/cat1.jpg';
	import cat2 from '$lib/images/cat2.jpg';
	import cat3 from '$lib/images/cat3.jpg';
	const observe = (e:CustomEvent) => {
		console.log(e.detail.hello);
		console.log("observe")
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Sveltekit Lazy Loading Example!
	</h1>
	<div class="viewport" use:observerAction on:observe={observe}>
		<div class="item">
			<img class="image" data-src="{cat1}" alt="cat1" srcset="">
		</div>
		<div class="item">2</div>
		<div class="item">3</div>
		<div class="item">4</div>
		<div class="item">5</div>
		<div class="item">6</div>
		<div class="item">7</div>
	</div>
</section>

<style lang="scss">
	.viewport{
		width:100%;
		padding:var(--padding-side);
		display: flex;
		flex-direction: column;
		max-height: 60vh;
		height: 100%;
		overflow-y: scroll;
		.item{
			min-height:200px;
			height: 200px;
			width:auto;
			.image{
				height:100%;
				width:160px;
				object-fit: cover;
				border-radius: 1rem;
			}
		}

	}
</style>
