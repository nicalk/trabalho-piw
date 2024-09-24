import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    valorAtual: number
    
    @Column()
    valorAnterior: number

    @Column()
    quantidade: number

}