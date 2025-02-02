<style lang="css">
.list_view {
	overflow-y: hidden;
	flex-grow: 1;
	display: flex;
	
	& .left_col {
		background: #4571a6;
		flex-shrink: 0;
		width: 102px;
	}
	& .right_col {
		border-top: 1px solid #dfdfdf;
		box-shadow: inset 0 9px 8px -8px #0002;
		flex-grow: 1;
		overflow-y: scroll;

		& .list_item {
			border-bottom: 1px solid #e2e7ed;
			color: #505969;
			padding: 7px 7px 12px;
			height: 49px;

			& .name {
				text-wrap: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-weight: bold;
				display: block;
				width: 160px;
			}
			& .duration {
				color: #858e95;
				margin-top: -1px;
				font-size: 11px;
				line-height: 11px;
				display: block;
			}
		}
	}
}
</style>

<script lang="ts" setup>
import { formatDur } from "../utils/formatDur";
import { Reactive, ref } from "vue";
import Sound from "../models/theme/Sound";

const props = defineProps<{
	data: Reactive<Map<string, Sound>>
}>();

const subtypes = ["bgmusic"];
let selected = "bgmusic";

const sounds = ref<Sound[]>([]);
for (const sound of props.data.values()) {
	if (sound.hidden) {
		continue;
	}
	if (!subtypes.includes(sound.subtype)) {
		subtypes.push(sound.subtype);
	}
	sounds.value.push(sound);
}
sounds.value = sounds.value.sort((a, b) => a.name.localeCompare(b.name))

function filterSound(v:Sound) {
	return v.subtype == selected;
}
</script>

<template>
	<div class="cat_view list_view">
		<div class="left_col">
			<div v-for="subtype in subtypes">
				{{ subtype }}
			</div>
		</div>
		<div class="right_col">
			<div v-for="sound in sounds.filter(v => filterSound(v as Sound))" class="list_item sound">
				<span class="name">
					{{ sound.name }}
				</span>
				<div class="btm">
					<span class="duration">{{ formatDur(sound.duration) }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
