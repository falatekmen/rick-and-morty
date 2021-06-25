// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#2D2D2D',
    transparent: 'transparent',
    blue: '#189ad3', 
    darkblack: 'black',
    headerColorLight: '#FF9900',
    headerColorDark: 'black',  
    appBackGroundLight: '#E5DFCA',
    appBackGroundDark: '#061602',

    greys: {
        1: '#383838',
        2: '#ACACAC',
        3: '#868686',
        4: '#BCBCBC',
        5: '#E0E0E0', //checkbox border color
    },
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const colorNames = {
    auth: {
        background: 'auth/background',
        inputBorder: 'auth/inputBorder',
        inputBackground: 'auth/inputBackground',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        coloredButtonBackground: 'auth/coloredButtonBackground',
        coloredButtonText: 'auth/coloredButtonText',
        paleButtonBackground: 'auth/paleButtonBackground',
        paleButtonText: 'auth/paleButtonText',
        appNameText: 'auth/appNameText',
        appNameText: 'auth/appNameText',
        appIcon: 'auth/appIcon',
    },
    home: {
        headerColor: 'home/headerColor',
        homeBackGround: 'home/homeBackGround',
        border: "home/border", 
        background: "home/background",
        headerText:"home/headerText", 

    },
    settings: {
        background: 'settings/background',
        radioButtonSelected: 'settings/radioButtonSelected',
        radioButtonUnselected: 'settings/radioButtonUnselected',
        signOutBorder: 'settings/signOutBorder',
        signOutButtonBackground: 'settings/signOutButtonBackground',
        signOutText: 'settings/singOutText',
        titleColor: 'settings/titleColor',
        username: "settings/username",
        eMail: "settings/eMail",
        tintColor:"settings/tintColor",
        headerColor: "settings/headerColor",
        headerText: "settings/headerText",
    },
};

export const darkColors = {
    // auth
    [colorNames.auth.background]: constantColors.appBackGroundDark, 
    [colorNames.auth.paleButtonText]: constantColors.white,
    [colorNames.auth.appNameText]: constantColors.blue,
    [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.white, 40),
    [colorNames.auth.appIcon]: constantColors.blue,
    [colorNames.auth.coloredButtonBackground]: constantColors.blue,
    [colorNames.auth.inputBorder]: constantColors.blue,
    [colorNames.auth.coloredButtonText]: constantColors.white,
    [colorNames.auth.inputBackground]: toRGBA(constantColors.blue, 10),
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.inputText]: constantColors.white,

    //home
    [colorNames.home.headerColor]: constantColors.headerColorDark,
    [colorNames.home.homeBackGround]: constantColors.appBackGroundDark,
    [colorNames.home.headerText]: constantColors.white,
    
    //settings
    [colorNames.settings.background]: constantColors.appBackGroundDark,
    [colorNames.settings.radioButtonSelected]: constantColors.blue,
    [colorNames.settings.radioButtonUnselected]: constantColors.white,
    [colorNames.settings.signOutBorder]: constantColors.black,
    [colorNames.settings.signOutText]: constantColors.white,
    [colorNames.settings.titleColor]: constantColors.blue,
    [colorNames.settings.signOutButtonBackground]: constantColors.black,
    [colorNames.settings.eMail]: constantColors.white,
    [colorNames.settings.username]: constantColors.white,
    [colorNames.settings.tintColor]: constantColors.white,
    [colorNames.settings.headerColor]: constantColors.headerColorDark,
    [colorNames.settings.headerText]: constantColors.white,
};

export const lightColors = {
    // auth
    [colorNames.auth.background]: constantColors.appBackGroundLight, 
    [colorNames.auth.paleButtonText]: constantColors.black,
    [colorNames.auth.appNameText]: constantColors.blue,
    [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.black, 50),
    [colorNames.auth.appIcon]: constantColors.blue,
    [colorNames.auth.coloredButtonBackground]: constantColors.white,
    [colorNames.auth.inputBorder]: constantColors.blue, 
    [colorNames.auth.coloredButtonText]: constantColors.black,
    [colorNames.auth.inputBackground]: toRGBA(constantColors.black, 3),
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.inputText]: constantColors.black,

    //home
    [colorNames.home.headerColor]: constantColors.headerColorLight,
    [colorNames.home.homeBackGround]: constantColors.appBackGroundLight,
    [colorNames.home.headerText]: constantColors.white,

    //settings
    [colorNames.settings.background]: constantColors.appBackGroundLight, ///*
    [colorNames.settings.radioButtonSelected]: constantColors.blue,
    [colorNames.settings.radioButtonUnselected]: constantColors.black,
    [colorNames.settings.signOutBorder]: constantColors.blue,
    [colorNames.settings.signOutText]: constantColors.black,
    [colorNames.settings.signOutButtonBackground]: constantColors.white,
    [colorNames.settings.titleColor]: constantColors.blue,
    [colorNames.settings.username]: constantColors.black,
    [colorNames.settings.eMail]: constantColors.black,
    [colorNames.settings.tintColor]: constantColors.white,
    [colorNames.settings.headerColor]: constantColors.headerColorLight,
    [colorNames.settings.headerText]: constantColors.white,
};