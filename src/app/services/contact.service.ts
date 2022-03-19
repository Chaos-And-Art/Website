import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactForm } from '../models/contactForm';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendForm(contactForm: FormGroup): Observable<string> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    var contactFormData = <ContactForm>{
      Name: contactForm.get('name')?.value,
      Email: contactForm.get('email')?.value,
      Subject: contactForm.get('subject')?.value,
      Message: contactForm.get('message')?.value
    };
    return this.http.post<string>("/assets/ContactForm.php", contactFormData, httpOptions);
  }

}
