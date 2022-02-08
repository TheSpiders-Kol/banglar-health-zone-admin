import {JsonObject, JsonProperty} from "json2typescript";
import { ContactDetails } from './contact-details';

@JsonObject
export class User {

	@JsonProperty('user-id', Number, true)
	private userId: number= undefined!;

	@JsonProperty('parent-id', Number, true)
    private parentId : number = undefined!;

    @JsonProperty('type', String, true)
    private userType : string = undefined!;

	@JsonProperty('user-name', String, true)
	private userName: string = undefined!;

    @JsonProperty('password', String, true)
	private password : string = undefined!;

	@JsonProperty('enabled', Boolean, true)
	private isEnabled : boolean = undefined!;

	@JsonProperty('first-name', String, true)
	private firstName : string = undefined!;

	@JsonProperty('last-name', String, true)
	private lastName : string = undefined!;

	@JsonProperty('middle-name', String , true)
	private middleName : string = undefined!;

    @JsonProperty('sex', String , true)
	private sex : string = undefined!;

    @JsonProperty('dob', String , true)
	private dob : string = undefined!;

	@JsonProperty('user-contact', ContactDetails, true)
	private contactDetails : ContactDetails = undefined!;


    /**
     * Getter $userId
     * @return {number}
     */
	public get $userId(): number {
		return this.userId;
	}

    /**
     * Getter $parentId
     * @return {number }
     */
	public get $parentId(): number  {
		return this.parentId;
	}

    /**
     * Getter $userType
     * @return {string }
     */
	public get $userType(): string  {
		return this.userType;
	}

    /**
     * Getter $userName
     * @return {string }
     */
	public get $userName(): string  {
		return this.userName;
	}

    /**
     * Getter $password
     * @return {string }
     */
	public get $password(): string  {
		return this.password;
	}

    /**
     * Getter $isEnabled
     * @return {boolean }
     */
	public get $isEnabled(): boolean  {
		return this.isEnabled;
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
     * Setter $userId
     * @param {number} value
     */
	public set $userId(value: number) {
		this.userId = value;
	}

    /**
     * Setter $parentId
     * @param {number } value
     */
	public set $parentId(value: number ) {
		this.parentId = value;
	}

    /**
     * Setter $userType
     * @param {string } value
     */
	public set $userType(value: string ) {
		this.userType = value;
	}

    /**
     * Setter $userName
     * @param {string } value
     */
	public set $userName(value: string ) {
		this.userName = value;
	}

    /**
     * Setter $password
     * @param {string } value
     */
	public set $password(value: string ) {
		this.password = value;
	}

    /**
     * Setter $isEnabled
     * @param {boolean } value
     */
	public set $isEnabled(value: boolean ) {
		this.isEnabled = value;
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

}

