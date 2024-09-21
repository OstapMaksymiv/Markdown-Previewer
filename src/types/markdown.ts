export enum MarkDownTypes {
    PARSEMARKDOWN = 'PARSEMARKDOWN'
}
export interface MarkDown{
    renderedMarkdown:string
}
interface ParseMarkDownAction {
    type: MarkDownTypes.PARSEMARKDOWN,
    payload:string
}
export type MarkDownAction = ParseMarkDownAction