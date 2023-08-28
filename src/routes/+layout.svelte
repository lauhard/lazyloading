<script lang="ts">
	import './../app.css';
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="app">

	<main>
		<slot />
	</main>

	<Footer>
		<p slot="stock-images">Images provided from:</p>
	</Footer>

</div>

<style lang="scss">
	.app{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		main{
			height: 100vh;
			max-height: 100%;
			display: flex;
			flex-direction: column;
			width:var(--content-width);
		}
	}
</style>
