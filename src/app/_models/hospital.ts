import {JsonObject, JsonProperty} from "json2typescript";
import { ContactDetails } from './contact-details';
import { HealthServices } from "./health-services";
import { InsuranceCompany } from "./insurance-company";

@JsonObject("Hospital")
export class Hospital {

  @JsonProperty('id', Number, true)
	private userId: number= undefined!;

  @JsonProperty('active', Boolean, true)
	private active: boolean= undefined!;

  @JsonProperty('address', String, true)
	private address: string= undefined!;

  @JsonProperty('contactNumber', String, true)
	private contactNumber: string= undefined!;

  @JsonProperty('coronaHospital', Boolean, true)
	private coronaHospital: boolean= undefined!;

  @JsonProperty('district', String, true)
	private district: string= undefined!;

  @JsonProperty('districtCode', String, true)
	private districtCode: string= undefined!;

  @JsonProperty('name', String, true)
	private name: string= undefined!;

  @JsonProperty('noOfHouseDoctors', Number, true)
	private noOfHouseDoctors: number= undefined!;

  @JsonProperty('noOfVisitingConsultant', Number, true)
	private noOfVisitingConsultant: number= undefined!;

  @JsonProperty('registeredEmail', String, true)
	private registeredEmail: string= undefined!;

  @JsonProperty('type', String, true)
	private type: string= undefined!;

  @JsonProperty('services', [HealthServices], true)
	private services: HealthServices[]= undefined!;

  @JsonProperty('supportedInsurance', [InsuranceCompany], true)
	private supportedInsurance: InsuranceCompany[]= undefined!;

  @JsonProperty('sanctionedBedStrength', Number, true)
	private sanctionedBedStrength: number= undefined!;

  @JsonProperty('pin', Number, true)
	private pin: number= undefined!;


    /**
     * Getter $userId
     * @return {number}
     */
	public get $userId(): number {
		return this.userId;
	}

    /**
     * Getter $active
     * @return {boolean}
     */
	public get $active(): boolean {
		return this.active;
	}

    /**
     * Getter $address
     * @return {string}
     */
	public get $address(): string {
		return this.address;
	}

    /**
     * Getter $contactNumber
     * @return {string}
     */
	public get $contactNumber(): string {
		return this.contactNumber;
	}

    /**
     * Getter $coronaHospital
     * @return {boolean}
     */
	public get $coronaHospital(): boolean {
		return this.coronaHospital;
	}

    /**
     * Getter $district
     * @return {string}
     */
	public get $district(): string {
		return this.district;
	}

    /**
     * Getter $districtCode
     * @return {string}
     */
	public get $districtCode(): string {
		return this.districtCode;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $noOfHouseDoctors
     * @return {number}
     */
	public get $noOfHouseDoctors(): number {
		return this.noOfHouseDoctors;
	}

    /**
     * Getter $noOfVisitingConsultant
     * @return {number}
     */
	public get $noOfVisitingConsultant(): number {
		return this.noOfVisitingConsultant;
	}

    /**
     * Getter $registeredEmail
     * @return {string}
     */
	public get $registeredEmail(): string {
		return this.registeredEmail;
	}

    /**
     * Getter $type
     * @return {string}
     */
	public get $type(): string {
		return this.type;
	}

    /**
     * Getter $services
     * @return {HealthServices[]}
     */
	public get $services(): HealthServices[] {
		return this.services;
	}

    /**
     * Getter $supportedInsurance
     * @return {InsuranceCompany[]}
     */
	public get $supportedInsurance(): InsuranceCompany[] {
		return this.supportedInsurance;
	}

    /**
     * Getter $sanctionedBedStrength
     * @return {number}
     */
	public get $sanctionedBedStrength(): number {
		return this.sanctionedBedStrength;
	}

    /**
     * Getter $pin
     * @return {number}
     */
	public get $pin(): number {
		return this.pin;
	}

    /**
     * Setter $userId
     * @param {number} value
     */
	public set $userId(value: number) {
		this.userId = value;
	}

    /**
     * Setter $active
     * @param {boolean} value
     */
	public set $active(value: boolean) {
		this.active = value;
	}

    /**
     * Setter $address
     * @param {string} value
     */
	public set $address(value: string) {
		this.address = value;
	}

    /**
     * Setter $contactNumber
     * @param {string} value
     */
	public set $contactNumber(value: string) {
		this.contactNumber = value;
	}

    /**
     * Setter $coronaHospital
     * @param {boolean} value
     */
	public set $coronaHospital(value: boolean) {
		this.coronaHospital = value;
	}

    /**
     * Setter $district
     * @param {string} value
     */
	public set $district(value: string) {
		this.district = value;
	}

    /**
     * Setter $districtCode
     * @param {string} value
     */
	public set $districtCode(value: string) {
		this.districtCode = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $noOfHouseDoctors
     * @param {number} value
     */
	public set $noOfHouseDoctors(value: number) {
		this.noOfHouseDoctors = value;
	}

    /**
     * Setter $noOfVisitingConsultant
     * @param {number} value
     */
	public set $noOfVisitingConsultant(value: number) {
		this.noOfVisitingConsultant = value;
	}

    /**
     * Setter $registeredEmail
     * @param {string} value
     */
	public set $registeredEmail(value: string) {
		this.registeredEmail = value;
	}

    /**
     * Setter $type
     * @param {string} value
     */
	public set $type(value: string) {
		this.type = value;
	}

    /**
     * Setter $services
     * @param {HealthServices[]} value
     */
	public set $services(value: HealthServices[]) {
		this.services = value;
	}

    /**
     * Setter $supportedInsurance
     * @param {InsuranceCompany[]} value
     */
	public set $supportedInsurance(value: InsuranceCompany[]) {
		this.supportedInsurance = value;
	}

    /**
     * Setter $sanctionedBedStrength
     * @param {number} value
     */
	public set $sanctionedBedStrength(value: number) {
		this.sanctionedBedStrength = value;
	}

    /**
     * Setter $pin
     * @param {number} value
     */
	public set $pin(value: number) {
		this.pin = value;
	}


}
