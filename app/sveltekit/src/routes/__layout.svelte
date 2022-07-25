<script lang="ts">
	import '../app.css';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
</script>

<div class="app">
	<TopAppBar variant="static" color="primary">
		<Row>
			<Section>
				<Title>Svelte Kit</Title>
			</Section>
			<Section align="end" toolbar>
				<Button variant="unelevated" href="/"><Label>Counter</Label></Button>
				<Button variant="unelevated" href="/todos"><Label>Todos</Label></Button>
			</Section>
		</Row>
	</TopAppBar>

	<main>
		Hello from Main Content
		<div class="container">
			<slot />
		</div>
	</main>

	<footer>Hello from Footer</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	main {
		border: 1px black solid;
		padding: 1rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 1280px;
	}
	footer {
		margin-top: 1rem;
		height: 100px;
		border: 1px black solid;
		display: flex;
		align-items: center;
		padding: 1rem;
	}
</style>
