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
        "installed": true,
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
    "consoleInstaller": {
        "friendlyName": "Console Installer",
        "size": 5,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/Default-Programs-icon.png",
        "onUninstalled": () => { }
    },
    "console": {
        "friendlyName": "Console",
        "size": 15,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/Default-Programs-icon.png",
        "onUninstalled": () => { }
    },
    "notesInstaller": {
        "friendlyName": "Install Notes",
        "size": 5,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-bookmark-icon.png",
        "onUninstalled": () => { }
    },
    "eatThePlantInstaller": {
        "friendlyName": "ETP Installer",
        "size": 10,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/cat-icon.png",
        "onUninstalled": () => { }
    },
    "eatThePlant": {
        "friendlyName": "EAT THE PLANT! =)",
        "size": 250,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/cat-icon.png",
        "onUninstalled": () => { }
    },
    "virusButcherInstaller": {
        "friendlyName": "VirusButcher Installer",
        "size": 15,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/malware/256/Search-icon.png",
        "onUninstalled": () => { }
    },
    "virusButcher": {
        "friendlyName": "VirusButcher v3.93",
        "size": 50,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/malware/256/Search-icon.png",
        "onUninstalled": () => { }
    },
    "educationInstaller": {
        "friendlyName": "Education Installer",
        "size": 10,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/256/Books-icon.png",
        "onUninstalled": () => { }
    },
    "education": {
        "friendlyName": "Education",
        "size": 30,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/256/Books-icon.png",
        "onUninstalled": () => { }
    },
    "antiVirusInstaller": {
        "friendlyName": "WinDOORS AntiVirus Installer",
        "size": 5,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/malware/256/Patched-icon.png",
        "onUninstalled": () => { }
    },
    "antiVirus":
    {
        "friendlyName": "WinDOORS AntiVirus",
        "size": 30,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/malware/256/Patched-icon.png",
        "onUninstalled": () => { VirusSetInfectionPercentage(50); }
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
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/flag-alt-icon.png",
        "onUninstalled": () => {  }
    },
    "other": {
        "friendlyName": "other sources of space usage / space unusage",
        "size": -0,
        "installed": true,
        "installer": false,
        "protected": true,
        "icon": "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/cat-icon.png",
        "onUninstalled": () => { }
    },
    "appStore": {
        "friendlyName": "App store",
        "size": 25,
        "installed": true,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/designcontest/ecommerce-business/256/store-icon.png",
        "onUninstalled": () => { }
    },
    "eyesInstaller": {
        "friendlyName": "Eyes Installer",
        "size": 25,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/aegisub-icon.png",
        "onUninstalled": () => { }
    },
    "eyes": {
        "friendlyName": "Eyes",
        "size": 150,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/aegisub-icon.png",
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
    },
    "settings-appOverviewInstaller": {
        "friendlyName": "Application Overview Installer",
        "size": 1,
        "installed": false,
        "installer": true,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/128/Applications-Cascade-icon.png",
        "onUninstalled": () => { }
    },
    "settings-appOverview": {
        "friendlyName": "Application Overview",
        "size": 1,
        "installed": false,
        "installer": false,
        "protected": false,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/128/Applications-Cascade-icon.png",
        "onUninstalled": () => { }
    },
    "virus1": {
        "friendlyName": "Deadly Virus 1",
        "size": 10,
        "installed": false,
        "installer": false,
        "protected": false,
        "virus": true,
        "icon": "http://icons.iconarchive.com/icons/hopstarter/malware/256/Notification-icon.png",
        "onUninstalled": () => { },
        "virusAction": () => { }
    },
    "virus2": {
        "friendlyName": "Notivirus",
        "size": 25,
        "installed": false,
        "installer": false,
        "protected": false,
        "virus": true,
        "icon": "http://icons.iconarchive.com/icons/gianni-polito/colobrush/128/software-firefox-icon.png",
        "onUninstalled": () => { },
        "virusAction": () => { 
            setTimeout(NotificationShow, getRandomInt(0, 10000), "YEEEET!", "", "http://icons.iconarchive.com/icons/gianni-polito/colobrush/128/software-firefox-icon.png");
            setTimeout(NotificationShow, getRandomInt(0, 10000), "YEEEET!", "", "http://icons.iconarchive.com/icons/gianni-polito/colobrush/128/software-firefox-icon.png");
            setTimeout(NotificationShow, getRandomInt(0, 10000), "YEEEET!", "", "http://icons.iconarchive.com/icons/gianni-polito/colobrush/128/software-firefox-icon.png");
            setTimeout(NotificationShow, getRandomInt(0, 10000), "YEEEET!", "", "http://icons.iconarchive.com/icons/gianni-polito/colobrush/128/software-firefox-icon.png");
        }
    },
    "virus3": {
        "friendlyName": "Switcheroo",
        "size": 10,
        "installed": false,
        "installer": false,
        "protected": false,
        "virus": true,
        "icon": "http://icons.iconarchive.com/icons/raindropmemory/down-to-earth/128/Recycle-1-1-icon.png",
        "onUninstalled": () => {
            _fakeApps = [];
         },
        "virusAction": () => {
            var installedApps = AppsGetAllInstalled(true);
            var randAppId = ObjectPickRandomProperty(installedApps);
            var randApp = installedApps[randAppId];
            var fakeApp = Object.assign({}, randApp);
            fakeApp.fake = true;
            _fakeApps[randAppId] = fakeApp;
            IconsReload(true);
        }
    },
    "virus4": {
        "friendlyName": "Garbage-Uncollector",
        "size": 10,
        "installed": true,
        "installer": false,
        "protected": false,
        "virus": true,
        "icon": "http://icons.iconarchive.com/icons/robinweatherall/recycling/128/paper-icon.png",
        "onUninstalled": () => {},
        "virusAction": () => {
            if (_applicationState['recycleBin'] == undefined) return;
            var amount = getRandomInt(1, 3);
            for (let i = 0; i < amount; i++) 
            {
                var initialFiles = _applicationState['recycleBin']['initialItems'];
                var randItem = initialFiles[getRandomInt(0, initialFiles.length)];
                //if (_applicationState['recycleBin']['items'].indexOf(randItem) > -1) continue;
                if (_applicationState['recycleBin']['items'].length == 0)
                {
                    _applications.recycleBin.icon = 'http://icons.iconarchive.com/icons/wwalczyszyn/iwindows/128/Recycle-Bin-Full-icon.png';
                    IconsReload();
                }                    
                _applicationState['recycleBin']['items'].push(randItem);
                SpaceAdd(-randItem.length, true);
            }
        }
    }
};

var _fakeApps = [];
