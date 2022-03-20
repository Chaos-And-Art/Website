import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactForm } from '../models/contactForm';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactForm: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore) {
    this.contactForm = this.firestore.collection('ContactForm');
  }

  sendForm(contactForm: FormGroup): Promise<DocumentReference<any>> {
    var contactFormData = <ContactForm>{
      Name: contactForm.get('name')?.value,
      Email: contactForm.get('email')?.value,
      Subject: contactForm.get('subject')?.value,
      Message: contactForm.get('message')?.value
    };
    return this.contactForm.add(contactFormData);

  }

}
