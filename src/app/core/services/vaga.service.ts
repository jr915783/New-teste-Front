import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { } 

  buscarVagas(filtro: string[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Vaga/BuscarVagas`, filtro);
  }

  adicionarVaga(vaga: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Vaga/AdicionarVaga`, vaga);
  }

}
