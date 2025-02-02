import CcTheme from "../cc/CcTheme";
import Prop from "./Prop";
import { Reactive, reactive } from "vue";
import Sound from "./Sound";

/**
 * represents a studio theme
 */
export default class ThemeModel {
	private _id:string;
	private _name:string;
	private _ccTheme:CcTheme;

	private _props:Map<string, Prop>;
	private _sounds:Reactive<Map<string, Sound>>;

	constructor() {
		this._sounds = reactive(new Map());
		null;
	}

	/**
	 * theme id
	 */
	get id(): string {
		return this._id;
	}
	/**
	 * whether or not the theme has an associated cc theme
	 */
	get supportsCc(): boolean {
		return !!this._ccTheme;
	}
	/**
	 * cc theme
	 */
	get ccTheme(): CcTheme {
		return this._ccTheme;
	}
	/**
	 * theme name
	 */
	get name(): string {
		return this._name;
	}
	get sounds(): Reactive<Map<string, Sound>> {
		return this._sounds;
	}

	public async parse(doc:Element) {
		this._id = doc.getAttribute("id") ?? "id";
		this._name = doc.getAttribute("name") ?? "die";
		// this._id = doc.getAttribute("cc_theme_id") ?? "kys";
		for (const child of doc.children) {
			// console.log(child.tagName)
			switch (child.tagName) {
				case "sound": {
					const sound = new Sound();
					sound.parse(child);
					this._sounds.set(sound.id, sound);
				}
			}
		}
		// console.log(this._sounds);
	}
};
