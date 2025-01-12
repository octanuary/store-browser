import CcTheme from "../cc/CcTheme";
import Prop from "./Prop";

/**
 * represents a studio theme
 */
export default class Theme {
	private _id:string;
	private _name:string;
	private _ccTheme:CcTheme;

	private _props:Map<string, Prop>;

	constructor() {
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

	
};
