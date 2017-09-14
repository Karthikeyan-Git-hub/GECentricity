/// <reference path="$mdobject.objectbase.d.ts" />
declare namespace $mdObject.Interfaces {
    interface IImmunization {
        immunizationId: string;
        immunizationGroupId: string;
        vaccineGroupName: string;
        vaccineName: string;
        medicalDisplayName: string;
        series: string;
        wasGiven: string;
        reasonNotGiven: string;
        historical: string;
        historicalSource: string;
        vfcElegibility: string;
        ddid: string;
        dnid: string;
        gpi: string;
        kdc: string;
        ndc: string;
        cvxCode: string;
        doseAmount: string;
        dosageUnitOfMeasure: string;
        route: string;
        routeCode: string;
        site: string;
        siteCode: string;
        manufacturer: string;
        manufacturerCode: string;
        lotNumber: string;
        expirationDate: string;
        visPublishedDate: string;
        administeredByName: string;
        administeredDate: string;
        administeredDateType: string;
        administeredComments: string;
        advReactionDateTime: string;
        advReactionDateTimeType: string;
        advReactionComments: string;
        advReactionCmtByName: string;
        signed: string;
        signedByName: string;
        signedDate: string;
        reasonRemoved: string;
        stopDate: string;
        reasonNotGivenMedical: string;
        reasonNotGivenMedicalDetail: string;
        save: () => void;
    }
}
declare namespace $mdObject {
    class Immunization extends ObjectBase implements Interfaces.IImmunization {
        private isNew;
        private _value;
        constructor(value: string);
        immunizationId: string;
        immunizationGroupId: string;
        vaccineGroupName: string;
        vaccineName: string;
        medicalDisplayName: string;
        series: string;
        wasGiven: string;
        reasonNotGiven: string;
        historical: string;
        historicalSource: string;
        vfcElegibility: string;
        ddid: string;
        dnid: string;
        gpi: string;
        kdc: string;
        ndc: string;
        cvxCode: string;
        doseAmount: string;
        dosageUnitOfMeasure: string;
        route: string;
        routeCode: string;
        site: string;
        siteCode: string;
        manufacturer: string;
        manufacturerCode: string;
        lotNumber: string;
        expirationDate: string;
        visPublishedDate: string;
        administeredByName: string;
        administeredDate: string;
        administeredDateType: string;
        administeredComments: string;
        advReactionDateTime: string;
        advReactionDateTimeType: string;
        advReactionComments: string;
        advReactionCmtByName: string;
        signed: string;
        signedByName: string;
        signedDate: string;
        reasonRemoved: string;
        stopDate: string;
        reasonNotGivenMedical: string;
        reasonNotGivenMedicalDetail: string;
        save: () => void;
        toMelString: () => any;
        private validateAdd;
        private toStringAdd;
    }
}
