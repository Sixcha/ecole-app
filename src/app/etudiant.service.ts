import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  url = '/api/etudiants'

  constructor(private http: HttpClient) { }

  getEtudiants() {
    return this.http.get(this.url);
  }

  createEtudiants(etudiant: any) {
    return this.http.post(this.url, etudiant)
  }

  updateEtudiants() {
    return this.http.get('/api/etudiants');
  }

  deleteEtudiants(etudiant:any) {
    return this.http.delete(this.url+`/${etudiant._id}`);
  }
}
