export const pullingInterval = 10000

export const recordingDuration = {
    walkaround: {
        INTRO: 15,
        EXTERIOR: 30,
        INTERIOR: 30,
        OUTRO: 15,
    },
    inspection: 120,
    greeting: 60,
    dealership: 15,
}

export const steps = {
    walkaround: {
        INTRO: 'Intro',
        EXTERIOR: 'Exterior',
        INTERIOR: 'Interior',
        OUTRO: 'Outro',
    },
    inspection: 'Inspection',
    greeting: 'Greeting',
    dealership: {
        BUILDING: 'Building',
        CAR_LOT: 'Car Lot',
        SHOWROOM: 'Showroom',
        SERVICE_BAYS: 'Service Bays',
    },
}

export const templates = {
    walkaround: {
        template: 'CT_Walkaround',
        target: 'HD_60s',
    },
    inspection: {
        template: 'CT_Inspection',
        target: 'HD_60s',
    },
    greeting: {
        template: 'CT_Greeting',
        target: 'HD_60s',
    },
}

export const s3Options = {
    bucket: 'ct-sales-studio',
    region: 'us-west-2',
    accessKey: 'AKIAVMKO6NDINYFA2UEP',
    secretKey: '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',
    successActionStatus: 201,
}
