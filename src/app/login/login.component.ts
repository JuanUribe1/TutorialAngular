import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUno: FormGroup
  loading = false

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.formUno = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.formUno)
    const usuario = this.formUno.value.usuario;
    const password = this.formUno.value.password;

    if(usuario.toLowerCase == 'Jampolx'.toLowerCase && password == 'pass'){
      //pasa

      this._snackBar.dismiss();
      this.fakeLoading();

      console.log('pasa');
    }else{
      //no pasa mostrar error
      this.mostrarError();
    }

  }

  mostrarError(){
    this._snackBar.open('Usuario o password incorrecto', 'Ocultar', {
      duration: 5000
    });
  }

  fakeLoading(){
    this.loading = true;

    //redireccion al dashboard
    setTimeout(() => {
      this.router.navigate(['dashboard']);
      //this.loading = false;
    }, 1500);
  }

}
