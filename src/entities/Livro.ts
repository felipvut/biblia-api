import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"

@Entity("livros")
export default class Livro{

    @PrimaryGeneratedColumn()
    liv_id : string;

    @Column()
    liv_tes_id: string;

    @Column()
    liv_posicao: string;

    @Column()
    liv_nome: string;

    @Column()
    liv_abreviado: string;

}