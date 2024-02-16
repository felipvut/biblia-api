import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("versoes")
export class Versao{

    @PrimaryGeneratedColumn()
    vrs_id : number;

    @Column()
    vrs_nome: string

}