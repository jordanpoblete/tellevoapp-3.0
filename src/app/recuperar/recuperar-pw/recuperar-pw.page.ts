import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-pw',
  templateUrl: './recuperar-pw.page.html',
  styleUrls: ['./recuperar-pw.page.scss'],
})
export class RecuperarPwPage implements OnInit {
  usuario= '';
  clave= '';
  rut='';
  lista= [];
  constructor(private crud: CrudService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastController,
              private storage: Storage,
              private router: Router) {}



  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.usuario = paramMap.get('usuarioId')
      return this.storage.get(this.usuario);     
    }  )
  }
  async rescatar(txtClave)
  { 
    
    const valor = await this.storage.get(this.usuario);
    this.usuario = valor[0].usuario;
    this.clave = valor[0].clave;
    this.rut = valor[0].rut;
    console.log(this.usuario)
    console.log(this.clave)
    console.log(this.rut)

  
    if (txtClave.value.trim().length != 0)
    {
      this.clave = txtClave.value;
      const datos = [{"usuario": this.usuario,
                    "clave": this.clave,
                    "rut": this.rut }];
    
    await this.crud.agregarConKey(this.usuario,datos);
    const toast = await this.toast.create({
      message: 'Cambio de contraseña exitoso!',
      duration: 5000,
      color : "success",
      position: "bottom"
    });
    toast.present();
    
    this.router.navigate(['/home']);
    }
    else
    {
      console.log("Ingrese nueva contraseña")
      const toast = await this.toast.create({
        message: 'Ingrese nueva contraseña',
        duration: 2000,
        color : "danger",
        position: "bottom"
      });
      toast.present();
    }





    
    txtClave.value = "";
  }
  
}
