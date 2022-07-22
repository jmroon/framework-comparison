<script lang="ts">
	import '../app.css';
</script>

<header>
	<nav>
		<a href="/"><h1>Svelte Kit</h1></a>
		<span class="spacer" />
		<a href="/">Counter</a>
		<a href="/todos">Todos</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>Hello Footer</footer>

<style>
	main {
		margin-top: 1rem;
		padding: 1rem;
		box-sizing: border-box;
		border: 1px black solid;
	}
	footer {
		margin-top: 1rem;
		height: 100px;
		border: 1px black solid;
		display: flex;
		align-items: center;
		padding: 1rem;
	}

	header {
		width: 100%;
		height: 60px;
		background-color: darkslategrey;
		color: white;
	}

	nav {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: larger;
		padding-left: 1rem;
		padding-right: 1rem;
		gap: 1rem;
	}

	a {
		color: white;
	}
</style>
