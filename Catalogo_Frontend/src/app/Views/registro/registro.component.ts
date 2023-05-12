import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../Service/UsuarioService";
import {UsuariosModel} from "../../Models/Usuarios";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public id:any;
  userlogin = true;
  userregister = false;


  UserForm: FormGroup = new FormGroup({})
  //Buttons clicks functionalities
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  constructor(private router: Router,private route:ActivatedRoute, private usuariosService: UsuarioService) { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      nickname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      userType: new FormControl('1',[]),
      repeatedPassword: new FormControl('',Validators.required),

    }, { validators: this.checkPasswords });
  }

  saveUser(){
    let user:UsuariosModel = new UsuariosModel();
    if(this.UserForm.value.password !== this.UserForm.value.repeatedPassword){
      alert("Las contraseñas no coinciden");
      return
    }
    if(this.UserForm === null)
      return

    console.log(this.UserForm.value)
    user.nombre = this.UserForm.value.name;

    user.usuario = this.UserForm.value.nickname;
    user.clave = this.UserForm.value.password;
    user.prioridad = this.UserForm.value.userType;
    console.log(user)
    this.usuariosService.saveUser(user).subscribe(
      (data:any) => {
        console.log(data);

        alert("Usuario registrado exitosamente");
        this.router.navigateByUrl('');
      }
    );
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('password').value
    // @ts-ignore
    let confirmPass = group.get('repeatedPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
}
