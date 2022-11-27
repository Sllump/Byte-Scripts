const addPeekEntryByModel = (model: any, data: any, options: any) => {
    return global.exports["arp-interact"].AddPeekEntryByModel(model, data, options);
}

const addPeekEntryByTarget = (name: string, data: any, options: any) => {
    return global.exports["arp-interact"].AddPeekEntryByPolyTarget(name, data, options);
}

const addPeekEntryByFlag = (flag: string, data: any, options: any) => {
    return global.exports["arp-interact"].AddPeekEntryByFlag(flag, data, options);
}

const taskBar = (length: number, name: string, runCheck = false, moveCheck: any = false) => {
    return new Promise(resolve => {
        return global.exports["arp-taskbar"].taskBar(length, name, runCheck, true, null, false, resolve, moveCheck === null || moveCheck === void 0 ? void 0 : moveCheck["distance"], moveCheck === null || moveCheck === void 0 ? void 0 : moveCheck["entity"]);
    });
}

const phoneConfirmation = (title: string, text: string, icon: string) => {
    return new Promise(resolve => {
        return global.exports["arp-phone"].DoPhoneConfirmation(title, text, icon, resolve);
    });
}

const phoneNotification = (app: string, title: string, body: string, showEvenIfActive = true) => {
    return global.exports["arp-phone"].DoPhoneNotification(app, title, body, showEvenIfActive);
}

export default {
    addPeekEntryByModel: addPeekEntryByModel,
    addPeekEntryByTarget: addPeekEntryByTarget,
    addPeekEntryByFlag: addPeekEntryByFlag,
    taskBar: taskBar,
    phoneConfirmation: phoneConfirmation,
    phoneNotification: phoneNotification
}