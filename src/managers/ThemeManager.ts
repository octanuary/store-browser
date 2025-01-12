import themelist from "../static/themelist.json";

class ThemeManagerClass {
	private static _instance:ThemeManagerClass;
	private _currentTheme:string;
	private _themeList:typeof themelist.themes = [];
	private _themeColumns:typeof themelist.sort;

	public static get instance() {
		if (!this._instance) {
			this._instance = new ThemeManagerClass();
		}
		return this._instance;
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
	public async loadThemeList() {
		if (this.themeList.length == 0) {
			this._themeList = themelist.themes;
			this._themeColumns = themelist.sort;
		}
	}

	/**
	 * load a theme from the flashthemes store
	 * @param id theme id
	 */
	public async loadTheme(id:string) {
		const req = await fetch(`https://flashthemes.net/static/store/${id}/theme.xml`);
		const text = await req.text();
		console.log(text);
		this._currentTheme = id;
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
