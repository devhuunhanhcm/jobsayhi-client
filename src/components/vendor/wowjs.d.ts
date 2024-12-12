declare module 'wowjs' {
    export class WOW {
        constructor(config?: WOWConfig);
        init(): void;
    }

    export interface WOWConfig {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
        callback?: (box: HTMLElement) => void;
        scrollContainer?: string | null;
        resetAnimation?: boolean;
    }
}
