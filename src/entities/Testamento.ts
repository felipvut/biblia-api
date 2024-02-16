import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings";

@Entity("testamentos")
export class Testamento{

    @PrimaryGeneratedColumn()
    tes_id : number;

    @Column()
    tes_nome: string

    // constructor() {
    //     if(!this.uuid) {
    //         this.uuid = UUID
    //     }
    // }
    // Para uso futuro
}