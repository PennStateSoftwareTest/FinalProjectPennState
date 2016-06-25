import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:"custom_json"})
export class JsonPipe implements PipeTransform{
    transform(value:any, args:string[]):any{
      let keys:any = [];
      for (let key in value){
        keys.push({key:key, value:value[key]});
      }
      console.log(keys);
      return keys;
    }

}