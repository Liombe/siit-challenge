
export function api(...args: [(RequestInfo | URL), RequestInit?]) {
    return fetch(...args).then(res => res.json().catch(_ => res.clone().text()))
}