import { Column } from 'typeorm'

@Entity({name: 'users'}) //Va a nombrar la tabla que creara en mysql.
export default class User {

    @PrimaryGeneratedColumn() //Registro incremental.
    id: number;

    @Column({unique: true})
    username:  string;

    @Column()
    password: string;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'}) //Genera el time exacto al generarse.
    createdAt: Date;
}