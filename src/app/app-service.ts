import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AppService{
    constructor(private http:HttpClient){}

    getAllCountries(){
        return this.http.get<Country[]>('https://restcountries.com/v3.1/all')
        .pipe(
            map((res : Country[])=>{
                return res
            }),
            catchError(this.handleError)
        )
    }
    getCountriesByRegion(region:string){
        return this.http.get<Country[]>(`https://restcountries.com/v3.1/region/${region}`)
        .pipe(
            map((res:Country[])=>{
                return res
            }),
            catchError(this.handleError)
        )
    }
    getCountriesByName(name:string){
        return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${name}`)
        .pipe(
            map((res:Country[])=>{
                return res;
            }),
            catchError(this.handleError)
        )
    }

    private handleError(error:HttpErrorResponse){
        if(error.status === 404){
            let err = []
            err.push(error)
            return err
        }else{
            alert("A data error occured.Please try again.")
        }
        
        return throwError(error.message);
    }
}

export interface Country{
    name : {
        common : string
    };
    capital:string[];
    region : string;
    population:number;
    flags:{
        png:string
    },
    isDarkModeEnable : boolean
}