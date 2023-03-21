export const HOST = 'https://amictf-backend.herokuapp.com/v1';

export const REQUESTS = {
    LOGIN: 'LOGIN',
    REGISTRATION: 'REGISTRATION',
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    CONTACT_US: 'CONTACT_US',
};

export const ALL_NAMES = {
    EMAIL: 'email',
    PASSWORD: 'password',
    USERNAME: 'username',
    CONFIRMED_PASSWORD: 'confirmPassword',
    CURRENT_PASSWORD: 'currentPassword',
    NEW_PASSWORD: 'newPassword',
    FULL_NAME: 'fullName',
    BODY: 'body',
};

export const REQUESTS_BODY_NAMES = {
    [REQUESTS.LOGIN]: {
        EMAIL: 'email',
        PASSWORD: 'password',
    },
    [REQUESTS.REGISTRATION]: {
        EMAIL: 'email',
        USERNAME: 'username',
        PASSWORD: 'password',
        CONFIRMED_PASSWORD: 'confirmPassword',
    },
    [REQUESTS.CHANGE_NAME]: {
        USERNAME: 'username',
    },
    [REQUESTS.CHANGE_PASSWORD]: {
        CURRENT_PASSWORD: 'currentPassword',
        NEW_PASSWORD: 'newPassword',
        CONFIRMED_PASSWORD: 'confirmPassword',
    },
    [REQUESTS.CONTACT_US]:{
        FULL_NAME: 'fullName',
        EMAIL: 'email',
        BODY: 'body'
    },
};
