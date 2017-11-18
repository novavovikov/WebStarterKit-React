export function SetUsername(string) {
    return {
        type: `SET_USERNAME`,
        payload: string
    }
}

export function SetPassword(string) {
    return {
        type: `SET_PASSWORD`,
        payload: string
    }
}

export function ResetAuth() {
    return {
        type: `RESET_AUTH`
    }
}