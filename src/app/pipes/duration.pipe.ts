import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  public transform(minutes: number): string {
    let hourMinuteString: string;
    const amountMin = minutes % 60;
    const amountHour = Math.floor(minutes / 60);

    hourMinuteString = amountMin ? `${amountMin} min` : '';
    if (amountHour) {
      hourMinuteString = `${amountHour} h ${hourMinuteString}`;
    }

    return hourMinuteString;
  }
}
