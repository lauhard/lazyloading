<script lang="ts">
    import { observerAction, observer } from '$lib/actions/interectionObserver';
	import cat1 from '$lib/images/cat1.jpg';
	import cat2 from '$lib/images/cat2.jpg';
	import cat3 from '$lib/images/cat3.jpg';
	const observe = (e:CustomEvent) => {
		const event = e.detail;
        const node = event.node.target as HTMLElement;
		// console.log(e.detail.isIntersecting);
		if (node.hasChildNodes()) {
            node.childNodes.forEach((child) => {
                if (child.nodeName === "IMG") {
                    let img = child as HTMLImageElement;

                    if (event.isIntersecting === true) {
                        img.src = img.dataset.src as string;
                        // img.style.display = "block";
                        if(img?.src.length > 0) {
                            img.style.opacity = "1";
                            img.style.transition = "all 2s ease-in-out";
                            return;
                        }
                        img.onload = () => {
                            img.style.opacity = "1";
                            img.style.transition = "all 2s ease-in-out";
                        };
                    } else {
                        img.style.opacity = "0";
                        img.style.transition = "all 2s ease-in-out";
                    }
                }
            });
        }
	}
	const props: IntersectionObserverInit = {
        rootMargin: "200px",
    };
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Sveltekit Lazy Loading Example!
	</h1>
	<div class="viewport" use:observerAction={{props}} on:observe={observe}>
		<div class="item">
			<img class="image" data-src="{cat1}" alt="cat1" srcset="">
			<div class="placeholder" />
		</div>
		<div class="item">
			<p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi nostrum inventore, esse, ea animi atque officiis quaerat
                consequatur magni officia architecto? Aliquid voluptates
                excepturi, dolor alias iure dolorem voluptatibus impedit.
            </p>
		</div>
		<div class="item">
			<p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi nostrum inventore, esse, ea animi atque officiis quaerat
                consequatur magni officia architecto? Aliquid voluptates
                excepturi, dolor alias iure dolorem voluptatibus impedit.
            </p>
		</div>
		<div class="item">
			<p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi nostrum inventore, esse, ea animi atque officiis quaerat
                consequatur magni officia architecto? Aliquid voluptates
                excepturi, dolor alias iure dolorem voluptatibus impedit.
            </p>
		</div>
		<div class="item">
			<img class="image" data-src="{cat2}" alt="cat1" srcset="">
			<div class="placeholder" />
		</div>
		<div class="item">
			<p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi nostrum inventore, esse, ea animi atque officiis quaerat
                consequatur magni officia architecto? Aliquid voluptates
                excepturi, dolor alias iure dolorem voluptatibus impedit.
            </p>
		</div>
		<div class="item">
			<img class="image" data-src="{cat3}" alt="cat1" srcset="">
			<div class="placeholder" />
		</div>
	</div>
</section>

<style lang="scss">
	 section {
        max-width: var(--content-width);
        padding: var(--padding-side);
        height: 100%;
        width: 100%;
        align-self: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
	 }
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
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			position: relative;
			transition: all 1s ease-in-out;
			.image{
				height:100%;
				width:160px;
				object-fit: fill;
				border-radius: 1rem;
				opacity: 0;
				z-index: 10;
			}
			.placeholder {
				position: absolute;
				background-color: rgb(74, 74, 74);
				background: linear-gradient(
					45deg,
					var(--primary),
					var(--primary-hover),
					var(--secondary),
					var(--secondary-hover)
				);
				background-size: 300%;
				animation: gradient 3s ease infinite;
				height: 100vh;
				height: 200px;
				transform: translateX(-50%);
				opacity: 1;
				z-index: 1;
				left: 50%;
				width: 160px;
				border-radius: 1rem;
			}
			p {
				width: 50%;
				height: auto;
				transition: all .5s ease-in-out;
				color:white;
				padding: 1rem;
				border-radius: 5px;
			}
			p:hover {
				
				background: linear-gradient(
					45deg,
					var(--primary),
					var(--primary-hover),
					var(--secondary),
					var(--secondary-hover)
				);
				background-size: 400% 400%;
				animation: gradient 5s ease infinite;
				transition: all .5s ease-in-out;
				color:black;
			}
		}
	}
	@keyframes gradient {
        0% {
            background-position: 0% 0%;
        }

        50% {
            background-position: 100% 50%;

        }

        100% {
            background-position: 0% 0%;
        }
    }
</style>
