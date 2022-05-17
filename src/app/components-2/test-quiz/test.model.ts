export class TestModel{
    soruText: string;
    cevaplar: Cevap[] = [];
    cevap:number;

    constructor(soru:string, cevap:number, cevap1:string="cevap yok", cevap2:string="cevap yok", cevap3:string="cevap yok", cevap4:string="cevap yok"){
        this.soruText = soru;
        this.cevap = cevap;
        this.cevaplar.push(new Cevap(cevap1,1));
        this.cevaplar.push(new Cevap(cevap2,2));
        this.cevaplar.push(new Cevap(cevap3,3));
        this.cevaplar.push(new Cevap(cevap4,4));
    }
} 

export class Cevap{
    text:string;
    id:number;
    constructor(t:string,i:number){
        this.text = t;
        this.id = i;
    }
}