import { atom } from "recoil";

export const mdwPublicState = atom({
    key: 'mdwPublicState',
    default: false,
});

export const loadingModalState = atom({
    key: 'loadingModalState',
    default: false,
});

export const assignLicenseModalState = atom({
    key: 'assignLicenseModalState',
    default: false,
});

export const createWarrantModalState = atom({
    key: 'createWarrantModalState',
    default: false,
});

export const extendWarrantModalState = atom({
    key: 'extendWarrantModalState',
    default: false,
});

export const hireOfficerModalState = atom({
    key: 'hireOfficerModalState',
    default: false,
});

export const licenseDataState = atom({
    key: 'licenseDataState',
    default: {} as any,
});

export const profileIdState = atom({
    key: 'profileIdState',
    default: "",
});

export const licenseTypeState = atom({
    key: 'licenseTypeState',
    default: "",
});

export const propertyDataState = atom({
    key: 'propertyDataState',
    default: [],
});

export const filteredPropertyDataState = atom({
    key: 'filteredPropertyDataState',
    default: [],
});

export const businessDataState = atom({
    key: 'businessDataState',
    default: [],
});

export const filteredBusinessDataState = atom({
    key: 'filteredBusinessDataState',
    default: [],
});

export const employeeDataState = atom({
    key: 'employeeDataState',
    default: [],
});

export const employeeCountState = atom({
    key: 'employeeCountState',
    default: 0,
});

export const evidenceSearchDataState = atom({
    key: 'evidenceSearchDataState',
    default: [],
});

export const filteredEvidenceSearchDataState = atom({
    key: 'filteredEvidenceSearchDataState',
    default: [],
});

export const chargesDataState = atom({
    key: 'chargesDataState',
    default: [],
});

export const warrantsDataState = atom({
    key: 'warrantsDataState',
    default: [],
});

export const filteredWarrantsDataState = atom({
    key: 'filteredWarrantsDataState',
    default: [],
});

export const staffDataState = atom({
    key: 'staffDataState',
    default: [] as any,
});

export const filteredStaffDataState = atom({
    key: 'filteredStaffDataState',
    default: [],
});

export const mdwFirstNameState = atom({
    key: 'mdwFirstNameState',
    default: "",
});

export const mdwLastNameState = atom({
    key: 'mdwLastNameState',
    default: "",
});

export const mdwRankState = atom({
    key: 'mdwRankState',
    default: "",
});

export const mdwRankLabelState = atom({
    key: 'mdwRankLabelState',
    default: "",
});

export const mdwCallsignState = atom({
    key: 'mdwCallsignState',
    default: "",
});

export const incidentsSearchDataState = atom({
    key: 'incidentsSearchDataState',
    default: [],
});

export const filteredIncidentsSearchDataState = atom({
    key: 'filteredIncidentsSearchDataState',
    default: [],
});

export const incidentsEmsSearchDataState = atom({
    key: 'incidentsEmsSearchDataState',
    default: [],
});

export const filteredIncidentsEmsSearchDataState = atom({
    key: 'filteredIncidentsEmsSearchDataState',
    default: [],
});

export const incidentIdState = atom({
    key: 'incidentIdState',
    default: 0,
});

export const evidenceState = atom({
    key: 'evidenceState',
    default: [],
});

export const officersInvolvedState = atom({
    key: 'officersInvolvedState',
    default: [],
});

export const emsInvolvedState = atom({
    key: 'emsInvolvedState',
    default: [],
});

export const personsInvolvedState = atom({
    key: 'personsInvolvedState',
    default: [],
});

export const criminalsState = atom({
    key: 'criminalsState',
    default: [],
});

export const curChargesState = atom({
    key: 'curChargesState',
    default: [],
});

export const officersState = atom({
    key: 'officersState',
    default: [],
});

export const filteredOfficersState = atom({
    key: 'filteredOfficersState',
    default: [],
});

export const emsState = atom({
    key: 'emsState',
    default: [],
});

export const filteredEmsState = atom({
    key: 'filteredEmsState',
    default: [],
});

export const assignLoadingState = atom({
    key: 'assignLoadingState',
    default: false,
});

export const assignEvidenceState = atom({
    key: 'assignEvidenceState',
    default: false,
});

export const assignOfficerState = atom({
    key: 'assignOfficerState',
    default: false,
});

export const assignEmsState = atom({
    key: 'assignEmsState',
    default: false,
});

export const assignPersonState = atom({
    key: 'assignPersonState',
    default: false,
});

export const addCriminalState = atom({
    key: 'addCriminalState',
    default: false,
});

export const addChargeState = atom({
    key: 'addChargeState',
    default: false,
});

export const chargeCIDState = atom({
    key: 'chargeCIDState',
    default: "",
});

export const curJobState = atom({
    key: 'curJobState',
    default: "",
});