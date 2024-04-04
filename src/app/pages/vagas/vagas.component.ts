import { Component, HostListener, OnInit } from '@angular/core';
import { VagaService } from 'src/app/core/services/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  public listaVagas: any = [];
  public tecnologiasFiltro: string[] = ["HTML", "Python", "C#"];
  public semVagas: boolean = false; 
  public dadosLista: string = "Não existe dados a serem exibidos";
  public filtroNaoEncotrado: boolean = false; 
  public innerWidth: any;
  public banner = "";

  constructor(private service: VagaService) { }

  ngOnInit(): void {
    //esse método verifica se tem dados no banco serve para quando roda o projeto na primeira vez
    this.popularBanco();
    this.listarVagas();
    this.innerWidth = window.innerWidth;
    this.varificarTamanhoTela();  
  }

  @HostListener('window:resize', ['$event'])

  onResize() {
    this.innerWidth = window.innerWidth;
    this.varificarTamanhoTela();
  }

  varificarTamanhoTela() {
    if (this.innerWidth <= 375) {
      this.banner = "assets/imagens/bg-header-mobile.svg";
    } else {
      this.banner = "assets/imagens/bg-header-desktop.svg";
    }
  }

  deleteTecnologia(msg: string) {

    const index: number = this.tecnologiasFiltro.indexOf(msg);
    if (index !== -1) {
      this.tecnologiasFiltro.splice(index, 1);
      this.listarVagas();
    }    
    if (this.tecnologiasFiltro.length == 0)
      this.tecnologiasFiltro = ["Todas as Vagas"];
  }

  limparTecnologia() {
    this.tecnologiasFiltro = [];
    this.listarVagas();
    this.tecnologiasFiltro = ["Todas as Vagas"];
  }

  listarVagas() {
    this.service
      .buscarVagas(this.tecnologiasFiltro)
      .subscribe(
        (result: any) => {
          this.listaVagas = result;
          this.listaVagas.length == 0 ? this.semVagas = true : this.semVagas = false;
        },
        (error: any) => { }
      )
  }


  popularBanco() {
    this.service
      .buscarVagas(this.tecnologiasFiltro)
      .subscribe(
        (result: any) => {       
          console.log("this.listaVagas.length", result.length);  
          if(result.length == 0){
            console.log("estou no if", result.length) 
            var vaga1 = {      
              "company": "Photosnap",
              "logo": "https://picsum.photos/500/500",
              "new": true,
              "featured": true,
              "position": "Senior Frontend Developer",
              "role": "Frontend",
              "level": "Senior",
              "postedAt": "1d ago",
              "contract": "Full Time",
              "location": "USA Only",
              "languages": ["HTML", "CSS", "JavaScript"],
              "tools": []
            }

            var vaga2 = {      
              "company": "Manage",
              "logo": "https://picsum.photos/500/500",
              "new": false,
              "featured": false,
              "position": "Fullstack Developer",
              "role": "Fullstack",
              "level": "Midweight",
              "postedAt": "1d ago",
              "contract": "Part Time",
              "location": "Remote",
              "languages": ["Python"],
              "tools": ["React"]
            }
            this.adicionarVaga(vaga1);
            this.adicionarVaga(vaga2);
          } 
        },
        (error: any) => { }
      )
  }

  adicionarVaga(vaga:any){
    this.service
    .adicionarVaga(vaga)
    .subscribe(
      (result: any) => {
        this.listarVagas();
      },
      (error: any) => { }
    )
  }
}