enum MStyle {
    Cruiser,
    Sport,
    Standard,
    Enduro,
  }


export class Motocikls {

    public Color:string;
    public MororcycleStyle:MStyle;
    public Make:string;

    /**
     * GetBike
     */
    public GetBike() {
        return this.MororcycleStyle = 6.2;
    }
}