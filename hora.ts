 export class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    getHora(): number {
        return this.hora;
    }

    getMinutos(): number {
        return this.minutos;
    }

    getSegundos(): number {
        return this.segundos;
    }

    getHoraCompleta(): string {
        return `${String(this.hora).padStart(2, "0")}:${String(this.minutos).padStart(2, "0")}:${String(this.segundos).padStart(2, "0")}`;
    }
}