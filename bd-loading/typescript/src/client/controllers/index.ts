import { InitEvents } from "./events";

export const Init = async (): Promise<void> => {
    console.log("[Loading Screen] Initalizing...");
    await InitEvents();
};

Init();