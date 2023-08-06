<script>
	import MtnBtn from './MtnBtn.svelte';
	import MountainLogo from './MountainLogo.svelte'
	import Auth from './Auth.svelte'
	import { fade } from 'svelte/transition';
	import {transition_start, transition_end} from '$lib/js/transitions.js';
	import {show_results_page, hide_results_page} from '$lib/js/results_page.js';
	import {user_store} from '$lib/js/user.js';

	let logo_size = 5;

	let toggle_results_page = false;
</script>

<header transition:fade
on:introend={transition_end}
on:outrostart={transition_start}
on:outroend={transition_end}>
	<ul>
		<div class="left-corner">
			<li><a class="home-btn" href="/">
				<MountainLogo {logo_size} on:clicked-home-btn={() => {hide_results_page(); transition_start();}} />
			</a></li>
		</div>
		
		<div class="right-corner">
			{#if $user_store}
				<li>
					<a  style="text-decoration: none;" href="/dashboard/{$user_store.uid}" >
						<button class="dashboard-btn">
							Dashboard
						</button>
					</a>
				</li>	
			{/if}
			<li>
				<MtnBtn />
			</li>	
		</div>
		
	</ul>
</header>

<style>
	header {
		width: 100%;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
		opacity: 0.5;
		width: 100%;
	}

	li {
	float: left;
	}

	.home-btn{
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

	.dashboard-btn{
        background-color: black;
        font-family: sans-serif;
        border-radius: 0.7rem;
        display: flex;
        text-align: center;
        padding: 0.66rem;
        margin: 0.66rem;
        text-decoration: none;
		color: white;
		cursor: pointer;
    }

    
    .dashboard-btn:hover{
        background-color: blue;
		text-decoration: none;
    }

	@media (max-width: 400px) {
        .dashboard-btn{
			font-size: .5rem;
		}

		.home-btn{
			font-size: .5rem;
		}
    }

</style>
