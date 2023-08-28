import type { Action, ActionReturn } from "svelte/action";

export const observerAction: Action<HTMLElement, { prop: any } | undefined, { 'on:observe': (e: CustomEvent<any>) => void }> = (node, prop) => {
    const action = (node:HTMLElement) => {
        const dispatch = new CustomEvent(
            "observe", {
                detail:{
                    hello: "world"
                }
            }
        )
        node.dispatchEvent(dispatch)
        console.log("action dispatched");
    }
    action(node);

    return{
        update() {
            console.log("update")
        },
        destroy() {
            console.log("destroy")
        },
    }
}