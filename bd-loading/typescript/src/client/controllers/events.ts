let spawned = false;

export async function InitEvents(): Promise<void> {
    onNet("bd:core:spawnInitialized", () => {
        if (!spawned) {
            ShutdownLoadingScreenNui();
            spawned = true;
        }
    });
}