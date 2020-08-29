import { Component, OnInit } from '@angular/core';
import { ReplyService } from 'src/app/_services/reply.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifService } from 'src/app/_services/notif.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactFormGroup: FormGroup;

  locations:any;
 
  //
  isLoading = false;
  isError = false;
  isSuccess = false;
  isSubmitted = false;
//variable pour la recuperation de image
  constructor(
    private contactservice:ReplyService,
    private notifService: NotifService,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private router: Router)
  { }

  ngOnInit() {
    this.initform();
    this.getLocations();
  }

  get form() {
    return this.contactFormGroup.controls;
  }
  

  //init form
  initform() {

    this.contactFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      
    });
  }

  getLocations() {
    this.contactservice.getLocation().then((res) => {
      this.locations = res;
      console.log(this.locations)
    }, (error) => {
      alert("aucun contact disponible")
    });
  }

  getPage(url){
    this.contactservice.getPage(url).then((resp) =>{
      this.locations=resp;
     }).catch((error) => {
       //this.notifService.danger(this.translations.Superadmins.ServerUnavailable);
     });
  }

  /* getLocations() {
    this.contactservice.getLocation().subscribe((res) => {
      this.locations = res;
      console.log(this.locations)
    }, (error) => {
      alert("aucun contact disponible")
    });
  } */


  //submit the form
  add() {
    this.isSubmitted = true;
    this.isError = false;
    this.isSuccess = false;
    this.isLoading = false
    // Si la validation a echoué, on arrete l'execution de la fonction
    //this.form.name.setValue(this.role_name);
    if (this.contactFormGroup.invalid) {
      this.translate.get('Contact.SubmitError')
        .subscribe(val => this.notifService.danger(val));
      return;
    }
    //si tout ce passe bien
    this.isLoading = true;
    const formData = new FormData();
    //ajout des donnees dans le form date
    formData.append('name', '' + this.form.name.value);
    formData.append('email', '' + this.form.email.value);
    formData.append('subject', '' + this.form.subject.value);
    formData.append('message', '' + this.form.message.value);
    
    this.contactservice.add(formData)
      .then(resp => {
        this.translate.get('Contact.SubmitSuccess')
          .subscribe(val => this.notifService.success(val));
        this.isSubmitted = false;
        //reinitialisation
        this.contactFormGroup.reset();
        
        this.router.navigate(['/contact']);
      })
      .catch(err => {
        console.log(err)
        this.translate.get('Contact.ErrorSubmit')
          .subscribe(val => this.notifService.danger(val));
      })
      .finally(() => this.isLoading = false);
  }

}





