<style lang="css">
.dropdown_item {
	color: #505969;
	font-weight: 600;
	line-height: 11px;
	margin: 0 3px;
	padding: 6px 12px;
}
.dropdown_item:hover {
	background: #5db8a7;
	color: #fff;
	cursor: pointer;
}
</style>

<script setup lang="ts">
defineProps(["value", "name"]);
</script>

<template>
	<div class="dropdown_item">
		<slot></slot>
	</div>
</template>
