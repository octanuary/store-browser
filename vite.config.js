import vuePlugin from "@vitejs/plugin-vue";
import svgPlugin from "vite-svg-loader";

export default {
	plugins: [
		vuePlugin(),
		svgPlugin(),
	]
};
