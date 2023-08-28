import type { Action } from "svelte/action";
export let observer: IntersectionObserver;
export const observerAction: Action<HTMLElement, {props:IntersectionObserverInit} | undefined, { 'on:observe': (e: CustomEvent<any>) => void }> = (container, options) => {
    const actionEvent = (container:HTMLElement, entry:IntersectionObserverEntry) => {
        const dispatch = new CustomEvent(
            "observe", {
                detail:{
                    node:entry,
                    isIntersecting: entry.isIntersecting,
                }
            }
        )
        container.dispatchEvent(dispatch)
        console.log("action dispatched");
    }

   
    const observerLogic = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log('isIntersecting', entry)
                actionEvent(container, entry);
            } else {
                // console.log('is not Intersecting', entry)
                actionEvent(container, entry);
            }
        })
    }
    if(!observer) {  
        observer = new IntersectionObserver(observerLogic, {root:container, ...options?.props})
    }

    const children = container.children;
    for (let index = 0; index < children.length; index++) {
        const child = children[index];
        observer.observe(child as HTMLElement);
    }

    return{
        update() {
            console.log("update")
        },
        destroy() {
            console.log("destroy")
        },
    }
    
}