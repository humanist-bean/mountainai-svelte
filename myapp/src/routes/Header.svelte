<script>
	import MtnBtn from './MtnBtn.svelte';
	import MountainLogo from './MountainLogo.svelte'
	import { fade } from 'svelte/transition';
	import {transition_start, transition_end} from '$lib/js/transitions.js';
	import {show_results_page, hide_results_page} from '$lib/js/results_page.js';

	let logo_size = 5;

	let toggle_results_page = false;
</script>

<header transition:fade
on:introend={transition_end}
on:outrostart={transition_start}
on:outroend={transition_end}>
	<ul>
		<div class="left-corner">
			<li><a class="left-corner" href="#home">
				<MountainLogo {logo_size} on:clicked-home-btn={() => {hide_results_page(); transition_start();}} />
			</a></li>
		</div>
		
		<div class="right-corner">
			<MtnBtn on:clicked-upload-btn={() => {show_results_page(); transition_start();}} />		
		</div>
		
	</ul>
</header>

<style>
	ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
	opacity: 0.5;
	}

	li {
	float: left;
	}

	li a {
	display: flex;
	color: white;
	text-align: center;
	margin: 0.22rem;
	padding: 0.22rem;
	text-decoration: none;
	}

	li a:hover {
	background-color: #111;
	}

	ul .left-corner{
		flex:1 1 200px;
		justify-content: flex-start;
	}

	ul .right-corner{
		display: flex;
  		justify-content: flex-end;
	}

	/* BEGIN TEMPLATE */
	
</style>
