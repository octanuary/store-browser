import ThemeModel from "../models/theme/ThemeModel";
import themelist from "../static/themelist.json";
import { useParams } from "../composables/params";

class ThemeManagerClass {
	private static _instance:ThemeManagerClass;
	private _currentTheme:ThemeModel;
	private _themeList:typeof themelist.themes = [];
	private _themeColumns:typeof themelist.sort;

	public static get instance() {
		if (!this._instance) {
			this._instance = new ThemeManagerClass();
		}
		return this._instance;
	}

	/**
	 * call when using thememanager to avoid errors
	 */
	public async initialize() {
		if (this.themeList.length == 0) {
			await this.loadThemeList();

			let themeId:string;
			const params = useParams();
			if (params.get("tray")) {
				themeId = params.get("tray") as string;
			} else {
				themeId = this.themeColumns[0][0];
			}

			await this.loadTheme(themeId);
		}
	}

	/**
	 * currently loaded theme
	 */
	public get currentTheme() {
		return this._currentTheme;
	}
	public get themeList() {
		return this._themeList;
	}
	public get themeColumns() {
		return this._themeColumns;
	}

	/**
	 * loads the themelist
	 */
	private async loadThemeList() {
		this._themeList = themelist.themes;
		this._themeColumns = themelist.sort;
	}

	/**
	 * load a theme from the flashthemes store
	 * @param id theme id
	 */
	public async loadTheme(id:string) {
		const req = await fetch(`https://flashthemes.net/static/store/${id}/theme.xml`);
		const text = await req.text();
		const doc = new DOMParser().parseFromString(text, "text/xml");
		const theme = new ThemeModel();
		await theme.parse(doc.children[0]);
		this._currentTheme = theme;
	}

	/**
	 * returns a theme's information
	 * @param id theme id
	 */
	public themeInfo(id:string) {
		for (const theme of this.themeList) {
			if (id == theme.studio) {
				return theme;
			}
		}
	}
}

const ThemeManager = ThemeManagerClass.instance;
export default ThemeManager;
