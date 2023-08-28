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
		width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		position: relative;
		main{
			min-height: calc(100vh - 13rem);
            height: 100%;
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 13rem;
		}
	}
</style>
