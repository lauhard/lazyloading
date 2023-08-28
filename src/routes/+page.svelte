<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Sveltekit Lazy Loading Example!
	</h1>
	<div class="viewport">
		<div class="item">1</div>
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
		}
	}
</style>
