var Space = 
{
    "free": 0,
    "max": 0,
    "used": 0,
    "freePercentage": 0,
    "saved": 0
}

_SpaceUpdate();

function _SpaceGetMax()
{
    let storage = 0;
    for (let app in  _applications)
    {
        app = _applications[app];
        if (app.protected) continue;
        storage += app.size;
    }
    return storage;
}

function _SpaceGetUsed()
{
    let used = 0;
    for (let app in _applications)
    {
        app = _applications[app];
        if (app.installed)
            used += app.size;
    }
    return used;
}

function _SpaceGetFree()
{
    return Space.max - Space.used;;
}

function _SpaceGetFreePercentage()
{
    return Math.round((10000*Space.free) / Space.max)/100;
}

function _SpaceIsFreeSpaceAvailable()
{
    return Space.free > 0;
}

function _SpaceUpdate()
 {
     Space.max = _SpaceGetMax();
     Space.used = _SpaceGetUsed(); 
     Space.free = _SpaceGetFree();
     Space.freePercentage = _SpaceGetFreePercentage();
     if (_SpaceIsFreeSpaceAvailable() == false)
        GameOver();
 }
