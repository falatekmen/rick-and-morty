// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#2D2D2D', 
    transparent: 'transparent',
    blue: '#189ad3', 
    darkblack: 'black',
    headerColorLight: '#FF9900',
    headerColorDark: 'black',  
    appBackgroundLight: '#E5DFCA',
    appBackgroundDark: '#061602',

    greys: {
        1: '#BCBCBC',
        2: '#ACACAC',
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
        homeBackground: 'home/homeBackGround', 
        headerText:"home/headerText", 
        buttonBorder:"home/buttonBorder",
        buttonBackground:"home/episodeButton", 
        underline: "home/underline",
        episodeText: "home/episodeText"
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
    [colorNames.auth.background]: constantColors.appBackgroundDark, 
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
    [colorNames.home.homeBackground]: constantColors.appBackgroundDark,
    [colorNames.home.headerText]: constantColors.white,
    [colorNames.home.buttonBorder]: constantColors.headerColorDark,
    [colorNames.home.buttonBackground]: constantColors.greys[2],
    [colorNames.home.underline]: constantColors.darkblack,
    [colorNames.home.episodeText]: constantColors.darkblack,
    
    //settings
    [colorNames.settings.background]: constantColors.appBackgroundDark,
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
    [colorNames.auth.background]: constantColors.appBackgroundLight, 
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
    [colorNames.home.homeBackground]: constantColors.appBackgroundLight,
    [colorNames.home.headerText]: constantColors.white,
    [colorNames.home.buttonBorder]: constantColors.headerColorLight,
    [colorNames.home.buttonBackground]: constantColors.white,
    [colorNames.home.underline]: constantColors.darkblack,
    [colorNames.home.episodeText]: constantColors.darkblack,

    //settings
    [colorNames.settings.background]: constantColors.appBackgroundLight, 
    [colorNames.settings.radioButtonSelected]: constantColors.blue,
    [colorNames.settings.radioButtonUnselected]: constantColors.black,
    [colorNames.settings.signOutBorder]: constantColors.headerColorLight,
    [colorNames.settings.signOutText]: constantColors.black,
    [colorNames.settings.signOutButtonBackground]: constantColors.white,
    [colorNames.settings.titleColor]: constantColors.black,
    [colorNames.settings.username]: constantColors.black,
    [colorNames.settings.eMail]: constantColors.black,
    [colorNames.settings.tintColor]: constantColors.white,
    [colorNames.settings.headerColor]: constantColors.headerColorLight,
    [colorNames.settings.headerText]: constantColors.white,
};