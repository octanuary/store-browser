<style lang="css">
#thumb_tray {
	background: #edf2f6;
	border-right: 1px solid #c1c1c1;
	box-shadow: 0 0 6px #0000001b;
	display: flex;
	flex-direction: column;
	width: 310px;
	height: 100%;
}

.tab_switcher {
	background: #e3e7ed;
	border-bottom: 10px solid #fff;
	flex-shrink: 0;
	height: 70px;

	& .tab_indicators {
		display: flex;
		width: 310px;
		height: 5px;

		& .tab_in {
			background: #222c46;
			border-left: 1px solid #222c46;
			flex-grow: 1;
		}
		& .tab_in.sel {
			background: #e97d3b;
		}
	}

	& .tab_buttons {
		overflow: hidden;
		display: flex;
		width: 310px;
		height: 55px;

		& .tab_btn {
			border-top: 1px solid #cfcfcf;
			border-bottom: 1px solid #c1c1c1;
			border-left: 1px solid #cfcfcf;
			box-shadow: inset 0 -7px 7px -7px #0002;
			flex-grow: 1;
		}
		& .tab_btn.sel {
			background: #fff;
			border-left-color: #b4b4b4;
			border-top-color: #fff;
			border-bottom-color: #fff;
			box-shadow: 0.5px -2px 4px -1px #0009;
		}
		& .tab_btn.sel + .tab_btn {
			border-left-color: #b4b4b4;
		}
	}
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import SoundListView from "./SoundListView.vue";
import ThemeSelector from "./ThemeSelector.vue";
import ThemeManager from "../managers/ThemeManager";

await ThemeManager.initialize();

let currentTab = ref("");
</script>

<template>
	<div id="thumb_tray">
		<ThemeSelector/>
		<div class="tab_switcher">
			<div class="tab_indicators">
				<div class="tab_in"></div>
				<div class="tab_in"></div>
				<div class="tab_in"></div>
				<div class="tab_in sel"></div>
				<div class="tab_in"></div>
			</div>
			<div class="tab_buttons">
				<div class="tab_btn">
					
				</div>
				<div class="tab_btn">
					
				</div>
				<div class="tab_btn">
					
				</div>
				<div class="tab_btn sel">
					
				</div>
				<div class="tab_btn">
					
				</div>
			</div>
		</div>
		<SoundListView :data="ThemeManager.currentTheme.sounds"/>
	</div>
</template>
