import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'number',
})
export class NumberPipe implements PipeTransform {
    transform(value: string, template?: string): string {
        let curPos: number = 1;
        let result: string = template!.replaceAll('#', (match) => {
            curPos += 1;
            return value![curPos]
        });
        return `+${value[1]} ${result}`;
    }
}