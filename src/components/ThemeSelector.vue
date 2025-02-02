<style lang="css">
#theme_selector {
	background: #222c46;
	color: #fff;
	border-right: 1px solid #1f2941;
	font-size: 14px;
	font-weight: bold;
	display: flex;
	padding: 12px 24px 7px;
	width: 310px;
	height: 45px;

	& .theme_icon {
		background: #e2e7ed;
		border-radius: 100%;
		margin-top: -2px;
		margin-right: 9px;
	}
}
.dropdown {
	width: 210px;
}
.dropdown_content {
	box-shadow: 0 6px 8px 4px #0003;
	padding-top: 7px;
}
.dropdown_item {
	display: flex;
	margin: 0 4px;
	padding: 3px 11px 3px;
}

.extra {
	background: #eef2f8;
	box-shadow: inset 0 6px 5px -4px #0001;
	border-radius: 0 0 4px 4px;
	margin-top: 5px;
	padding: 5px 0 7px 0;
}

.theme_icon {
	display: block;
	margin-right: 7px;
	object-fit: none;
	width: 28px;
	height: 28px;
}
.theme_name {
	padding: 10px 0 7px;
}

.extra .dropdown_content {
	left: calc(100% - 8px);
	padding-bottom: 7px;
	display: flex;

	& .extra_col {
		width: 200px;
	}
}
</style>

<script setup lang="ts">
import Dropdown from "./controls/Dropdown.vue";
import DropdownItem from "./controls/DropdownItem.vue";
import DropdownSeparator from "./controls/DropdownSeparator.vue";
import { ref } from "vue";
import ThemeManager from "../managers/ThemeManager";

await ThemeManager.initialize();
const themeId = ThemeManager.currentTheme.id;
const currentCol = ref(findColumn(themeId));

function findColumn(id:string) {
	for (const column of ThemeManager.themeColumns) {
		if (column.indexOf(id) > -1) {
			return column;
		}
	}
	return ThemeManager.themeColumns[0];
}

function extraColumns() {
	let columns:string[][] = [];
	for (const column of ThemeManager.themeColumns) {
		if (column.indexOf(themeId) == -1) {
			columns.push(column);
		}
	}
	return columns;
}

function themeIcoPath(id:string|void) {
	return new URL(`../static/img/${id}.png`, import.meta.url).href;
}

</script>

<template>
	<Dropdown>
		<template #toggle>
			<div id="theme_selector">
				<img class="theme_icon" :src="themeIcoPath(themeId)"/>
				<div class="name">{{ ThemeManager.themeInfo(themeId)?.name }}</div>
			</div>
		</template>
		<DropdownItem v-for="theme in currentCol?.map((id) => ThemeManager.themeInfo(id))">
			<img class="theme_icon" :src="themeIcoPath(theme?.studio)"/>
			<span class="theme_name">{{ theme?.name }}</span>
		</DropdownItem>
		<div class="extra">
			<DropdownItem>
				<img class="theme_icon" src="../static/img/common.png"/>
				<span class="theme_name">Common</span>
			</DropdownItem>
			<DropdownItem>
				<img class="theme_icon" src="../static/img/Comm.png"/>
				<span class="theme_name">Community Library</span>
			</DropdownItem>
			<DropdownItem>
				<img class="theme_icon" src="../static/img/Search.png"/>
				<span class="theme_name">Search all themes</span>
			</DropdownItem>
			<DropdownSeparator/>
			<Dropdown open-with-hover>
				<template #toggle>
					<DropdownItem>
						<img class="theme_icon" src="../static/img/more.png"/>
						<span class="theme_name">More Assets...</span>
					</DropdownItem>
				</template>
				<div v-for="column in extraColumns()" class="extra_col">
					<DropdownItem v-for="theme in column.map((id) => ThemeManager.themeInfo(id))">
						<img class="theme_icon" onerror="this.style.visibility='hidden'" :src="themeIcoPath(theme?.studio)"/>
						<span class="theme_name">{{ theme?.name }}</span>
					</DropdownItem>
				</div>
			</Dropdown>
		</div>
	</Dropdown>
</template>
