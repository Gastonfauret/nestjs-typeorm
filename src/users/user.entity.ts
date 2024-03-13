import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'users'}) //Va a nombrar la tabla que creara en mysql.
export default class User {

    @PrimaryGeneratedColumn() //Registro incremental.
    id: number;

    @Column({unique: true, length: 10})
    username:  string;

    @Column({length: 10})
    password: string;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'}) //Genera el time exacto al generarse.
    createdAt: Date;
}