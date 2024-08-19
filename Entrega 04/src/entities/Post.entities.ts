import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    papel: string;

    @Column()
    nome: string

    @Column()
    email: string
    
    @Column()
    idade: number

    @Column()
    senha: string
}
