<script lang="ts">
	import './../app.css';
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="app">

	<main>
		<slot />
	</main>

	<Footer className="footer">
		
	</Footer>

</div>

<style lang="scss">
	
	.app{
		height: 100%;
		
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
		main{
			min-height: 100vh;
			height: 100%;
			max-height: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
			// width:var(--content-width);
		}
	}
</style>
