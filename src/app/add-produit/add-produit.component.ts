import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  produitService: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newProduit = new Produit();
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit);

    }
}  
