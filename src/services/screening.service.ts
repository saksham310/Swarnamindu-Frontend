const mockPatient = [{
    name: "qwsqxwsx",
    id: "LDT-5514",
    age: "2 years 0 months",
    sex: "Female",
    phone: "1234567890",
    dosesAdministered: 4,
    totalDoses: 12,
    lastDoseDate: "1/5/2026",
}];

export const getScreeningInfo = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return mockPatient.find((patient) => patient.id === id);
}