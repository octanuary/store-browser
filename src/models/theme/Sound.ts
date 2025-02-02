export default class Sound {
	private _id:string;
	private _name:string;
	private _subtype:string;
	private _duration:number;
	private _hidden:boolean;

	constructor() {
		null;
	}

	get id(): string {
		return this._id;
	}
	get name(): string {
		return this._name;
	}
	get subtype(): string {
		return this._subtype;
	}
	/**
	 * duration in ms
	 */
	get duration(): number {
		return this._duration;
	}
	/**
	 * whether or not the asset should be displayed in the thumbtray
	 */
	get hidden(): boolean {
		return this._hidden;
	}

	/**
	 * parses a sound node from a theme xml
	 * @param node sound node
	 */
	public async parse(node:Element) {
		this._id = node.getAttribute("id") ?? "die";
		this._name = node.getAttribute("name") ?? "no";
		this._subtype = node.getAttribute("subtype") ?? "no";
		this._duration = Number(node.getAttribute("duration") ?? "no");
		this._hidden = node.getAttribute("enable") == "N";
		// console.log(node.children);
	}
};
