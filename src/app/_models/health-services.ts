import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject("")
export class HealthServices{
  @JsonProperty('id', Number, true)
	private id: number= undefined!;

	@JsonProperty('name', String, true)
	private name: string = undefined!;


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $name
     * @return {string }
     */
	public get $name(): string  {
		return this.name;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $name
     * @param {string } value
     */
	public set $name(value: string ) {
		this.name = value;
	}

}
