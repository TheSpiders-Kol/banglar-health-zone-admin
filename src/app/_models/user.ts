import {JsonObject, JsonProperty} from "json2typescript";
import { ContactDetails } from './contact-details';

@JsonObject("User")
export class User {

	@JsonProperty('userId', Number, true)
	private userId: number= undefined!;

	@JsonProperty('userName', String, true)
	private userName: string = undefined!;

    @JsonProperty('subscripionExpiry', String, true)
	private subscripionExpiry : string = undefined!;

	@JsonProperty('authority', String, true)
	private authority : String = undefined!;

	@JsonProperty('firstName', String, true)
	private firstName : string = undefined!;

	@JsonProperty('lastName', String, true)
	private lastName : string = undefined!;

	@JsonProperty('middleName', String , true)
	private middleName : string = undefined!;

    @JsonProperty('sex', String , true)
	private sex : string = undefined!;

    @JsonProperty('dob', String , true)
	private dob : string = undefined!;

	@JsonProperty('contactDetails', ContactDetails, true)
	private contactDetails : ContactDetails = undefined!;

  @JsonProperty('enabled', Boolean, true)
	private enabled : Boolean = undefined!;

  @JsonProperty('otp', String , true)
	private otp : string = undefined!;

  @JsonProperty('trial', Boolean, true)
	private trial : Boolean = undefined!;

  @JsonProperty('hasValidSubscription', Boolean, true)
	private hasValidSubscription : Boolean = undefined!;

    /**
     * Getter $userId
     * @return {number}
     */
	public get $userId(): number {
		return this.userId;
	}

    /**
     * Getter $userName
     * @return {string }
     */
	public get $userName(): string  {
		return this.userName;
	}

    /**
     * Getter $subscripionExpiry
     * @return {string }
     */
	public get $subscripionExpiry(): string  {
		return this.subscripionExpiry;
	}

    /**
     * Getter $authority
     * @return {String }
     */
	public get $authority(): String  {
		return this.authority;
	}

    /**
     * Getter $firstName
     * @return {string }
     */
	public get $firstName(): string  {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string }
     */
	public get $lastName(): string  {
		return this.lastName;
	}

    /**
     * Getter $middleName
     * @return {string }
     */
	public get $middleName(): string  {
		return this.middleName;
	}

    /**
     * Getter $sex
     * @return {string }
     */
	public get $sex(): string  {
		return this.sex;
	}

    /**
     * Getter $dob
     * @return {string }
     */
	public get $dob(): string  {
		return this.dob;
	}

    /**
     * Getter $contactDetails
     * @return {ContactDetails }
     */
	public get $contactDetails(): ContactDetails  {
		return this.contactDetails;
	}

    /**
     * Getter $enabled
     * @return {Boolean }
     */
	public get $enabled(): Boolean  {
		return this.enabled;
	}

    /**
     * Getter $otp
     * @return {string }
     */
	public get $otp(): string  {
		return this.otp;
	}

    /**
     * Getter $trial
     * @return {Boolean }
     */
	public get $trial(): Boolean  {
		return this.trial;
	}

    /**
     * Getter $hasValidSubscription
     * @return {Boolean }
     */
	public get $hasValidSubscription(): Boolean  {
		return this.hasValidSubscription;
	}

    /**
     * Setter $userId
     * @param {number} value
     */
	public set $userId(value: number) {
		this.userId = value;
	}

    /**
     * Setter $userName
     * @param {string } value
     */
	public set $userName(value: string ) {
		this.userName = value;
	}

    /**
     * Setter $subscripionExpiry
     * @param {string } value
     */
	public set $subscripionExpiry(value: string ) {
		this.subscripionExpiry = value;
	}

    /**
     * Setter $authority
     * @param {String } value
     */
	public set $authority(value: String ) {
		this.authority = value;
	}

    /**
     * Setter $firstName
     * @param {string } value
     */
	public set $firstName(value: string ) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string } value
     */
	public set $lastName(value: string ) {
		this.lastName = value;
	}

    /**
     * Setter $middleName
     * @param {string } value
     */
	public set $middleName(value: string ) {
		this.middleName = value;
	}

    /**
     * Setter $sex
     * @param {string } value
     */
	public set $sex(value: string ) {
		this.sex = value;
	}

    /**
     * Setter $dob
     * @param {string } value
     */
	public set $dob(value: string ) {
		this.dob = value;
	}

    /**
     * Setter $contactDetails
     * @param {ContactDetails } value
     */
	public set $contactDetails(value: ContactDetails ) {
		this.contactDetails = value;
	}

    /**
     * Setter $enabled
     * @param {Boolean } value
     */
	public set $enabled(value: Boolean ) {
		this.enabled = value;
	}

    /**
     * Setter $otp
     * @param {string } value
     */
	public set $otp(value: string ) {
		this.otp = value;
	}

    /**
     * Setter $trial
     * @param {Boolean } value
     */
	public set $trial(value: Boolean ) {
		this.trial = value;
	}

    /**
     * Setter $hasValidSubscription
     * @param {Boolean } value
     */
	public set $hasValidSubscription(value: Boolean ) {
		this.hasValidSubscription = value;
	}

}

