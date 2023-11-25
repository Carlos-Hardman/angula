import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ... (código existente)

  categoriaEscolhida: string = '';
  
  // Lista de filmes por categoria
  filmesAcao = [
    { titulo: 'Batman', descricao: 'Após dois anos desde o surgimento do Batman (Christian Bale), os criminosos de Gotham City têm muito o que temer', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg' },
    { titulo: 'Vingadores', descricao: 'Os Vingadores unem forças para lutar contra Thanos, após o vilão eliminar metade dos seres vivos da galáxia', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg' },
    { titulo: 'Avatar: O Caminho da Água', descricao: 'Jake Sully (Sam Worthington) ficou paraplégico após um combate na Terra. Ele é selecionado para participar do programa Avatar em substituição ao seu irmão gêmeo, falecido. Jake viaja a Pandora, uma lua extraterrestre', imagem: 'https://th.bing.com/th/id/OIP.vwTPUoXOm20SbW7MzZgAJgHaKj?rs=1&pid=ImgDetMain' },
    { titulo: 'Extraction 2', descricao: 'Apesar de o filme começar com o objetivo de realizar o resgate de uma criança, a trama acaba por se tornar numa luta pela sobrevivência de ambos. É explorada a relação entre o mercenário', imagem: 'https://th.bing.com/th/id/OIP.ZqUiSQfLHriv0eTJKvgJYQHaKh?rs=1&pid=ImgDetMain' },
    { titulo: 'Bastados', descricao: 'Conner (Paul Walker) é forçado a participar de uma nova missão: se infiltrar no crime organizado de Miami', imagem: 'https://a-static.mlcdn.com.br/800x560/superposter-cinema-e-series-velozes-e-furiosos-10/livrariamartinsfontespaulista/1048480/7462960f153e58cb3439d3db73be991c.jpeg' },
  ];

  filmesComedia = [
    { titulo: 'Gente Grande', descricao: 'Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram ', imagem: 'https://th.bing.com/th/id/R.f25c7899daca8d4e262471d0c37780ee?rik=zMqOo7nIUPmMRA&pid=ImgRaw&r=0' },
    { titulo: 'Mistério em Paris', descricao: 'Mistério em Paris é a sequência de Mistério no Mediterrâneo. Prepare seu passaporte e mochila de aventuras, Nick Spitz (Adam Sandler) e Audrey Spitz (Jennifer Aniston) estão de malas prontas para resolver outro mistério internacional. ', imagem: 'https://br.web.img3.acsta.net/pictures/23/04/03/16/27/2188262.jpg' },
    { titulo: 'Que Horas Eu Te Pego?', descricao: 'Percy (Andrew Barth Feldman) é um jovem de 19 anos que está prestes a ir para a faculdade, mas nunca teve experiências amorosas na adolescência. Por isso, seus pais resolvem fazer um anúncio na internet à procura de uma garota experiente que aceite sair com ele em troca de dinheiro. ', imagem: '' },
    { titulo: 'Gente Grande', descricao: 'Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram ', imagem: 'https://th.bing.com/th/id/R.f25c7899daca8d4e262471d0c37780ee?rik=zMqOo7nIUPmMRA&pid=ImgRaw&r=0' },
    { titulo: 'Gente Grande', descricao: 'Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram ', imagem: 'https://th.bing.com/th/id/R.f25c7899daca8d4e262471d0c37780ee?rik=zMqOo7nIUPmMRA&pid=ImgRaw&r=0' },


    // Adicione mais filmes conforme necessário
  ];

  // Adicione mais categorias e suas respectivas listas de filmes conforme necessário
}