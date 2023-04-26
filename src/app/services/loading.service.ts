import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public $isLoading: Subject<boolean> = new Subject();

  public get():Subject<boolean>{
    return this.$isLoading;
  }

  public set(value:boolean):void{
    this.$isLoading.next(value);
  }
}
