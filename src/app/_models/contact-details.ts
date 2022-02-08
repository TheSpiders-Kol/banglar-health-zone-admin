import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject
export class ContactDetails{
    @JsonProperty('address1', String, true)
    private address1 : string = undefined!;

    @JsonProperty('address2', String, true)
    private address2: string = undefined!;

    @JsonProperty('city', String, true)
    private city:string = undefined!;

    @JsonProperty('state', String, true)
    private state:string = undefined!;

    @JsonProperty('country', String, true)
    private country:string = undefined!;

    @JsonProperty('pin', Number, true)
    private pin:number = undefined!;

    @JsonProperty('email', String, true)
    private email:string = undefined!;

    @JsonProperty('mobile', Number, true)
    private mobile:number = undefined!;

    /**
     * Getter $address1
     * @return {string}
     */
	public get $address1(): string {
		return this.address1;
	}

    /**
     * Getter $address2
     * @return {string}
     */
	public get $address2(): string {
		return this.address2;
	}

    /**
     * Getter $city
     * @return {string}
     */
	public get $city(): string {
		return this.city;
	}

    /**
     * Getter $state
     * @return {string}
     */
	public get $state(): string {
		return this.state;
	}

    /**
     * Getter $country
     * @return {string}
     */
	public get $country(): string {
		return this.country;
	}

    /**
     * Getter $pin
     * @return {number}
     */
	public get $pin(): number {
		return this.pin;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $mobile
     * @return {number}
     */
	public get $mobile(): number {
		return this.mobile;
	}

    /**
     * Setter $address1
     * @param {string} value
     */
	public set $address1(value: string) {
		this.address1 = value;
	}

    /**
     * Setter $address2
     * @param {string} value
     */
	public set $address2(value: string) {
		this.address2 = value;
	}

    /**
     * Setter $city
     * @param {string} value
     */
	public set $city(value: string) {
		this.city = value;
	}

    /**
     * Setter $state
     * @param {string} value
     */
	public set $state(value: string) {
		this.state = value;
	}

    /**
     * Setter $country
     * @param {string} value
     */
	public set $country(value: string) {
		this.country = value;
	}

    /**
     * Setter $pin
     * @param {number} value
     */
	public set $pin(value: number) {
		this.pin = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $mobile
     * @param {number} value
     */
	public set $mobile(value: number) {
		this.mobile = value;
	}


}
