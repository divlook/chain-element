import { Option } from '~/core/option'

export interface Instance extends Option {
    use(...option: Option[]): Instance
    toString(): Promise<string>
    toDOM(): Promise<Node>
}
