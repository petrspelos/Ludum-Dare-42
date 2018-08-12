var _applications = {
    "update": {
        "friendlyName": "",
        "size": 0,
        "installed": true,
        "installer": false,
        "protected": true,
        "icon": "",
        "onUninstalled": () => { }
    },
    "notes": {
        "friendlyName": "Notes",
        "size": 15,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-bookmark-icon.png",
        "onUninstalled": () => { }
    },
    "settings-start": {
        "friendlyName": "System Settings",
        "size": 15,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/wrench-screwdriver-icon.png",
        "onUninstalled": () => { }
    },
    "console": {
        "friendlyName": "Console",
        "size": 15,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/Default-Programs-icon.png",
        "onUninstalled": () => { }
    },
    "dummy": {
        "friendlyName": "Dummy for SnoopS",
        "size": 20,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/heart-icon.png",
        "onUninstalled": undefined
    },
    "notesInstaller": {
        "friendlyName": "Install Notes",
        "size": 5,
        "installed": true,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-bookmark-icon.png",
        "onUninstalled": () => { }
    },
    "eatThePlant": {
        "friendlyName": "EAT THE PLANT! =)",
        "size": 250,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/cat-icon.png",
        "onUninstalled": () => { }
    },
    "virusButcher": {
        "friendlyName": "VirusButcher v3.93",
        "size": 50,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/malware/256/Search-icon.png",
        "onUninstalled": () => { }
    },
    "education": {
        "friendlyName": "Education",
        "size": 30,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/256/Books-icon.png",
        "onUninstalled": () => { }
    },
    "antiVirus":
    {
        "friendlyName": "WinDOORS AntiVirus",
        "size": 30,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/malware/256/Patched-icon.png",
        "onUninstalled": () => { }
    },
    "stuffBag":
    {
        "friendlyName": "Stuff.bag",
        "size": 500,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/bag-icon.png",
        // "onUninstalled": () => {  }
    },
    "bagKiller":
    {
        "friendlyName": ".BAG Remover",
        "size": 5,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/flag-alt-icon.png",
        "onUninstalled": () => { _applications['stuffBag'].onUninstalled = undefined; }
    },
    "bagKillerInstaller":
    {
        "friendlyName": ".BAG Remover Installer",
        "size": 25,
        "installed": true,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/flag-alt-icon.png",
        "onUninstalled": () => {  }
    },
    "other": {
        "friendlyName": "other sources of space usage / space unusage",
        "size": 0,
        "installed": true,
        "installer": false,
        "protected": true,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/cat-icon.png",
        "onUninstalled": () => { }
    },
    "recycleBin": {
        "friendlyName": "Recycle Bin",
        "size": 1,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/wwalczyszyn/iwindows/128/Recycle-Bin-Full-icon.png",
        "onUninstalled": () => { }
    }
}
