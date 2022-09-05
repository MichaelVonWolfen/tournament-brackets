/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LsacBracket {
    }
    interface LsacMatch {
    }
    interface LsacMatchItem {
        /**
          * The possition of tne match-item
         */
        "bracketPosition": "top" | "bottom" | undefined;
        /**
          * The id of the team
         */
        "teamID": string;
        /**
          * The name of the team that is competing
         */
        "teamName": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLLsacBracketElement extends Components.LsacBracket, HTMLStencilElement {
    }
    var HTMLLsacBracketElement: {
        prototype: HTMLLsacBracketElement;
        new (): HTMLLsacBracketElement;
    };
    interface HTMLLsacMatchElement extends Components.LsacMatch, HTMLStencilElement {
    }
    var HTMLLsacMatchElement: {
        prototype: HTMLLsacMatchElement;
        new (): HTMLLsacMatchElement;
    };
    interface HTMLLsacMatchItemElement extends Components.LsacMatchItem, HTMLStencilElement {
    }
    var HTMLLsacMatchItemElement: {
        prototype: HTMLLsacMatchItemElement;
        new (): HTMLLsacMatchItemElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "lsac-bracket": HTMLLsacBracketElement;
        "lsac-match": HTMLLsacMatchElement;
        "lsac-match-item": HTMLLsacMatchItemElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface LsacBracket {
    }
    interface LsacMatch {
    }
    interface LsacMatchItem {
        /**
          * The possition of tne match-item
         */
        "bracketPosition"?: "top" | "bottom" | undefined;
        /**
          * The id of the team
         */
        "teamID"?: string;
        /**
          * The name of the team that is competing
         */
        "teamName"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "lsac-bracket": LsacBracket;
        "lsac-match": LsacMatch;
        "lsac-match-item": LsacMatchItem;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lsac-bracket": LocalJSX.LsacBracket & JSXBase.HTMLAttributes<HTMLLsacBracketElement>;
            "lsac-match": LocalJSX.LsacMatch & JSXBase.HTMLAttributes<HTMLLsacMatchElement>;
            "lsac-match-item": LocalJSX.LsacMatchItem & JSXBase.HTMLAttributes<HTMLLsacMatchItemElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}