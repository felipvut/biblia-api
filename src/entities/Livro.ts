import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("livros")
export class Livro{

    @PrimaryGeneratedColumn()
    liv_id : number;

    @Column()
    liv_tes_id: number

    @Column()
    liv_pos: number

    @Column()
    liv_nome: string

    @Column()
    liv_abreviado: string

}