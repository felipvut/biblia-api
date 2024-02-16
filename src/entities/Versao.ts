import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("versoes")
export default class Versao{

    @PrimaryGeneratedColumn()
    vrs_id : number;

    @Column()
    vrs_nome: string

}