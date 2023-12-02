function delayedResponseWithCallback(callback: () => void): void {
    setTimeout(() => {
        console.log(`3. Inside delayedResponseWithCallback`);
        callback();
    }, 2000);
}

function afterWait(): void {
    console.log(`6. afterWait()`);
}

function callDelayedAndWait(): void {
    console.log(`1. calling delayedResponseWithCallback`);
    delayedResponseWithCallback(afterWait);
    console.log(`4. after calling delayedResponseWithCallback`);
}

callDelayedAndWait();
