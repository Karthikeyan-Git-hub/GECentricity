import { System } from "../system";

export class UserDetailExternal {
    activationDate: Date;
    activationDateSpecified: boolean;
    authorizations: any;
    authorizedLocationOfCares: any;
    currentLocation: number;
    currentLocationDetail: any;
    currentLocationSpecified: boolean;
    data2000: any;
    deaNumber: any;
    errorDetails: any;
    expirationDate: Date;
    expirationDateSpecified: boolean;
    firstName: string;
    globalID: number;
    globalIDSpecified: boolean;
    groupList: any;
    homeLocation: number;
    homeLocationDetail: any;
    homeLocationSpecified: boolean;
    isrespprov: number;
    isrespprovSpecified: boolean;
    jobTitle: number;
    jobTitleDetail: any;
    jobTitleSpecified: boolean;
    lastLoginDate: Date;
    lastLoginDateSpecified: boolean;
    lastName: string;
    lastPasswordChange: Date;
    lastPasswordChangeSpecified: boolean;
    licenseNumber: any;
    loginAttempts: number;
    loginAttemptsSpecified: boolean;
    loginName: any;
    memberID: any;
    middleName: string;
    mqicUserName: any;
    npi: any;
    orgName: any;
    phone: any;
    pidList: any;
    pmpRoleID: number;
    pmpRoleIDSpecified: boolean;
    pmpRoleName: any;
    prescriberID: any;
    providerID: number;
    providerIDSpecified: boolean;
    result: number;
    resultSpecified: boolean;
    roleList: any;
    specialty: number;
    specialtyDetail: any;
    specialtySpecified: boolean;
    spi: any;
    stateName: any;
    status: any;
    subscriptionureg: any;
    tocElectronicAddress: any;
    updateType: any;
    upin: any;

    static fromExternal(
        _obj: any
    ): UserDetailExternal {
        let userDetailExternal = new UserDetailExternal();

        userDetailExternal.activationDate = System.toDate(_obj.activationDate);
        userDetailExternal.activationDateSpecified = _obj.activationDateSpecified;
        userDetailExternal.authorizations = _obj.authorizations;
        userDetailExternal.authorizedLocationOfCares = _obj.authorizedLocationOfCares;
        userDetailExternal.currentLocation = _obj.currentLocation;
        userDetailExternal.currentLocationDetail = _obj.currentLocationDetail;
        userDetailExternal.currentLocationSpecified = _obj.currentLocationSpecified;
        userDetailExternal.data2000 = _obj.data2000;
        userDetailExternal.deaNumber = _obj.deaNumber;
        userDetailExternal.errorDetails = _obj.errorDetails;
        userDetailExternal.expirationDate = System.toDate(_obj.expirationDate);
        userDetailExternal.expirationDateSpecified = _obj.expirationDateSpecified;
        userDetailExternal.firstName = _obj.firstName;
        userDetailExternal.globalID = _obj.globalID;
        userDetailExternal.globalIDSpecified = _obj.globalIDSpecified;
        userDetailExternal.groupList = _obj.groupList;
        userDetailExternal.homeLocation = _obj.homeLocation;
        userDetailExternal.homeLocationDetail = _obj.homeLocationDetail;
        userDetailExternal.homeLocationSpecified = _obj.homeLocationSpecified;
        userDetailExternal.isrespprov = _obj.isrespprov;
        userDetailExternal.isrespprovSpecified = _obj.isrespprovSpecified;
        userDetailExternal.jobTitle = _obj.jobTitle;
        userDetailExternal.jobTitleDetail = _obj.jobTitleDetail;
        userDetailExternal.jobTitleSpecified = _obj.jobTitleSpecified;
        userDetailExternal.lastLoginDate = System.toDate(_obj.lastLoginDate);
        userDetailExternal.lastLoginDateSpecified = _obj.lastLoginDateSpecified;
        userDetailExternal.lastName = _obj.lastName;
        userDetailExternal.lastPasswordChange = System.toDate(_obj.lastPasswordChange);
        userDetailExternal.lastPasswordChangeSpecified = _obj.lastPasswordChangeSpecified;
        userDetailExternal.licenseNumber = _obj.licenseNumber;
        userDetailExternal.loginAttempts = _obj.loginAttempts;
        userDetailExternal.loginAttemptsSpecified = _obj.loginAttemptsSpecified;
        userDetailExternal.loginName = _obj.loginName;
        userDetailExternal.memberID = _obj.memberID;
        userDetailExternal.middleName = _obj.middleName;
        userDetailExternal.mqicUserName = _obj.mqicUserName;
        userDetailExternal.npi = _obj.npi;
        userDetailExternal.orgName = _obj.orgName;
        userDetailExternal.phone = _obj.phone;
        userDetailExternal.pidList = _obj.pidList;
        userDetailExternal.pmpRoleID = _obj.pmpRoleID;
        userDetailExternal.pmpRoleIDSpecified = _obj.pmpRoleIDSpecified;
        userDetailExternal.pmpRoleName = _obj.pmpRoleName;
        userDetailExternal.prescriberID = _obj.prescriberID;
        userDetailExternal.providerID = _obj.providerID;
        userDetailExternal.providerIDSpecified = _obj.providerIDSpecified;
        userDetailExternal.result = _obj.result;
        userDetailExternal.resultSpecified = _obj.resultSpecified;
        userDetailExternal.roleList = _obj.roleList;
        userDetailExternal.specialty = _obj.specialty;
        userDetailExternal.specialtyDetail = _obj.specialtyDetail;
        userDetailExternal.specialtySpecified = _obj.specialtySpecified;
        userDetailExternal.spi = _obj.spi;
        userDetailExternal.stateName = _obj.stateName;
        userDetailExternal.status = _obj.status;
        userDetailExternal.subscriptionureg = _obj.subscriptionureg;
        userDetailExternal.tocElectronicAddress = _obj.tocElectronicAddress;
        userDetailExternal.updateType = _obj.updateType;
        userDetailExternal.upin = _obj.upin;

        return userDetailExternal;
    }

}