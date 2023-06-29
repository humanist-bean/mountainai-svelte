<script>
	import Counter from './Counter.svelte';
	import MtnBtn from './MtnBtn.svelte';
	import MountainLogo from './MountainLogo.svelte'
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	export let results_page = false;
	let logo_size = 11;
	

</script>

<svelte:head>
	<title>MountainAI</title>
	<meta name="description" content="Mountain AI Svelte Practice Project by Alder French" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<MountainLogo {logo_size}/>
		</span>

		Upload image of mountain to identify with AI.
	</h1>

	<h2>
		<MtnBtn on:clicked-upload-btn={()=> results_page = true}/>
	</h2>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

</style>
