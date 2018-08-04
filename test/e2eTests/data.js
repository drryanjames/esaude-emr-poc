/**
 * A common place for data used during tests.
 * This file defines data for users, patients,
 * providers, programs, and much more. If you have
 * data that needs to be shared across tests consider
 * placing it here.
 */

// Generates a patient identifier
const generatePatientIdentifier = () => {
  // Generates a random number between [0,9]
  const g = () => Math.floor(Math.random() * Math.floor(9));

  // Returns a randomly generated identifier of the format
  // "PPDDUUSS/AA/NNNNN" where each is a number between [0, 9]
  return `${g()}${g()}${g()}${g()}${g()}${g()}${g()}${g()}/${g()}${g()}/${g()}${g()}${g()}${g()}${g()}`;
};

// Defines the uuids of roles
const Roles = {
  anonymous: "774b2af3-6437-4e5a-a310-547554c7c65c",
  authenticated: "f7fd42ef-880e-40c5-972d-e4ae7c990de2",
  clinician: "da19fe39-5582-11e8-8ae4-080027d447dc",
  dataAssistant: "da19fe9c-5582-11e8-8ae4-080027d447dc",
  dataManager: "da19ff00-5582-11e8-8ae4-080027d447dc",
  pocClinician:"a596b3b5-7f6b-4929-bc29-e4e39e5b7dfd",
  pocClinicianAdmin: "263301c4-bdec-4316-b7f9-711b2edbbdfb",
  pocLabTechnician: "c39b9b59-f423-4b2a-a5ef-7a1ec5e331c2",
  pocLabTechnicianAdmin: "f96776cd-0ec3-4093-a590-43596cf80f6e",
  pocNurse: "c983606a-4f52-4980-8241-eb55d6086200",
  pocPharmacist: "d5a81efa-d669-471a-9a24-198893a24163",
  pocPharmacistAdmin: "5a9ef76f-c130-4bfc-a8ec-2065e5913553",
  pocPharmacistIndependent: "63392614-9af7-4671-8997-eab7622c4936",
  pocPharmacistIndependentAdmin: "45b6b1ea-de11-414c-96fc-5c162f0cba1b",
  pocPsychologistSocialWorker: "a1411e6d-4a31-4fc3-b9a1-535c04139803",
  pocPsychologistSocialWorkerAdmin: "54116757-e8d4-421a-bbb5-e40c200a9703",
  pocReceptionist: "6114cb7e-9418-49ab-b68a-fbcba6f19257",
  pocReceptionistAdmin: "2c8570a7-622a-4547-9e74-e9c43269ce55",
  pocUser: "0228627b-ea85-485f-bd08-6e35d57968c2",
  privilegeLevelFull: "ab2160f6-0941-430c-9752-6714353fbd3c",
  provider: "8d94f280-c2cc-11de-8d13-0010c6dffd0f",
  systemDeveloper: "8d94f852-c2cc-11de-8d13-0010c6dffd0f",
};

const patientIdType = {
  nidServicoTarv: "e2b966d0-1d5f-11e0-b929-000c29ad1d07",
};

