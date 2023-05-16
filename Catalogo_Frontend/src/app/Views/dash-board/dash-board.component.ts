import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js'
import {ProductoService} from "../../Service/ProductoService";
Chart.register(...registerables)
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{
chartdata: any;
labeldata:any[]=[];
  realdata:any[]=[];
  colordata:any[]=[];
  colordata2:any[]=[];
  constructor(private service: ProductoService) {
  }

  ngOnInit(): void {
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
       this.RenderChart2(this.labeldata,this.realdata,this.colordata);
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
}


