import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuariosModel} from "../../Models/Usuarios";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../Service/UsuarioService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  private user: UsuariosModel = new UsuariosModel;

  constructor(private router: Router,private route:ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({

      nickname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      userType: new FormControl('1',[]),


    }, );
  }

  Login(){

    this.usuarioService.Login(this.UserForm.value.nickname).subscribe(

      data => {
        this.user=data[0];
        console.log( data);
        console.log( this.user.usuario);
        console.log( this.UserForm.value.nickname);

        if((this.user.usuario == this.UserForm.value.nickname)&&(this.user.clave== this.UserForm.value.password)&&(this.user.status==1)){

          if (this.user.prioridad=="1"){
            this.router.navigateByUrl('/lista-cliente');}
          if (this.user.prioridad=="2"){
            this.router.navigateByUrl('/lista-admin');}

        }
        else{

          alert("contraseña o usuario incorrectos");
        }
      }

    )



  }


}
