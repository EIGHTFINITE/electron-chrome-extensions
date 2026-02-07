/// <reference types="node" />
import { EventEmitter } from 'node:events';
import { ExtensionContext } from '../context';
export declare class RuntimeAPI extends EventEmitter {
    private ctx;
    private hostMap;
    constructor(ctx: ExtensionContext);
    private connectNative;
    private disconnectNative;
    private sendNativeMessage;
    private openOptionsPage;
}
