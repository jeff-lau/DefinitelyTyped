// Type definitions for react-text-mask 5.1
// Project: https://github.com/text-mask/text-mask
// Definitions by: Guilherme Hübner <https://github.com/guilhermehubner>
//                 Jeff Lau <https://github.com/jeff-lau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

export type maskArray = Array<string | RegExp>;

export interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: maskArray | ((value: string) => maskArray);

    guide?: boolean;

    placeholderChar?: string;

    keepCharPositions?: boolean;

    pipe?: (conformedValue: string, config: any) => false | string | { value: string, indexesOfPipedChars: number[] };

    showMask?: boolean;

    render: (ref: HTMLInputElement, props: any) => JSX.Element;
}

export interface conformToMaskResult {
    conformedValue: string;
    meta: {
        someCharsRejected: boolean
    };
}

export default class MaskedInput extends React.Component<MaskedInputProps, any> {}

export function conformToMask(text: string, mask: maskArray, config: any): conformToMaskResult;
