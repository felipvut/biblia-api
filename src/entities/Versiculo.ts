import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("versiculos")
export class Versiculo{

    @PrimaryGeneratedColumn()
    ver_id : number;

    @Column()
    ver_vrs_id: number

    @Column()
    ver_liv_id: number

    @Column()
    ver_capitulo: number

    @Column()
    ver_versiculo: number

    @Column()
    ver_texto: string

}