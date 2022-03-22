import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { PopupsComponent } from '../../popups/popups.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  validationPattern = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+(\s+[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+)*$/u,);
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, public dialog: MatDialog) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.pattern(this.validationPattern)]),
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {

  }

  get form(): { [key: string]: AbstractControl; } {
    return this.contactForm.controls;
  }

  onContactSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendForm(this.contactForm).then(result => {
        console.log(result);
        this.dialog.open(PopupsComponent, {
          data: {
            type: 'contactFormSuccess',
          },
          position: {
            top: '200px',
          },
        });
        this.contactForm.reset();
      }).catch(err => {
        console.log(err);
        this.dialog.open(PopupsComponent, {
          data: {
            type: 'contactFormFailed',
          },
          position: {
            top: '200px',
          },
        });
      })
    }
  }

  checkName(value: any) {
    if (String(value.key).match(/[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]/)) {
      return value.key;
    } else {
      value.preventDefault();
    }
  }
}

