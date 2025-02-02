<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
html, body, #app {
	height: 100%;
}
body {
	font: 13px/1.5 "Lato", sans-serif;
	margin: 0;
}

*, ::before, ::after {
	user-select: none;
	box-sizing: border-box;
}

#app {
	background: #f0f0f0;
	display: flex;
}

::-webkit-scrollbar {
	width: 15px;
}
::-webkit-scrollbar-track {
	background: linear-gradient(90deg, #f2f2f2, #fafafa 75%, #dfdfdf 100%);
	border-left: 1px solid #e4e4e4;
}
::-webkit-scrollbar-thumb {
	background: #c1c1c1;
	background-clip: padding-box;
	border-top: 1px solid #0000;
	border-right: 3px solid #0000;
	border-bottom: 1px solid #0000;
	border-left: 4px solid #0000;
	border-radius: 6px;
	cursor: pointer;
	width: 8px;
}

</style>

<script setup lang="ts">
import ThumbTray from "./components/ThumbTray.vue";

</script>

<template>
	<Suspense>
		<ThumbTray/>
		<!-- <div id="details_pane">
			<h1>Welcome to the FlashThemes Store Browser!</h1>
			<p>Select a theme:</p>
		</div> -->

		<template #fallback>
			loading
		</template>
	</Suspense>
</template>
