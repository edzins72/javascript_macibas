export class Car implements ITieKasBrauc{
    public VirsbuvesTips:AutoBodyType = AutoBodyType.kupe;
    public Numurs:string;
    public Krasa:string;
    public Sedvietas:number;

    public Dzinejs:Engine;


    constructor(jebkursNosaukums:AutoBodyType){
        this.VirsbuvesTips = jebkursNosaukums;
    }
    atgrieztCiparu(int: number) {
        return int + 5;
    }
    dabutRitenuSkaitu() {
        return 4;
    }
}
export class Engine{
    private Apjoms: number;
    public Nosaukums:string;
    protected DegvielasTips:Degviela;
    
    taisitKautKo(){
        this.Apjoms = 10;
        this.Nosaukums = "asdasd";
        this.DegvielasTips = Degviela.elektiba;
    }
}
export class VelViensDzinejs extends Engine{
    abc(){
        this.DegvielasTips = Degviela.h2;
    }
}

export class KravasMašīna extends Car {
    public MaxTilpums:number;
    public MaxSvars:number;

    constructor(){
        super(AutoBodyType.minivens);
    }
}


export interface ITieKasBrauc{
    atgrieztCiparu(int:number):number;
    dabutRitenuSkaitu():number;
}





enum Degviela{
    e95,e98,dizelis, h2,elektiba,
    gaze, udens
}

enum AutoBodyType{
    sedans,
    kupe,
    universals,
    hacbeks,
    kabriolets,
    pikaps,
    minivens
}

enum KafijasTips{
    Cappuccino,
    Americano,
    Espresso,
    Macchiato,
    Mocha,
    Latte
}

let kautKadaFunkcija =()=>{

    let manaAuto = new Car(AutoBodyType.pikaps);
    manaAuto.Dzinejs = new Engine();

    let kafijaPirmamGaldam = KafijasTips.Espresso;

    if(kafijaPirmamGaldam == KafijasTips.Espresso){
        
    }


    let kVmasina = new KravasMašīna();
    kVmasina.Krasa= "melns";


    let jaunaisDzinejs = new Engine();
    jaunaisDzinejs.taisitKautKo();
    jaunaisDzinejs.Nosaukums = "sdfghj";
}