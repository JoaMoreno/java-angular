import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  URL="http://localhost:8080/simpleCRUD/personas";

  getPersonas(){
    return this.http.get<Persona[]>(this.URL);
  }
}
