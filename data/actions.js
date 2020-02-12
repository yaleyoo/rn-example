export const ACTIONS = {
    SET_FONTSIZE : 'SET_FONTSIZE'
}

export function setFontSize(fontSize) {
    return { type: ACTIONS.SET_FONTSIZE, fontSize }
}