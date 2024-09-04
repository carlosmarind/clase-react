export interface IResponse {
    count: number
    next: string
    previous: string
    results: IResult[]

}

export interface IResult {
    name: string
    url: string

}