// Data useful for tests
module.exports = {
  // Data about each user
  users: {

    // The admin user
    admin: {
      username: 'admin',
      password: 'eSaude123',
      person: {
        names: [
          {
            givenName: "AdminFirstName",
            familyName: "AdminLastName"
          }
        ],
        gender: 'F',
      },
    },

    // A user with a username that is not expected to be in the database
    invalidUsername: {
      username: 'invalidUsername',
      password: 'eSaude123',
    },

    // The admin user with an invalid password
    invalidPassword: {
      username: 'admin',
      password: 'thisIsInvalid',
    },

    // A user that is not a provider
    // Is not listed in Providers | Manage Providers (Not just dependent on the Provider Role)
    nonProvider: {
      username: 'nonProvider',
      //must have a digit in a user password
      password: 'testPass1',
      person: {
        names: [
          {
            givenName: "NonProviderFirstName",
            familyName: "NonProviderLastName"
          }
        ],
        gender: 'M',
      },
			roles: [
        //not the provider it's looking for...
        //Roles.provider
        //Roles.anonymous,
        //Roles.authenticated,
        //Roles.clinician,
        //Roles.systemDeveloper,
			],
    },
  },

  // Utilities for generating provider related data
  providers: {
    // Generates JSON that can be used to make
    // the user a provider
    generateJsonFromUser: function (user) {
      return {
        person: user.person.uuid,
        identifier: user.systemId
      };
    },
  },

  // Uuids for programs
  programs: {
    SERVICO_TARV_CUIDADO: '7b2e4a0a-d4eb-4df7-be30-78ca4b28ca99',
    SERVICO_TARV_TRATAMENTO: 'efe2481f-9e75-4515-8d5a-86bfde2b5ad3',
    TUBERCULOSE: '142d23c4-c29f-4799-8047-eb3af911fd21',
    CCR: '611f0a6b-68b7-4de7-bc7a-fd021330eef8',
    CCU: '8954a750-079e-4bf2-940c-b4f71ea8bb15',
    PTV_ETV: '06057245-ca21-43ab-a02f-e861d7e54593',
    CLINICA_MOVEL: 'fb455824-fb53-45ab-bf5a-a81482ff6848',
  },
/*
  programDesc: {
    SERVICO_TARV_CUIDADO: {
    }
  }
*/
  /*https://github.com/openmrs/openmrs-module-webservices.rest/blob/639ad0273ee0c086cd823e3c118e657ec4f0b09e/omod-1.8/src/main/java/org/openmrs/module/webservices/rest/web/v1_0/resource/openmrs1_8/PatientResource1_8.java#L168*/
  patients: {
    patient1: {
      "identifiers": [
        {
          "identifier": "30532063/03/33743",
          "identifierType": patientIdType.nidServicoTarv, // NID (SERVICO TARV)
          "location": "4c34a53f-b0c2-4315-9829-1a07f76e10a8", // Zumba
          "preferred": true
        }
      ],
      person: {
        names: [
          {
            //Cannot have digits in names!
            givenName: "PatientOneFirstName",
            familyName: "PatientOneLastName"
          }
        ],
        gender: 'M',
        birthdate: (new Date('2002-10-2')).toISOString(),
      },
    },

    patient2: {
      "identifiers": [
        {
          "identifier": "88654738/73/84441",
          "identifierType": patientIdType.nidServicoTarv, // NID (SERVICO TARV)
          "location": "4c34a53f-b0c2-4315-9829-1a07f76e10a8", // Zumba
          "preferred": true
        }
      ],
      person: {
        names: [
          {
            givenName: "PatientTwoFirstName",
            familyName: "PatientTwoLastName"
          }
        ],
        gender: 'F',
        birthdate: (new Date('1994-3-19')).toISOString(),
      },
    },

    patient3: {
      "identifiers": [
        {
          "identifier1": "12345678/22/987654",
          "identifier2": "452631256M",
          "identifier3": "12345678/22/98989",
          "alternativeIdentifier1": "12345",
          "alternativeIdentifier2": "234567",
          "preferred": true
        }
      ],
      person: {
        names: [
          {
            givenName: "Malocy",
            familyName: "Ladon"
          }
        ],
        gender: 'F',
        birthdate: "24/06/1995",
      },
      contacts: {
        country: "Mocambique",
        province: "Nampula",
        district: "Erati",
        administrativePost: "Alua",
        locality: "Sede",
        neighborhood: "Longuene",
        cell: "A",
        street: "567",
        reference: "",
        phoneNumber1: "845695235",
        phoneNumber2: "845625123",
        provenience: "string:e1daca74-1d5f-11e0-b929-000c29ad1d07", // CLINICA MOVEL
      },
      tests: {
        testType: "string:e1d800dc-1d5f-11e0-b929-000c29ad1d07", // TESTE RÁPIDO HIV
        testDate: '01/01/1018',
        testResult: "string:e1da2600-1d5f-11e0-b929-000c29ad1d07", // POSITIVO
      }
    },
  },

  clinicalData: {
    vitals: [
      {
        temperature: '37',
        weight: '60',
        height: '152',
        systolicBloodPressure: '110',
        diastolicBloodPressure: '70',
        cardiacFrequency: '108',
        respiratoryRate: '16',
      }
    ]
  },

  deathData: {
    details: [
      {
        reason: "TUBUCULOSE",
        date: "01/01/2018"
      },
      {
        reason: "HEPATITE",
        date: "06/05/2018"
      }
    ]
  }
};
