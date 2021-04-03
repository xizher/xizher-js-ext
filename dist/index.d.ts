import { IArrayExtension } from './extension/array.extension';
import { IDateExtension } from './extension/date.extension';
import { INumberExtension } from './extension/number.extension';
import { IStringExtension } from './extension/string.extension';
declare function $ext(date: Date): IDateExtension;
declare function $ext(str: string): IStringExtension;
declare function $ext(num: number): INumberExtension;
declare function $ext<T>(arr: T[]): IArrayExtension<T>;
export default $ext;
