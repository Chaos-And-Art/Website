import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  validationPattern = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+(\s+[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+)*$/u,);

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      subject: [''],
      message: [''],
    });

  }

  ngOnInit(): void {

  }

  onContactSubmit() {
    if (this.contactForm.valid) {
      console.log("valid")
      this.contactService.sendForm(this.contactForm).toPromise().then((result) => {
        console.log(result)
      }, err => {
        if (err.status >= 500) {
          window.location.href = "/confirmation/webError";
        } else {
          alert(err.message)
        }
      });
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

