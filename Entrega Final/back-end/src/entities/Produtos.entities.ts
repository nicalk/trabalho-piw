import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    valorAtual: number
    
    @Column()
    valorAnterior: number

}
