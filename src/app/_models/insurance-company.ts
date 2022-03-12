import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject("")
export class InsuranceCompany{
  @JsonProperty('id', Number, true)
	private id: number= undefined!;

	@JsonProperty('company', String, true)
	private company: string = undefined!;

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $company
     * @return {string }
     */
	public get $company(): string  {
		return this.company;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $company
     * @param {string } value
     */
	public set $company(value: string ) {
		this.company = value;
	}

}
