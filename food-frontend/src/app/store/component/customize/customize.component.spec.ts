import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreService } from '../../services/store.service';

import { CustomizeComponent } from './customize.component';

describe('CustomizeComponent', () => {
  let component: CustomizeComponent;
  let fixture: ComponentFixture<CustomizeComponent>;
  let service: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizeComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeComponent);
    component = fixture.componentInstance;
    let buyItem = {
      "codebar": 98126,
      "name": "Combo Salmon",
      "nameStyle": "Combo <strong>Salmon</strong>",
      "price": 19300,
      "description": null,
      "image": "http://cdn.tekus.co/PT2018/images/products/98126.jpg",
      "available": true,
      "deal": false,
      "steps": [
        {
          "id": 1,
          "name": "Selecciona el término de cocción de la carne",
          "description": "La coccion de la carne es un indicador de qué tan bien cocido está un corte de carne en función de su color, jugosidad y temperatura interna.",
          "image": "http://cdn.tekus.co/PT2018/images/doneness_step.jpg",
          "selectableItems": 1,
          "available": true,
          "items": [
            {
              "id": 1,
              "name": "Azul (1/4)",
              "nameStyle": "<strong>Azul</strong> (1/4)",
              "description": "Término de cocción de la carne casi cruda, muy jugosa, solamente sellada.",
              "image": "http://cdn.tekus.co/PT2018/images/Doneness_azul.svg",
              "available": true
            },
            {
              "id": 2,
              "name": "Medio (1/2)",
              "nameStyle": "<strong>Medio</strong> (1/2)",
              "description": "Término de cocción de la carne en donde el interior es rojo-rosado y medianamente jugosa.",
              "image": "http://cdn.tekus.co/PT2018/images/Doneness_Medio.svg",
              "available": true
            },
            {
              "id": 3,
              "name": "Tres cuartos (3/4)",
              "nameStyle": "<strong>Tres cuartos</strong> (3/4)",
              "description": "Término de cocción de la carne en donde en su mayoría gris-marrón con algunos toques rosados.",
              "image": "http://cdn.tekus.co/PT2018/images/Doneness_TresCuartos.svg",
              "available": true
            },
            {
              "id": 4,
              "name": "Bien Asada (4/4)",
              "nameStyle": "<strong>Bien Asada</strong> (4/4)",
              "description": "Término de cocción de la carne en donde en su mayoría gris-marrón sin zonas rosadas.",
              "image": "http://cdn.tekus.co/PT2018/images/Doneness_BienAsada.svg",
              "available": true
            }
          ]
        },
        {
          "id": 2,
          "name": "Selecciona el acompañamiento",
          "description": "Elige uno de los compañamientos disponibles para tu combo",
          "image": "http://cdn.tekus.co/PT2018/images/Sides_step.jpg",
          "selectableItems": 1,
          "available": true,
          "items": [
            {
              "id": 4,
              "name": "Yuca a la francesa",
              "nameStyle": "<strong>Yuca</strong> a la francesa",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/Sides_YucaFrancesa.svg",
              "available": true
            },
            {
              "id": 1,
              "name": "Casquitos de papa",
              "nameStyle": "<strong>Casquitos</strong> de papa",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/Sides_PapaCascos.svg",
              "available": true
            },
            {
              "id": 2,
              "name": "Papa cocida",
              "nameStyle": "Papa <strong>cocida</strong>",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/Sides_PapaCocida.svg",
              "available": true
            },
            {
              "id": 3,
              "name": "Papas a la francesa",
              "nameStyle": "Papas a la <strong>francesa</strong>",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/Sides_PapaFrancesa.svg",
              "available": true
            },
            {
              "id": 0,
              "name": "Sin acompañamiento",
              "nameStyle": "<strong>Sin</strong> acompañamiento",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/btn_delete.svg",
              "available": true
            }
          ]
        },
        {
          "id": 3,
          "name": "Selecciona la ensalada",
          "description": "Elige si deseas ensalada con tu combo, el precio del producto no varia en caso de omitirla",
          "image": "http://cdn.tekus.co/PT2018/images/salads_step.jpg",
          "selectableItems": 1,
          "available": true,
          "items": [
            {
              "id": 1,
              "name": "Ensalada del día",
              "nameStyle": "<strong>Ensalada</strong> del día",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/Salad_EnsaladaDia.svg",
              "available": true
            },
            {
              "id": 0,
              "name": "Sin ensalada",
              "nameStyle": "<strong>Sin</strong> ensalada",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/btn_delete.svg",
              "available": true
            }
          ]
        },
        {
          "id": 4,
          "name": "Selecciona ¿cómo te gusta?",
          "description": "Elige una o mas opciones según la manera en que quieres tu producto, luego presiona continuar",
          "image": "http://cdn.tekus.co/PT2018/images/customs_step.jpg",
          "selectableItems": -1,
          "available": true,
          "items": [
            {
              "id": 0,
              "name": "Empaque para llevar",
              "nameStyle": "Empaque para <strong>llevar</strong>",
              "description": null,
              "image": "http://cdn.tekus.co/PT2018/images/Custom_ParaLlevar.svg",
              "available": true
            }
          ]
        }
      ]
    }
    component.itemBuy=buyItem;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('There is h1 tag with text Combo Salmon', () => {
    const compiled =fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Combo Salmon')
  });

});
