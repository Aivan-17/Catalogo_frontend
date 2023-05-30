import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js'
import {ProductoService} from "../../Service/ProductoService";
import {FormControl, FormGroup} from "@angular/forms";
Chart.register(...registerables)
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{
chartdata: any;
  public myChartf: any;
  public myChartff: any;
labeldata:any[]=[];
  labeldata2:any[]=[];
  labeldata3:any[]=[];
  realdata:any[]=[];
  realdata2:any[]=[];
  realdata3:any[]=[];
  colordata:any[]=[];
  colordata2:any[]=[];
  colordata3:any[]=[];
  colordata4:any[]=[];
  UserForm: FormGroup = new FormGroup({})
  UserForm2: FormGroup = new FormGroup({})
  constructor(private service: ProductoService) {
  }

  ngOnInit(): void {


    this.UserForm = new FormGroup({
      userType: new FormControl('hp',[]),
      busqueda: new FormControl('',[]),
      userType2: new FormControl('hp',[]),

    });

    this.UserForm2 = new FormGroup({
      userType2: new FormControl('hp',[]),
      busqueda2: new FormControl('',[]),


    });



    let dato;
    dato = localStorage.getItem('idUsuario');
    let cc= Number(dato);
    this.service.getProdsUs(cc).subscribe(result=>{
     this.chartdata=result;
     if(this.chartdata!=null){
       for (let i=0; i<this.chartdata.length;i++){
         console.log(this.chartdata[i]);
         this.labeldata.push(this.chartdata[i].nombre)
         this.realdata.push(this.chartdata[i].vistas)

         var simbolos, color, color2;
         simbolos = "0123456789ABCDEF";
         color = "#";
         color2 = "#";
         for(let i = 0; i < 6; i++){
           color = color + simbolos[Math.floor(Math.random() * 16)];
           color2 = color2 + simbolos[Math.floor(Math.random() * 16)];
         }


         this.colordata.push(color)
         this.colordata2.push(color)



       }
       this.RenderChart(this.labeldata,this.realdata,this.colordata);
       this.RenderChart2(this.labeldata,this.realdata,this.colordata2);

     }
    });






  }
  RenderChart(labeldata:any, maindata:any, colordata:any){

    const  myChart = new Chart("piechart",{
      type: 'bar',
      data: {
        labels: labeldata,


        datasets: [{
          label: 'vistas del producto',
                    data: maindata,
          backgroundColor: colordata
        }]
      }     })

  }


  RenderChart2(labeldata:any, maindata:any, colordata:any){

    const  myChart = new Chart("chart2",{
      type: 'doughnut',
      data: {
        labels: labeldata,



        datasets: [{
          label: 'vistas del producto',

          data: maindata,
          backgroundColor: colordata
        }]
      }     })







  }


  RenderChart3(labeldata:any, maindata:any, colordata:any){




  }

  getMarca(){
   let m=    this.UserForm.value.userType;
    let cc=   "cannon";
    let s=   "Sony";
    let sm=   "Samsung";
    let lg=   "LG";
    let chartdata2="";
    let count=this.labeldata2.length;

      this.labeldata2.shift()

this.colordata3.shift()

      this.realdata2.shift()

    this.service.getMArcaDash(m).subscribe(result=>{
      if (this.myChartf) {
        this.myChartf.reset();
        this.myChartf.destroy();
      }
      chartdata2=result;
      if(chartdata2!=null){

        console.log(chartdata2);
        this.labeldata2.push(m)
        this.realdata2.push(chartdata2)

        var simbolos, color3;
        simbolos = "0123456789ABCDEF";

        color3 = "#";
        for(let i = 0; i < 6; i++){

          color3 = color3 + simbolos[Math.floor(Math.random() * 16)];
        }


        this.colordata3.push(color3)


        console.log(this.colordata3);




        this.myChartf = new Chart("piechart2",{
          type: 'bar',
          data: {
            labels: this.labeldata2,


            datasets: [{
              label: 'vistas del producto',
              data: this.realdata2,
              backgroundColor: this.colordata3
            }]
          }     })


      }
    });
  }



  getCategoria(){

    let m=    this.UserForm2.value.userType2;
    let cc=   "cannon";
    let s=   "Sony";
    let sm=   "Samsung";
    let lg=   "LG";
    let chartdata2="";
let count=this.labeldata3.length;

  this.labeldata3.shift()

this.colordata4.shift()
      this.realdata3.shift();



    this.service.getProductoDash(m).subscribe(result=>{
      if (this.myChartff) {
        this.myChartff.reset();
        this.myChartff.destroy();
      }
      chartdata2=result;
      if(chartdata2!=null){

        console.log(chartdata2);
        this.labeldata3.push(m)
        this.realdata3.push(chartdata2)
        console.log(this.realdata3);
        console.log(this.labeldata3);
        var simbolos, color3;
        simbolos = "0123456789ABCDEF";

        color3 = "#";
        for(let i = 0; i < 6; i++){

          color3 = color3 + simbolos[Math.floor(Math.random() * 16)];
        }


        this.colordata4.push(color3)

        console.log(this.colordata4);





        this.myChartff = new Chart("piechart3",{
          type: 'bar',
          data: {
            labels: this.labeldata3,


            datasets: [{
              label: 'vistas del producto',
              data: this.realdata3,
              backgroundColor: this.colordata4
            }]
          }     })


      }
    });
  }


}


